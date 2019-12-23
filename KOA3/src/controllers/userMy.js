
// INNER JOIN（内连接,或等值连接）：获取两个表中字段匹配关系的记录
/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-16 09:18:43 
 * @Last Modified by: mikey.zhiyuanL
 * @Last Modified time: 2019-12-19 16:09:33
 */
let db = require('../db/mysqldb');
let fileIo = require('../utils/fileio/fileio');

/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-04 18:04:22 
 * @Last Modified by: mikey.zhiyuanL
 * @Last Modified time: 2019-12-08 21:24:44
 */
var myWorkcollectionCollect = async (ctx, next) => {
    let tb_condition = `*`;
    let tb_name = 'yh_wccCollect';
    let tb_whereName = `wccUseropenkey = '${ctx.request.body[0].wccUseropenkey}'`;

    await db.sAllwhereDb(tb_condition, tb_name, tb_whereName).then(data => {
        // console.log(data);
        if (data.length == 0) {
            ctx.response.body = [];
        } else if (data.length >= 1) {
            ctx.response.body = data;
        }
    }).catch(err => {
        console.log(err);
    });
}

/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-04 18:04:22 
 * @Last Modified by: mikey.zhiyuanL
 * @Last Modified time: 2019-12-08 21:24:44
 */
var myCourseCollect = async (ctx, next) => {
    let tb_condition = `*`;
    let tb_name = 'yh_cCollect';
    let tb_whereName = `wccUseropenkey = '${ctx.request.body[0].wccUseropenkey}'`;

    await db.sAllwhereDb(tb_condition, tb_name, tb_whereName).then(data => {
        // console.log(data);

        if (data.length == 0) {
            ctx.response.body = [];

        } else if (data.length >= 1) {
            ctx.response.body = data;
        }
    }).catch(err => {
        console.log(err);
    });
}

/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-04 18:04:22 
 * @Last Modified by: mikey.zhiyuanL
 * @Last Modified time: 2019-12-08 21:24:44
 */
