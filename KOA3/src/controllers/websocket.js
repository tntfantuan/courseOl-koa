let Koa = require('koa');
let WebSocket = require('koa-websocket');
let wsapp = WebSocket(new Koa());
let wsUser = {};
let wsCtxObj = {};
let wsMessage = {};
let wsUsernickname;



let wsUserecho = wsapp.ws.use((ctx) => {
    // console.log('3434343-------------------------------------------------43434343434');
    let userData = JSON.parse(ctx.request.query.userdata);
    // console.log(userData);
    // `ctx`是从'ws`onconnection`socket.upgradereq'对象创建的常规koa上下文。
    // websocket被添加到“ctx.websocket”的上下文中。
    wsUser[userData.userNickname] = ctx;
    ctx.websocket.on('message', function (message) {
        let mwssg = JSON.parse(message);

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


        // console.log(mwssg)
        // for (let i = 0; i < wsUser.length; i++) {
        //     // if (wsUser[i].header['sec-websocket-key']) { }
        //     if (ctx == wsUser[i]) continue;
        //     wsUser[i].websocket.send(`32323242323232423`);
        //     // console.dir('返回用户KEY：' + ctxs[i].header['sec-websockex`t-key']);
        // }
        // let eee = [{'bb':{'bb':'222'},'cc':{'cc':'333'}}];
        // for (let i = 0; i < eee.length; i++) {
        // console.log(eee[i].bb);
        // }
        // for (let i = 0; i < wsUser.length; i++) {
        //     console.dir(wsUser[i].zhangsan);
        //     // if (wsUser[i].userNickname == 'zhangsan') {
        //     //     // console.dir(wsUser[i].ctxObj);
        //     //     console.dir(wsUser[i].userNickname);
        //     //     return
        //     // }
        // }




    });
});


let wsUserout = wsapp.ws.use((ctx) => {
    ctx.websocket.on("close", (message) => {
        console.log('wsUserout');

        console.log(message);
        /* 连接关闭时, 清理 上下文数组, 防止报错 */
        // delete wsUser[userData.userNickname]
        // let index = wsUser.indexOf(userData.userNickname);
        // wsUser.splice(index, 1);
        // wsUser = {}
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