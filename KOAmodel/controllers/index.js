
var fn_index = async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
    <form action="/signin" method="post">
        <p>Name: <input name="name" value="koa"></p>
        <p>Password: <input name="password" type="password"></p>
        <p><input type="submit" value="Submit"></p>
    </form>`;
}

var fn_login = async (ctx, next) => {
    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    if (name === 'koa' && password === '12345') {
        ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
    } else {
        ctx.response.body = `<h1>Login failed!</h1>
    <p><a href="/">Try again</a></p>`;
    }
}

var fn_csdata = async (ctx, next) => {
    console.log('200: data');
    var mydata = '西瓜';
    var getCsdata = [
        {
            id: 0, name: '张三', data: `我的名字叫${mydata}`, content: null
        },
        {
            id: 1, name: '礼俗', data: '我的名字叫张三', content: null
        },
        {
            id: 2, name: '哈哈', data: '我的名字叫张三', content: null
        },
        {
            id: 3, name: '给给', data: '我的名字叫张三', content: null
        }
    ]
    

    ctx.response.body = getCsdata;
    // ctx.response.body = '666777';

}

module.exports = {
    'GET /': fn_index,
    'POST /signin': fn_login,
    'GET /csdata': fn_csdata
}