var myWorkcollection = async (ctx, next) => {
    const workCollectionData = [{
        id: 0,
        wlcOpenkey: 'MNFkbS4IWcKla2nSvRkMCs8rq9mUGpecEVLorKgbrcc',
        workcollectionHeadimg: 'http://192.168.2.128:3000/src/assets/img/workcollectionHeadImg/download1.jpg',
        workcollectionName: '作品一',
        workcollectionContent: '<img style = "width: 100%;" class="essayContentboxImg" src="http://192.168.2.128:3000/src/assets/workcollection/chQyaacccyQ/chQyaacccyQ/wc0.jpg" alt=""><img style = "width: 100%;" class="essayContentboxImg" src="http://192.168.2.128:3000/src/assets/workcollection/chQyaacccyQ/chQyaacccyQ/wc1.png" alt=""><img style = "width: 100%;" class="essayContentboxImg" src="http://192.168.2.128:3000/src/assets/workcollection/chQyaacccyQ/chQyaacccyQ/wc2.png" alt=""><img style = "width: 100%;" class="essayContentboxImg" src="http://192.168.2.128:3000/src/assets/workcollection/chQyaacccyQ/chQyaacccyQ/wc3.jpg" alt="">',
        workcollectionPraise: '20',
        workcollectionCollection: '10',
        workcollectionUptime: '',
        workcollectionUserPhone: 17630022236,
        workcollectionUserHeadimg: 'http://192.168.2.128:3000/src/assets/user/GGG/GGG.jpg',
        workcollectionUserNickname: 'fantuan',
        workcollectionUserName: '刘志远',
        workcollectionUserOpenkey: 'MNFkbS4IWcKla2nSvRkMCs8rq9mUGpecEVLorKgbrka',
    }, {
        id: 1,
        wlcOpenkey: 'MNFkbS4IWcKla2nSvRkMCs8rq9mUGpecEVLorKgbrbb',
        workcollectionHeadimg: 'http://192.168.2.128:3000/src/assets/img/workcollectionHeadImg/download2.jpg',
        workcollectionName: '作品二',
        workcollectionContent: '<img style = "width: 100%;" class="essayContentboxImg" src="http://192.168.2.128:3000/src/assets/workcollection/chQyaacccyQ/chQyaacccyQ/wc0.jpg" alt=""><img style = "width: 100%;" class="essayContentboxImg" src="http://192.168.2.128:3000/src/assets/workcollection/chQyaacccyQ/chQyaacccyQ/wc1.png" alt=""><img style = "width: 100%;" class="essayContentboxImg" src="http://192.168.2.128:3000/src/assets/workcollection/chQyaacccyQ/chQyaacccyQ/wc2.png" alt=""><img style = "width: 100%;" class="essayContentboxImg" src="http://192.168.2.128:3000/src/assets/workcollection/chQyaacccyQ/chQyaacccyQ/wc3.jpg" alt="">',
        workcollectionPraise: '20',
        workcollectionCollection: '10',
        workcollectionUptime: '',
        workcollectionCommentIdnumber: 112211222,
        workcollectionUserPhone: 17630022236,
        workcollectionUserHeadimg: 'http://192.168.2.128:3000/src/assets/user/GGG/GGG.jpg',
        workcollectionUserNickname: 'fantuan',
        workcollectionUserName: '刘志远',
        workcollectionUserOpenkey: 'MNFkbS4IWcKla2nSvRkMCs8rq9mUGpecEVLorKgbrka'
    }, {
        id: 2,
        wlcOpenkey: 'MNFkbS4IWcKla2nSvRkMCs8rq9mUGpecEVLorKgbrww',
        workcollectionHeadimg: 'http://192.168.2.128:3000/src/assets/img/workcollectionHeadImg/download3.jpg',
        workcollectionName: '作品三',
        workcollectionContent: '<img style = "width: 100%;" class="essayContentboxImg" src="http://192.168.2.128:3000/src/assets/workcollection/chQyaacccyQ/chQyaacccyQ/wc0.jpg" alt=""><img style = "width: 100%;" class="essayContentboxImg" src="http://192.168.2.128:3000/src/assets/workcollection/chQyaacccyQ/chQyaacccyQ/wc1.png" alt=""><img style = "width: 100%;" class="essayContentboxImg" src="http://192.168.2.128:3000/src/assets/workcollection/chQyaacccyQ/chQyaacccyQ/wc2.png" alt=""><img style = "width: 100%;" class="essayContentboxImg" src="http://192.168.2.128:3000/src/assets/workcollection/chQyaacccyQ/chQyaacccyQ/wc3.jpg" alt="">',
        workcollectionPraise: '20',
        workcollectionCollection: '10',
        workcollectionUptime: '',
        workcollectionCommentIdnumber: null,
        workcollectionUserPhone: 17630022236,
        workcollectionUserHeadimg: 'http://192.168.2.128:3000/src/assets/user/GGG/GGG.jpg',
        workcollectionUserNickname: 'fantuan',
        workcollectionUserName: '刘志远',
        workcollectionUserOpenkey: 'MNFkbS4IWcKla2nSvRkMCs8rq9mUGpecEVLorKgbrka',
    }, {
        id: 3,
        wlcOpenkey: 'MNFkbS4IWcKla2nSvRkMCs8rq9mUGpecEVLorKgbrqq',
        workcollectionHeadimg: 'http://192.168.2.128:3000/src/assets/img/workcollectionHeadImg/download4.jpg',
        workcollectionName: '作品四',
        workcollectionContent: '',
        workcollectionPraise: '20',
        workcollectionCollection: '10',
        workcollectionUptime: '',
        workcollectionCommentIdnumber: null,
        workcollectionUserPhone: 13603920211,
        workcollectionUserHeadimg: 'http://192.168.2.128:3000/src/assets/user/KKK/KKK.jpg',
        workcollectionUserNickname: 'zhangsan',
        workcollectionUserName: '张三',
        workcollectionUserOpenkey: 'MNFkbS4IWcKla2nSvRkMCs8rq9mUGpecEVLorKgbraa',
    }];
    ctx.response.body = workCollectionData;
}

/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-04 18:04:22 
 * @Last Modified by: mikey.zhiyuanL
 * @Last Modified time: 2019-12-08 21:24:44
 */
var myFollowers = async (ctx, next) => { }

/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-04 18:04:22 
 * @Last Modified by: mikey.zhiyuanL
 * @Last Modified time: 2019-12-08 21:24:44
 */
var myFans = async (ctx, next) => { }

