let db = require('../db/mysqldb.js');
let fileIo = require('../utils/fileio/fileio');

/*  
登陆接口
[{
         id: 0,
         userOpenkey: 'MNFkbS4IWcKla2nSvRkMCs8rq9mUGpecEVLorKgbrka',
         userPhone: 17630022236,
         userHeadimg: 'http://192.168.2.128:3000/src/assets/user/KKK/KKK.jpg',
         userMybg: 'http://192.168.2.128:3000/src/assets/user/GGG/myuserbg.jpg',
         userNickname: 'fantuan',
         userName: '刘志远',
         userWx: 'fantuannet',
         userQq: '283275604',
         userEmail: 'zyl@beingfoung.cn',
         userSex: '男',
         userIdnumber: 410603199409260016,
         userSchool: '河南理工大学',
         userCompany: 'beingfound',
         userOccupation: 'KOA',
         userFansnumber: 10,
         userType: '游客'
     }] */

var userLogin = async (ctx, next) => {

    let thisLoginData = ctx.request.body;
    let loginUserPhoneParams = thisLoginData[0].userPhone;
    let loginUserPhoneSql = `SELECT * FROM yh_user WHERE userPhone ='${loginUserPhoneParams}'`;
    // console.log(loginUserPhoneSql);
    await db.query(loginUserPhoneSql).then((data) => {
        // console.log('--------------------------SELECT----------------------------');
        // console.log(data);
        ctx.response.body = data;
        // console.log('------------------------------------------------------------\n\n');

    }).catch((err) => {
        console.log(err)
    });
}

var testData = async (ctx, next) => {
    /* 
    filePath,
    fileObj 
    */
    console.log(ctx.request.body);
    // let userNicknamelist = ctx.request.body[0].fileName;
    // let filePath = `./src/assets/user/${userNicknamelist}`;
    // let fileObj = 'cdscdscsc1222222';
    // let fileType = `./src/assets/user/${userNicknamelist}/${userNicknamelist}.txt`;

    // fileIo.RMFileio(filePath, fileType, fileObj).then((data) => {
    //     console.log('目录存在');
    // }).catch((err) => {
    //     console.log(err);
    //     console.log('目录不存在');
    // });

    ctx.response.body = ctx.request.body;
}

var myIfmtnumer = async (ctx, next) => {
    let readComment = [];
    let tb_condition = '*';
    let tb_name = 'yh_wccComment';
    let tb_whereUseropenkey = `wccUseropenkey = '${ctx.request.body[0].userOpenkey}'`;
    await db.sWhereDb(tb_condition, tb_name, tb_whereUseropenkey).then(data => {
        for (var i = 0; i < data.length; i++) {
            if (data[i].commentState == '未读') {
                readComment.push(data[i]);
            }
        }
        let thisCnumber = [{ thisCnumber: parseInt(readComment.length)}];
        console.log(thisCnumber);

        if (thisCnumber[0].thisCnumber > 0) {
            console.log(thisCnumber);
            ctx.response.body = thisCnumber;
        } else {
            ctx.response.body = '400';
        }

    }).catch(err => {
        console.log(err);
        ctx.response.body = '400';
    });
}

module.exports = {
    'POST /userLogin': userLogin,
    'POST /test': testData,
    'POST /myIfmtnumer': myIfmtnumer
}