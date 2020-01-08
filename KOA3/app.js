// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
let Koa = require('koa');
let formidable = require('koa2-formidable')
let bodyParser = require('koa-bodyparser');
let koaBody = require('koa-body');
let kosstatic = require('koa-static');
let controller = require('./src/controller');
let app = new Koa();

let fs = require('fs');

// log request URL:
app.use(async (ctx, next) => {
    // console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    var app = ctx.app;
    await next();
});

app.use(kosstatic(__dirname, './src'));
// console.log('__dirname:    ' + __dirname);
app.use(koaBody({ multipart: true }));

app.use(bodyParser());
app.use(controller());
app.use(formidable());
/* KOA端口3000监听 */
app.listen(3000);


console.log('app started at port 3000...');