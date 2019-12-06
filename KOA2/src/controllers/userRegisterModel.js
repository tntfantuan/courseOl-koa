var sd = require('silly-datetime');
let db = require('../db/mysqldb.js');
let randomWord = require('../utils/randomkey/randomKey');

let thisRegisterData = [{}];
let time = sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
let userOpenkey = randomWord.randomWord(false, 43);

var userRegister = async (ctx, next) => {

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
    let registerUserSql = 'INSERT INTO yh_user(id, userOpenkey, userPhone, userHeadimg, userMybg,userNickname, userName, userWx, userQq, userEmail,userSex, userIdnumber, userSchool, userCompany,userOccupation, userFansnumber,userType,userRegisterTime) VALUES(0,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';

    let registerUserParms = [thisRegisterData[0].userOpenkey, thisRegisterData[0].userPhone, thisRegisterData[0].userHeadimg, thisRegisterData[0].userMybg, thisRegisterData[0].userNickname, thisRegisterData[0].userName, thisRegisterData[0].userWx, thisRegisterData[0].userQq, thisRegisterData[0].userEmail, thisRegisterData[0].userSex, thisRegisterData[0].userIdnumber, thisRegisterData[0].userSchool, thisRegisterData[0].userCompany, thisRegisterData[0].userOccupation, thisRegisterData[0].userFansnumber, thisRegisterData[0].userType, thisRegisterData[0].userRegisterTime];
    console.log(registerUserParms)


    await db.query(registerUserSql, registerUserParms).then((data) => {
        console.log('--------------------------SELECT----------------------------');
        console.log(data);
        ctx.response.body = data;
        console.log('------------------------------------------------------------\n\n');

    }).catch((err) => {
        console.log(err)
    });
}

module.exports = {
    'POST /userRegister': userRegister
}

// [ { userOpenkey: 'O7ctDxxazv4spW6bTPvToJSGSPtLN5KOFcuSXcxPtn0',
//     userPhone: '15239429719',
//     userHeadimg: 'http://localhost:3000/src/assets/user/KKK/KKK.jpg',
//     userNickname: '清风澈',
//     userName: '',
//     userWx: '15239419719',
//     userQq: '',
//     userEmail: '1483474113@qq.com',
//     userSex: '男',
//     userIdnumber: null,
//     userSchool: '',
//     userCompany: 'bf',
//     userOccupation: 'KOA',
//     userFansnumber: 10,
//     userType: '游客' },
//   { userRegisterTime: '2019-11-27 17:49:07' } ]

//   [ { userOpenkey: 'xIvV8RNJ8OslOLYjKiw0vTjZ0NlI6CpXJz021Eow3RM',
//     userPhone: '15639063119',
//     userHeadimg: 'http://localhost:3000/src/assets/user/KKK/KKK.jpg',
//     userNickname: '申晨',
//     userName: '',
//     userWx: 'SC846245228',
//     userQq: '',
//     userEmail: '846245228@qq.com',
//     userSex: '男',
//     userIdnumber: null,
//     userSchool: '',
//     userCompany: 'bf',
//     userOccupation: 'KOA',
//     userFansnumber: 10,
//     userType: '游客' },
//   { userRegisterTime: '2019-11-27 17:55:48' } ]
// CCgFrtaMpk