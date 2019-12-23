/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-19 18:18:11 
 * @Last Modified by: mikey.zhiyuanL
 * @Last Modified time: 2019-12-23 14:32:20
 */
let db = require('../db/mysqldb');

var bingfound = async (ctx, next) => {
    console.log(ctx.request.body);
    let tb_condition = `*`;
    let tb_name = 'yh_course';
    let tb_whereName = `cTitle`;
    let tb_likeName = `'%${ctx.request.body[0].fContent}%'`;

    await db.findDb(tb_condition, tb_name, tb_whereName, tb_likeName).then(data => {
        console.log(data);
        ctx.response.body = data;
    }).catch(err => {
        console.log(err);
    })
}

var thisBflist = async (ctx, next) => {
    console.log(ctx.request.body);

    let tb_condition = `*`;
    let tb_name = 'yh_course';
    let tb_whereName = `cType = '${ctx.request.body[0].cType}'`;
    await db.sAllwhereDb(tb_condition, tb_name, tb_whereName).then(data => {
        console.log(data);
        ctx.response.body = data;
    }).catch(err => {
        console.log(err);
    })
}

module.exports = {
    'POST /bfound': bingfound,
    'POST /thisbfL': thisBflist
}