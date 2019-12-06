let randomWord = require('../utils/randomkey/randomKey');

let commentWorkCollectionAll = async (ctx, next) => {
    // console.log('ctx.body :' + ctx.request.body.wlcOpenkey);
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
    ctx.response.body = commentWorkCollectionData;
}
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
let commentUser = async (ctx, next) => { }
let commentCourse = async (ctx, next) => { }
let commentWorkCollection = async (ctx, next) => {
    // const commentworkcollectionReply = {
    //     wlcOpenkey: ctx.request.body[0].wlcOpenkey,
    //     commentOpenkey: ctx.request.body[0].commentOpenkey,
    //     commentContent: ctx.request.body[0].commenttextarea,
    //     commentTime: '2019-09-15:19',
    //     commentEquipment: 'Chrome',
    //     commentType: ctx.request.body[0].commentType,
    //     userHeadimg: ctx.request.body[0].userHeadimg,
    //     userNickname: ctx.request.body[0].userNickname,
    //     userOpenkey: ctx.request.body[0].userOpenkey
    // }
    let commentOpenkey = randomWord.randomWord(false, 43);
    // inFormation.information('111222','');
    ctx.request.body[0].commentOpenkey = commentOpenkey;

    // console.log(ctx.request.body[0]);
    // console.log('commentOpenkwy :' + commentOpenkwy);
    // ctx.websockify.on('message', (message) => {
    //     // 返回给前端的数据
    //     ctx.websocket.send(message)
    // });

    // console.log(ctx.request.body);
    ctx.response.body = ctx.request.body; 
}


module.exports = {
    'POST /commentWorkCollectionAll': commentWorkCollectionAll,
    'POST /commentCourseAll': commentCourseAll,
    'POST /commentUser': commentUser,
    'POST /commentCourse': commentCourse,
    'POST /commentWorkCollection': commentWorkCollection
}