/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-17 16:20:40 
 * @Last Modified by: mikey.zhiyuanL
 * @Last Modified time: 2020-01-07 16:43:49
 */
var sd = require('silly-datetime');
let db = require('../db/mysqldb');
let fileIo = require('../utils/fileio/fileio');
let randomWord = require('../utils/randomkey/randomKey');

/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-17 16:20:40 
 * @Last Modified by:   mikey.zhiyuanL 
 * @Last Modified time: 2019-12-17 16:20:40 
 */
var userRegister = async (ctx, next) => {
    let thisRegisterData = [{}];
    let time = sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
    let userOpenkey = randomWord.randomWord(false, 43);
    
    thisRegisterData[0].userOpenkey = userOpenkey;
    thisRegisterData[0].userPhone = ctx.request.body[0].userPhone;
    thisRegisterData[0].userHeadimg = 'http://192.168.2.128:3000/src/assets/user/default/defaultHeadimg.jpg';
    thisRegisterData[0].userMybg = 'http://192.168.2.128:3000/src/assets/user/default/defaultBg.jpg';
    thisRegisterData[0].userNickname = ctx.request.body[0].userNickname;
    thisRegisterData[0].userName = '';
    thisRegisterData[0].userWx = ctx.request.body[0].userWx;
    thisRegisterData[0].userQq = '';
    thisRegisterData[0].userEmail = ctx.request.body[0].userEmail;
    thisRegisterData[0].userSex = '';
    thisRegisterData[0].userIdnumber = '';
    thisRegisterData[0].userSchool = '';
    thisRegisterData[0].userCompany = '';
    thisRegisterData[0].userOccupation = '';
    thisRegisterData[0].userFansnumber = '';
    thisRegisterData[0].userType = ctx.request.body[0].userType;
    thisRegisterData[0].userRegisterTime = time;

    let userFile = `./src/assets/user/${ctx.request.body[0].userNickname}`;
    let userbgFile = `./src/assets/user/${ctx.request.body[0].userNickname}/${ctx.request.body[0].userNickname}bg`;
    let userheadimgFile = `./src/assets/user/${ctx.request.body[0].userNickname}/${ctx.request.body[0].userNickname}Headimg`;

    let registerUserSql = 'INSERT INTO yh_user(id, userOpenkey, userPhone, userHeadimg, userMybg,userNickname, userName, userWx, userQq, userEmail,userSex, userIdnumber, userSchool, userCompany,userOccupation, userFansnumber,userType,userRegisterTime) VALUES(0,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    let registerUserParms = [thisRegisterData[0].userOpenkey, thisRegisterData[0].userPhone, thisRegisterData[0].userHeadimg, thisRegisterData[0].userMybg, thisRegisterData[0].userNickname, thisRegisterData[0].userName, thisRegisterData[0].userWx, thisRegisterData[0].userQq, thisRegisterData[0].userEmail, thisRegisterData[0].userSex, thisRegisterData[0].userIdnumber, thisRegisterData[0].userSchool, thisRegisterData[0].userCompany, thisRegisterData[0].userOccupation, thisRegisterData[0].userFansnumber, thisRegisterData[0].userType, thisRegisterData[0].userRegisterTime];
    await db.query(registerUserSql, registerUserParms).then((data) => {
        fileIo.mkdirFileio(userFile).then((data) => {
            fileIo.mkdirFileio(userbgFile).then((data) => { }).catch((err) => { console.log(err + 'userbgFile目录创建失败'); });
            fileIo.mkdirFileio(userheadimgFile).then((data) => { }).catch((err) => { console.log(err + 'userheadimgFile目录创建失败'); });
        }).catch((err) => { console.log(err + 'userFile目录创建失败'); });
        ctx.response.body = thisRegisterData;
    }).catch((err) => {console.log(err);});
}

module.exports = {
    'POST /userRegister': userRegister
}