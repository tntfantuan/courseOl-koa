// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
let Koa = require('koa');
let app = new Koa();

let bodyParser = require('koa-bodyparser');
let kosstatic = require('koa-static');
let WebSocket = require('koa-websocket');
let controller = require('./src/controller');
let fs = require('fs');

// log request URL:
app.use(async (ctx, next) => {
    // console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);

    var app = ctx.app;
    await next();
});

// const ip = wsocket._socket.remoteAddress;
// wsapp.ws.use((ctx) => {

//     /* 每打开一个连接就往 上线文数组中 添加一个上下文 */
//     ctxs.push(ctx);
//     ctx.websocket.on('message', (message) => {
//         // console.log(ctx.websocket);
//         // 返回给前端的数据
//         // ctx.websocket.send(message)
//         for (let i = 0; i < ctxs.length; i++) {
//             if (ctx == ctxs[i]) continue;
//             ctxs[i].websocket.send(message);
//         }
//     });
// });




/* 此段代码故障有毒！！！ */
// wsapp.ws.use((ctx, next) => {
//     ctxs.push(ctx);
//     ctx.websocket.on("message", (message) => {
//         for (let i = 0; i < ctxs.length; i++) {
//             if (ctx == ctxs[i]) continue;
//             ctxs[i].websocket.send(message);
//         }
//     });
//     ctx.websocket.on("close", (message) => {
//         /* 连接关闭时, 清理 上下文数组, 防止报错 */
//         let index = ctxs.indexOf(ctx);
//         ctxs.splice(index, 1);
//     });
// });

// app.use(websockify());
app.use(kosstatic(__dirname, './src'));
// console.log('__dirname:    ' + __dirname);
app.use(bodyParser());
app.use(controller());
/* KOA端口3000监听 */
app.listen(3000);


console.log('app started at port 3000...');