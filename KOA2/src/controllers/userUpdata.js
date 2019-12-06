let db = require('../db/mysqldb.js');
var userUpdata = async (ctx, next) => {
    // const thisUserData176 = [{
    //     id: 0,
    //     userOpenkey: 'MNFkbS4IWcKla2nSvRkMCs8rq9mUGpecEVLorKgbrka',
    //     userPhone: 17630022236,
    //     userHeadimg: 'http://192.168.2.128:3000/src/assets/user/fantuan/sdfafdsfadfsdfdasvdascvsdf.jpg',
    //     userMybg:'http://192.168.2.128:3000/src/assets/user/fantuan/MNFkbS4IWcKla2nSvRkMCs8rq9mUGpecEVLorKgbrka.jpg',
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
    //     userMybg:'http://192.168.2.128:3000/src/assets/user/ZHANGSAN/38450046856217.5cee197c62185.jpg',
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
    // if (ctx.request.body[0].userOpenkey == 'MNFkbS4IWcKla2nSvRkMCs8rq9mUGpecEVLorKgbrka') {
    //     ctx.response.body = thisUserData176;
    // }else if(ctx.request.body[0].userOpenkey == 'MNFkbS4IWcKla2nSvRkMCs8rq9mUGpecEVLorKgbraa'){
    //     ctx.response.body = thisUserData136;

    // }
    let thisCheckUpdataData = ctx.request.body;
    let cUuserOpenkeyParams = thisCheckUpdataData[0].userOpenkey;
    let checkUpdataPhoneSql = `SELECT * FROM yh_user WHERE userOpenkey ='${cUuserOpenkeyParams}'`;
    console.log(checkUpdataPhoneSql);
    await db.query(checkUpdataPhoneSql).then((data) => {
        console.log('--------------------------SELECT----------------------------');
        console.log(data);
        ctx.response.body = data;
        console.log('------------------------------------------------------------\n\n');

    }).catch((err) => {
        console.log(err)
    });

}

module.exports = {
    'POST /userUpdata': userUpdata
}