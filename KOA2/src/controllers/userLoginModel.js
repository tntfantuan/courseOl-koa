let db = require('../db/mysqldb.js');

var userLogin = async (ctx, next) => {
    // const userData = [{
    //     id: 0,
    //     userOpenkey: 'MNFkbS4IWcKla2nSvRkMCs8rq9mUGpecEVLorKgbrka',
    //     userPhone: 17630022236,
    //     userHeadimg: 'http://192.168.2.128:3000/src/assets/user/KKK/KKK.jpg',
    //     userMybg: 'http://192.168.2.128:3000/src/assets/user/GGG/myuserbg.jpg',
    //     userNickname: 'fantuan',
    //     userName: '刘志远',
    //     userWx: 'fantuannet',
    //     userQq: '283275604',
    //     userEmail: 'zyl@beingfoung.cn',
    //     userSex: '男',
    //     userIdnumber: 410603199409260016,
    //     userSchool: '河南理工大学',
    //     userCompany: 'beingfound',
    //     userOccupation: 'KOA',
    //     userFansnumber: 10,
    //     userType: '游客'
    // }, {
    //     id: 1,
    //     userOpenkey: '',
    //     userPhone: 13938286924,
    //     userHeadimg: 'http://192.168.2.128:3000/src/assets/user/LISI/LISI.jpg',
    //     userNickname: 'fantuan',
    //     userName: '高博',
    //     userWx: 'fantuannet',
    //     userQq: '283275604',
    //     userEmail: 'zyl@beingfoung.cn',
    //     userSex: '男',
    //     userIdnumber: 410603199409260016,
    //     userSchool: '河南理工大学',
    //     userCompany: 'beingfound',
    //     userOccupation: 'KOA',
    //     userFansnumber: 10,
    //     userType: '游客'
    // }, {
    //     id: 2,
    //     userOpenkey: '',
    //     userPhone: 13938286924,
    //     userHeadimg: 'http://192.168.2.128:3000/src/assets/user/KKK/KKK.jpg',
    //     userNickname: 'fantuan',
    //     userName: '刘志远',
    //     userWx: 'fantuannet',
    //     userQq: '283275604',
    //     userEmail: 'zyl@beingfoung.cn',
    //     userSex: '男',
    //     userIdnumber: 410603199409260016,
    //     userSchool: '河南理工大学',
    //     userCompany: 'beingfound',
    //     userOccupation: 'KOA',
    //     userFansnumber: 10,
    //     userType: '游客'
    // }];
    // const thisUserData176 = [{
    //     id: 0,
    //     userOpenkey: 'MNFkbS4IWcKla2nSvRkMCs8rq9mUGpecEVLorKgbrka',
    //     userPhone: 17630022236,
    //     userHeadimg: 'http://192.168.2.128:3000/src/assets/user/FANTUAN/sdfafdsfadfsdfdasvdascvsdf.jpg',
    //     userMybg: 'http://192.168.2.128:3000/src/assets/user/FANTUAN/MNFkbS4IWcKla2nSvRkMCs8rq9mUGpecEVLorKgbrka.jpg',
    //     userNickname: 'fantuan',
    //     userName: '刘志远',
    //     userWx: 'fantuannet',
    //     userQq: '283275604',
    //     userEmail: 'zyl@beingfoung.cn',
    //     userSex: '男',
    //     userIdnumber: 410603199409260016,
    //     userSchool: '河南理工大学',
    //     userCompany: 'beingfound',
    //     userOccupation: 'KOA',
    //     userFansnumber: 10,
    //     userType: '游客'
    // }];

    // const thisUserData136 = [{
    //     id: 0,
    //     userOpenkey: 'MNFkbS4IWcKla2nSvRkMCs8rq9mUGpecEVLorKgbraa',
    //     userPhone: 13603920211,
    //     userHeadimg: 'http://192.168.2.128:3000/src/assets/user/ZHANGSAN/KKK.jpg',
    //     userMybg: 'http://192.168.2.128:3000/src/assets/user/ZHANGSAN/38450046856217.5cee197c62185.jpg',
    //     userNickname: 'zhangsan',
    //     userName: '张三',
    //     userWx: 'fantuannet',
    //     userQq: '283275604',
    //     userEmail: 'zyl@beingfoung.cn',
    //     userSex: '男',
    //     userIdnumber: 410603199409260016,
    //     userSchool: '河南理工大学',
    //     userCompany: 'beingfound',
    //     userOccupation: 'KOA',
    //     userFansnumber: 10,
    //     userType: '游客'
    // }];

    // const thisUserData139 = [{
    //     id: 1,
    //     userOpenkey: 'MNFkbS4IWcKla2nSvRkMCs8rq9mUGpecEVLorKgbr8e',
    //     userPhone: 13938286924,
    //     userHeadimg: 'http://192.168.2.128:3000/src/assets/user/LISI/LISI.jpg',
    //     userNickname: '',
    //     userName: '高博',
    //     userWx: 'fantuannet',
    //     userQq: '283275604',
    //     userEmail: 'zyl@beingfoung.cn',
    //     userSex: '男',
    //     userIdnumber: 410603199409260016,
    //     userSchool: '河南理工大学',
    //     userCompany: 'beingfound',
    //     userOccupation: 'KOA',
    //     userFansnumber: 10,
    //     userType: '游客'
    // }];
    // const thisUserState = [{
    //     userPhone: null
    // }];
    // if (ctx.request.body[0].userPhone == '17630022236') {
    //     ctx.response.body = thisUserData176;
    // } else if (ctx.request.body[0].userPhone == '13603920211') {
    //     ctx.response.body = thisUserData136;
    // } else if (ctx.request.body[0].userPhone == '13938286924') {
    //     ctx.response.body = thisUserData139;
    // } else {
    //     ctx.response.body = thisUserState;
    // }

    let thisLoginData = ctx.request.body;
    let loginUserPhoneParams = thisLoginData[0].userPhone;
    let loginUserPhoneSql = `SELECT * FROM yh_user WHERE userPhone ='${loginUserPhoneParams}'`;
    console.log(loginUserPhoneSql);
    await db.query(loginUserPhoneSql).then((data) => {
        console.log('--------------------------SELECT----------------------------');
        console.log(data);
        ctx.response.body = data;
        console.log('------------------------------------------------------------\n\n');

    }).catch((err) => {
        console.log(err)
    });
}

module.exports = {
    'POST /userLogin': userLogin
}