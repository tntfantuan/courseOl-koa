let Koa = require('koa');
let WebSocket = require('koa-websocket');
let wsapp = WebSocket(new Koa());
let wsUser = {};
let wsCtxObj = {};
let wsMessage = {};
let wsUsernickname;



var wsUserecho = wsapp.ws.use((ctx) => {
    // console.log('3434343-------------------------------------------------43434343434');
    let userData = JSON.parse(ctx.request.query.userdata);
    // console.log(userData);
    // `ctx`是从'ws`onconnection`socket.upgradereq'对象创建的常规koa上下文。
    // websocket被添加到“ctx.websocket”的上下文中。
    wsUser[userData.userNickname] = ctx;
    ctx.websocket.on('message', function (message) {
        let mwssg = JSON.parse(message);
        // console.log(mwssg);
        if (message != undefined && wsUser[mwssg.to] != undefined) {


            if (mwssg.users && mwssg.type == "all") {

                let msg = { users: mwssg.users };
                wsUser[mwssg.to].websocket.send(JSON.stringify(msg));

            } else if (mwssg.users && mwssg.type == "out") {

                console.dir(wsUser[mwssg.users]);
                delete wsUser[userData.userNickname]
                delete wsUser[mwssg.users];

            }


            if (mwssg.msg && mwssg.type == "all") {

                let msg = { msg: mwssg.msg };
                wsUser[mwssg.to].websocket.send(JSON.stringify(msg));

            }
        }

        ctx.websocket.on("close", (message) => {
            /* 连接关闭时, 清理 上下文数组, 防止报错 */
            delete wsUser[userData.userNickname]
        });
    });
});


var wsUserout = wsapp.ws.use((ctx) => {
    ctx.websocket.on("close", (message) => {
        console.log('wsUserout');
        console.log(message);
        /* 连接关闭时, 清理 上下文数组, 防止报错 */
    });
});
/* WS端口8888监听: */
wsapp.listen(8888);

module.exports = {
    '/echo/:userNickname': wsUserecho,
    '/uOut/:userNickname': wsUserout,
    // '/wsUserworkcollection/:userNickname': wsUserworkcollec,
    // '/wsComment/:userNickname': wsComment,
}