/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-04 18:04:22 
 * @Last Modified by: mikey.zhiyuanL
 * @Last Modified time: 2019-12-08 21:24:44
 */
var testData = async (ctx, next) => {
    ctx.response.body = ctx.request.body;
}

/*   64转Pjpg,去掉图片base64码前面部分data:image/png;base64
    把base64码转成buffer对象 */
/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-04 18:04:22 
 * @Last Modified by: mikey.zhiyuanL
 * @Last Modified time: 2019-12-08 21:24:44
 */
var myUserbg = async (ctx, next) => {
    let userNicknamelist = ctx.request.body[0].myUsernickname;
    let userBgname = ctx.request.body[0].userBgname;
    let fileObj = Buffer.from(ctx.request.body[0].userMybg.replace(/^data:image\/\w+;base64,/, ""), 'base64');
    let tb_setfiled = 'userMybg';
    let filePath = `./src/assets/user/${userNicknamelist}/${userNicknamelist}bg`;
    let fileType = `./src/assets/user/${userNicknamelist}/${userNicknamelist}bg/${userBgname}.jpg`;

    fileIo.readdirFileio(filePath).then((data) => {
        fileIo.writeFileio(fileType, fileObj).then((data) => {
            updataDatabase(fileType, userNicknamelist, tb_setfiled);
        }).catch((err) => { console.log(err + '文件创建失败'); })
    }).catch((err) => { console.log(err + '目录不存在'); });
    ctx.response.body = ctx.request.body;
}

/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-04 18:04:22 
 * @Last Modified by: mikey.zhiyuanL
 * @Last Modified time: 2019-12-08 21:24:44
 */
var myUserheadimg = async (ctx, next) => {
    // console.log(ctx.request.body)
    let userNickname = ctx.request.body[0].userNickname;
    let userHeadimgname = ctx.request.body[0].userHeadimgname;
    let fileObj = Buffer.from(ctx.request.body[0].userHeadimg.replace(/^data:image\/\w+;base64,/, ""), 'base64');
    let tb_setfiled = 'userHeadimg';
    let filePath = `./src/assets/user/${userNickname}/${userNickname}Headimg`;
    let fileType = `./src/assets/user/${userNickname}/${userNickname}Headimg/${userHeadimgname}.jpg`;

    fileIo.readdirFileio(filePath).then((data) => {
        fileIo.writeFileio(fileType, fileObj).then((data) => {
            updataDatabase(fileType, userNickname, tb_setfiled);
        }).catch((err) => { console.log(err + '文件创建失败'); })
    }).catch((err) => { console.log(err + '目录不存在'); });
    ctx.response.body = ctx.request.body;
}

/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-04 18:04:22 
 * @Last Modified by: mikey.zhiyuanL
 * @Last Modified time: 2019-12-08 21:24:44
 */
var updataDatabase = (fileType, userNickname, tb_field) => {
    let userMybg = `http://192.168.2.128:3000${fileType.substr(1)}`;
    let userMybgSql = `UPDATE yh_user SET ${tb_field} = ? WHERE userNickname = ?`;
    let userMybgParams = [userMybg, userNickname];
    db.query(userMybgSql, userMybgParams).then((data) => { console.log(data); }).catch((err) => { console.log(err); });
}

var myUserIfmt = async (ctx, next) => {

    let tb_name = 'yh_user';
    let tb_setName = 'userNickname = ?,userName = ?,userWx = ?,userQq = ?,userEmail = ?,userSex= ?,userSchool = ?,userCompany = ?,userOccupation = ?';
    let tb_whereName = 'userOpenkey = ?';
    let tb_data = { tb_setData: ctx.request.body, tb_whereData: ctx.request.body[0].uOpenkey };
    await db.XupDataDb(tb_name, tb_setName, tb_whereName, tb_data).then(data => {
        ctx.response.body = '200';
    }).catch(err => {
        console.log(err);
    });
}

module.exports = {
    'POST /myWorkcollectionCollect': myWorkcollectionCollect,
    'POST /myCourseCollect': myCourseCollect,
    'POST /myFollowers': myFollowers,
    'POST /myFans': myFans,
    'POST /myUserbg': myUserbg,
    'POST /myUserheadimg': myUserheadimg,
    'POST /mytestData': testData,
    'POST /myUifmt': myUserIfmt
}