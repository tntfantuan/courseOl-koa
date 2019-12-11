/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-10 17:35:56 
 * @Last Modified by: mikey.zhiyuanL
 * @Last Modified time: 2019-12-10 17:59:20
 */
var sd = require('silly-datetime');
var randomWord = require('../utils/randomkey/randomKey');
let db = require('../db/mysqldb');
let time = sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss');

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
    let tb_name = 'yh_wccComment';
    let tb_whereWlcOpenkey = `wccOpenkey = '${ctx.request.body[0].wlcOpenkey}'`;
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
    const commentCourseData = [{
        courseOpenkey: 'MNFkbS4IWcKla2nSvRkMCs8rq9mUGpecEVLorKgbrcc',
        courseUserOpenkey: 'MNFkbS4IWcKla2nSvRkMCs8rq9mUGpecEVLorKgbrka',
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
        courseOpenkey: 'MNFkbS4IWcKla2nSvRkMCs8rq9mUGpecEVLorKgbrcc',
        courseUserOpenkey: 'MNFkbS4IWcKla2nSvRkMCs8rq9mUGpecEVLorKgbrka',
        commentOpenkwy: 'MNFkbS4IWcKla2nSvRkMCs8rq9mUGpecEVLorKgbr23',
        commentContent: '嗯不错的',
        commentType: 'comment',
        commentTime: '2019-09-15:19',
        commentEquipment: 'Chrome',
        commentUserphone: 17630022236,
        commentUserheadimg: 'http://192.168.2.128:3000/src/assets/user/KKK/KKK.jpg',
        commentUsernickname: 'fantuan',
        commentUseropenkey: 'MNFkbS4IWcKla2nSvRkMCs8rq9mUGpecEVLorKgbrka'
    }]
    ctx.response.body = commentCourseData;
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

    ctx.request.body[0].commentOpenkey = randomWord.randomWord(false, 43);
    ctx.request.body[0].commentTime = time;
    ctx.request.body[0].commentEquipment = 'Chrome';
    // console.log(ctx.request.body[0]);
    // console.log('commentOpenkwy :' + commentOpenkwy);
    // ctx.websockify.on('message', (message) => {
    //     // 返回给前端的数据
    //     ctx.websocket.send(message)
    // });
    // console.log(ctx.request.body);
    ctx.response.body = ctx.request.body;
}

/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-10 17:35:56 
 * @Last Modified by:   mikey.zhiyuanL 
 * @Last Modified time: 2019-12-10 17:35:56 
 */
let commentWcc = async (ctx, next) => {
    ctx.request.body[0].commentOpenkey = randomWord.randomWord(false, 43);
    ctx.request.body[0].commentTime = time;
    /*  wccOpenkey:'',
     wccUserNickname:'',
     commentContent:'',
     commentClass:'',
     commentType:'',
     commentState:'',
     commentUserheadimg:'',
     commentUsernickname:'',
     commentTime:'',
     commentUseropenkey:'' */
    // console.log(ctx.request.body);
    let tb_name = `yh_wccComment(id,wccOpenkey,wccUseropenkey,wccUserNickname,commentContent,commentClass,commentType,commentState,commentUserheadimg,commentUsernickname,commentTime,commentOpenkey) VALUES(0,?,?,?,?,?,?,?,?,?,?,?)`;
    let tb_data = [ctx.request.body[0].wccOpenkey, ctx.request.body[0].wccUseropenkey, ctx.request.body[0].wccUserNickname, ctx.request.body[0].commentContent, ctx.request.body[0].commentClass, ctx.request.body[0].commentType, ctx.request.body[0].commentState, ctx.request.body[0].commentUserheadimg, ctx.request.body[0].commentUsernickname, ctx.request.body[0].commentTime, ctx.request.body[0].commentOpenkey];
    await db.insertDatabase(tb_name, tb_data).then((data) => {
        console.log(data);
        ctx.response.body = ctx.request.body;
    }).catch((err) => {
        console.log(err);
    })
}

module.exports = {
    'POST /commentWorkCollectionAll': commentWorkCollectionAll,
    'POST /commentCourseAll': commentCourseAll,
    'POST /commentUser': commentUser,
    'POST /commentCourse': commentCourse,
    'POST /commentWorkCollection': commentWorkCollection,
    'POST /commentWcc': commentWcc
}