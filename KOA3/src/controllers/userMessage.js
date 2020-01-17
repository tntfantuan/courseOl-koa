var sd = require('silly-datetime');
var wsComment = require('./webSocket');
var randomWord = require('../utils/randomkey/randomKey');
let db = require('../db/mysqldb');

var systemMessage = async (ctx) => {

}

var conmmentMessage = async (ctx) => {
    let tb_condition = '*';
    let tb_name = 'yh_comment';
    let tb_whereUseropenkey = `wclcUseropenkey = '${ctx.request.body[0].userOpenkey}'`;
    await db.sWhereDb(tb_condition, tb_name, tb_whereUseropenkey).then(data => {
        let thisAllcomment = data;
        ctx.response.body = thisAllcomment;
    }).catch(err => {
        console.log(err);
        ctx.response.body = '400';
    });
}

var replyMessage = async (ctx) => {

}

// var systemMessage = async(ctx) = {

// }

module.exports = {

    'POST /sMessage': systemMessage,
    'POST /cMessage': conmmentMessage,
    'POST /rMessage': replyMessage,
}