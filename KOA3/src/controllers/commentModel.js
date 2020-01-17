/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-10 17:35:56 
 * @Last Modified by: mikey.zhiyuanL
 * @Last Modified time: 2020-01-14 16:04:30
 */
var sd = require('silly-datetime');
var randomWord = require('../utils/randomkey/randomKey');
let db = require('../db/mysqldb');

/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-10 17:35:56 
 * @Last Modified by:   mikey.zhiyuanL 
 * @Last Modified time: 2019-12-10 17:35:56 
 */
let commentWorkCollectionAll = async (ctx, next) => {
    const commentWorkCollectionData = [{
        wlcOpenkey: 'MNFkbS4IWcKla2nSvRkMCs8rq9mUGpecEVLorKgbrcc',
        wlcUserOpenkey: 'MNFkbS4IWcKla2nSvRkMCs8rq9mUGpecEVLorKgbrka',
        commentOpenkwy: 'MNFkbS4IWcKla2nSvRkMCs8rq9mUGpecEVLorKgbr11',
        commentContent: '我觉得自己海星',
        commentTime: '2019-09-15:19',
        commentEquipment: 'Chrome',
        commentType: 'comment',
        commentUserphone: 17630022236,
        commentUserheadimg: 'http://192.168.2.128:3000/src/assets/user/KKK/KKK.jpg',
        commentUsernickname: 'fantuannet',
        commentUseropenkey: 'MNFkbS4IWcKla2nSvRkMCs8rq9mUGpecEVLorKgbrka'
    }, {
        wlcOpenkey: 'MNFkbS4IWcKla2nSvRkMCs8rq9mUGpecEVLorKgbrbb',
        wlcUserOpenkey: 'MNFkbS4IWcKla2nSvRkMCs8rq9mUGpecEVLorKgbrka',
        commentOpenkwy: 'MNFkbS4IWcKla2nSvRkMCs8rq9mUGpecEVLorKgbr23',
        commentContent: '嗯不错的',
        commentType: 'comment',
        commentTime: '2019-09-15:19',
        commentEquipment: 'Chrome',
        commentUserphone: 17630022236,
        commentUserheadimg: 'http://192.168.2.128:3000/src/assets/user/KKK/KKK.jpg',
        commentUsernickname: 'fantuan',
        commentUseropenkey: 'MNFkbS4IWcKla2nSvRkMCs8rq9mUGpecEVLorKgbrka'
    }];
    let tb_condition = '*';
    let tb_name = 'yh_comment';
    let tb_whereWlcOpenkey = `wclcOpenkey = '${ctx.request.body[0].wclcOpenkey}'`;
    await db.sWhereDb(tb_condition, tb_name, tb_whereWlcOpenkey).then(data => {
        let thisAllcomment = data;
        // console.log(thisAllcomment);
        ctx.response.body = thisAllcomment;
    }).catch(err => {
        console.log(err);
        ctx.response.body = '400';
    });
}

/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-10 17:35:56 
 * @Last Modified by:   mikey.zhiyuanL 
 * @Last Modified time: 2019-12-10 17:35:56 
 */
let commentCourseAll = async (ctx, next) => {
    let tb_condition = '*';
    let tb_name = 'yh_comment';
    let tb_whereWlcOpenkey = `wclcOpenkey = '${ctx.request.body[0].cOpenkey}'`;
    await db.sWhereDb(tb_condition, tb_name, tb_whereWlcOpenkey).then(data => {
        
        let thisAllcomment = data;
        ctx.response.body = thisAllcomment;
    }).catch(err => {
        console.log(err);
        ctx.response.body = '400';
    });
}

/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-10 17:35:56 
 * @Last Modified by:   mikey.zhiyuanL 
 * @Last Modified time: 2019-12-10 17:35:56 
 */
let commentUser = async (ctx, next) => { }

/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-10 17:35:56 
 * @Last Modified by:   mikey.zhiyuanL 
 * @Last Modified time: 2019-12-10 17:35:56 
 */
let commentCourse = async (ctx, next) => { }

/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-10 17:35:56 
 * @Last Modified by:   mikey.zhiyuanL 
 * @Last Modified time: 2019-12-10 17:35:56 
 */
let commentWorkCollection = async (ctx, next) => {
    let time = sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss');

    ctx.request.body[0].commentOpenkey = randomWord.randomWord(false, 43);
    ctx.request.body[0].commentTime = time;
    ctx.request.body[0].commentEquipment = 'Chrome';
    ctx.response.body = ctx.request.body;
}

/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-10 17:35:56 
 * @Last Modified by:   mikey.zhiyuanL 
 * @Last Modified time: 2019-12-10 17:35:56 
 */
let commentWcc = async (ctx, next) => {
    let time = sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
    ctx.request.body[0].commentOpenkey = randomWord.randomWord(false, 43);
    ctx.request.body[0].commentTime = time;
    let tb_name = `yh_comment(id,wclcOpenkey,wclcUseropenkey,wclcUserNickname,commentContent,commentClass,commentType,commentState,commentUserheadimg,commentUsernickname,commentTime,commentOpenkey) VALUES(0,?,?,?,?,?,?,?,?,?,?,?)`;
    let tb_data = [ctx.request.body[0].wclcOpenkey, ctx.request.body[0].wclcUseropenkey, ctx.request.body[0].wclcUserNickname, ctx.request.body[0].commentContent, ctx.request.body[0].commentClass, ctx.request.body[0].commentType, ctx.request.body[0].commentState, ctx.request.body[0].commentUserheadimg, ctx.request.body[0].commentUsernickname, ctx.request.body[0].commentTime, ctx.request.body[0].commentOpenkey];

    await db.insertDatabase(tb_name, tb_data).then((data) => {
        console.log(data);
        ctx.response.body = ctx.request.body;
    }).catch((err) => {
        console.log(err);
    })
}

let myCstate = async (ctx, next) => {
    // console.log(ctx.request.body);
    let tb_name = 'yh_comment';
    let tb_setName = 'commentState';
    let tb_whereName = 'commentOpenkey';
    let tb_data = { tb_setData: '已读', tb_whereData: ctx.request.body[0].commentOpenkey };

    await db.upDataDb(tb_name, tb_setName, tb_whereName, tb_data).then(data => {
        ctx.response.body = '200';
    }).catch(err => {
        console.log(err);
    });
}

let myCdelete = async (ctx, next) => {
    let tb_name = 'yh_comment';
    let tb_whereName = `commentOpenkey = '${ctx.request.body[0].commentOpenkey}'`;
    await db.deleteDataDb(tb_name, tb_whereName).then(data => {
        ctx.response.body = '200';
    }).catch(err => { console.log(err); });
}



module.exports = {
    'POST /commentWorkCollectionAll': commentWorkCollectionAll,
    'POST /commentCourseAll': commentCourseAll,
    'POST /commentUser': commentUser,
    'POST /commentCourse': commentCourse,
    'POST /commentWorkCollection': commentWorkCollection,
    'POST /commentWcc': commentWcc,
    'POST /myCstate': myCstate,
    'POST /myCdelete': myCdelete
}