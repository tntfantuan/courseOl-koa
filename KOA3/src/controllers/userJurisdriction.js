/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2020-01-16 10:24:44 
 * @Last Modified by: mikey.zhiyuanL
 * @Last Modified time: 2020-01-16 12:06:52
 */
var sd = require('silly-datetime');
let db = require('../db/mysqldb');

var userJurisdriction = async (ctx, next) => {
    await db.sWhereDb('*', 'yh_adminstration', `userOpenkey = '${ctx.request.body[0].userOpenkey}'`).then(data => {
        if (data.length == 0) {
            // console.log('不是管理员');
            ctx.response.body = [{ userJurisdriction: '' }];
        } else {
            if (data[0].userJurisdriction == 9999) {
                ctx.response.body = [{ userJurisdriction: '超级管理员' }];
            }
            if (data[0].userJurisdriction == 8888) {
                ctx.response.body = [{ userJurisdriction: '管理员' }];
            }
        }
    }).catch(err => { console.log(err) });
}

/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2020-01-16 10:24:44 
 * @Last Modified by: mikey.zhiyuanL
 * @Last Modified time: 2020-01-16 11:54:59
 */
var addJurisdriction = async (ctx, next) => {
    let time = sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
    // let jurisdrictionUserSql = 'INSERT INTO yh_adminstration(id, userOpenkey, userJurisdriction, userUptime, userLogintime) VALUES(0,?,?,?,?)';
    // let jurisdrictionUserParms = [ctx.request.body[0].uesrOpenkey];
    // await db.query(jurisdrictionUserSql, jurisdrictionUserParms).then(data => {});
}

module.exports = {
    'POST /uJD': userJurisdriction,
}