/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-04 18:04:22 
 * @Last Modified by: mikey.zhiyuanL
 * @Last Modified time: 2019-12-04 18:29:22
 */

let db = require('../db/mysqldb');
let fileIo = require('../utils/fileio/fileio');

var myWorkcollectionCollect = async (ctx, next) => {
    console.log(ctx.request.body);
    let workCollectionData = [{
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
var myCourseCollect = async (ctx, next) => {
    console.log(ctx.request.body);
    let courseData = [{
        id: 1,
        courseUserheadimg: 'http://192.168.2.128:3000/src/assets/user/LISI/LISI.jpg',
        courseHeadimg: 'http://192.168.2.128:3000/src/assets/img/courseHeadImg/coursePs.jpg',
        courseType: 'ps',
        courseName: 'PS基础教程',
        courseIntroduce: '我是课程介绍，我叫PS我是课程介绍，我叫PS',
        courseChapter: '第一章',
        courseUptime: '2019-10-01',
        courseRank: '进阶',
        courseTcname: '李申',
        courseTccoursetype: 'ps',
        courseBrowsenumber: 33,
        courseLearnnumber: 100,
        coursePraisenumber: 20,
        courseCollectionnumber: 20,
        courseEWM: '',
        coursePath: 'ps/PS基础教程.mp4'
    }, {
        id: 2,
        courseUserheadimg: 'http://192.168.2.128:3000/src/assets/user/LISI/LISI.jpg',
        courseHeadimg: 'http://192.168.2.128:3000/src/assets/img/courseHeadImg/courseAe.jpg',
        courseType: 'ae',
        courseName: 'Ae基础教程',
        courseIntroduce: '我是课程介绍，我叫PS我是课程介绍，我叫PS',
        courseChapter: '第二章',
        courseUptime: '2019-10-01',
        courseRank: '进阶',
        courseTcname: '李申',
        courseTccoursetype: 'ae',
        courseBrowsenumber: 33,
        courseLearnnumber: 100,
        coursePraisenumber: 20,
        courseCollectionnumber: 20,
        courseEWM: '',
        coursePath: 'ae/Aejc.mp4'
    }, {
        id: 3,
        courseUserheadimg: 'http://192.168.2.128:3000/src/assets/user/LISI/LISI.jpg',
        courseHeadimg: 'http://192.168.2.128:3000/src/assets/img/courseHeadImg/courseAi.jpg',
        courseType: 'ai',
        courseName: 'Ai基础教程',
        courseIntroduce: '我是课程介绍，我叫PS我是课程介绍，我叫PS',
        courseChapter: '第三章',
        courseUptime: '2019-10-01',
        courseRank: '进阶',
        courseTcname: '李申',
        courseTccoursetype: 'ae',
        courseBrowsenumber: 33,
        courseLearnnumber: 100,
        coursePraisenumber: 20,
        courseCollectionnumber: 20,
        courseEWM: '',
        coursePath: 'ps/ExcitableBadCarpenterant-mobile.mp4'
    }, {
        id: 4,
        courseUserheadimg: 'http://192.168.2.128:3000/src/assets/user/LISI/LISI.jpg',
        courseHeadimg: 'http://192.168.2.128:3000/src/assets/img/courseHeadImg/courseSketch.jpg',
        courseType: 'sketch',
        courseName: 'Sketch基础教程',
        courseIntroduce: '我是课程介绍，我叫PS我是课程介绍，我叫PS',
        courseChapter: '第四章',
        courseUptime: '2019-10-01',
        courseRank: '进阶',
        courseTcname: '李申',
        courseTccoursetype: 'ps',
        courseBrowsenumber: 33,
        courseLearnnumber: 100,
        coursePraisenumber: 20,
        courseCollectionnumber: 20,
        courseEWM: '',
        coursePath: 'ps/SeparateUnlawfulGodwit-mobile.mp4'
    }, {
        id: 5,
        courseUserheadimg: 'http://192.168.2.128:3000/src/assets/user/LISI/LISI.jpg',
        courseHeadimg: 'http://192.168.2.128:3000/src/assets/img/courseHeadImg/courseDx.jpg',
        courseType: 'dx',
        courseName: '动效基础教程',
        courseIntroduce: '我是课程介绍，我叫PS我是课程介绍，我叫PS',
        courseChapter: '第五章',
        courseUptime: '2019-10-01',
        courseRank: '进阶',
        courseTcname: '李申',
        courseTccoursetype: 'ps',
        courseBrowsenumber: 33,
        courseLearnnumber: 100,
        coursePraisenumber: 20,
        courseCollectionnumber: 20,
        courseEWM: '',
        coursePath: ''
    }, {
        id: 6,
        courseUserheadimg: 'http://192.168.2.128:3000/src/assets/user/LISI/LISI.jpg',
        courseHeadimg: 'http://192.168.2.128:3000/src/assets/img/courseHeadImg/courseC4d.jpg',
        courseType: 'c4d',
        courseName: 'C4D基础教程',
        courseIntroduce: '我是课程介绍，我叫PS我是课程介绍，我叫PS',
        courseChapter: '第六章',
        courseUptime: '2019-10-01',
        courseRank: '进阶',
        courseTcname: '李申',
        courseTccoursetype: 'ps',
        courseBrowsenumber: 33,
        courseLearnnumber: 100,
        coursePraisenumber: 20,
        courseCollectionnumber: 20,
        courseEWM: '',
        coursePath: ''
    }];
    ctx.response.body = courseData;
}
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
var myFollowers = async (ctx, next) => { }
var myFans = async (ctx, next) => { }

var testData = async (ctx, next) => {
    ctx.response.body = ctx.request.body;
}
/*   64转Pjpg,去掉图片base64码前面部分data:image/png;base64
    把base64码转成buffer对象 */
    
var myUserbg = async (ctx, next) => {
    let userNicknamelist = ctx.request.body[0].myUsernickname;
    let userBgname = ctx.request.body[0].userBgname;
    let fileObj = Buffer.from(ctx.request.body[0].userMybg.replace(/^data:image\/\w+;base64,/, ""), 'base64');
    let tb_setfiled = 'userMybg';
    let filePath = `./src/assets/user/${userNicknamelist}/${userNicknamelist}bg`;
    let fileType = `./src/assets/user/${userNicknamelist}/${userNicknamelist}bg/${userBgname}.jpg`;

    fileIo.readdirFileio(filePath).then((data) => {
        fileIo.writeFileio(fileType, fileObj).then((data) => {
            updataDatabase(fileType, userNicknamelist,tb_setfiled);
        }).catch((err) => { console.log(err + '文件创建失败'); })
    }).catch((err) => { console.log(err + '目录不存在'); });
    ctx.response.body = ctx.request.body;
}
var myUserheadimg = async (ctx, next) => {
    console.log(ctx.request.body)
    let userNickname = ctx.request.body[0].userNickname;
    let userHeadimgname = ctx.request.body[0].userHeadimgname;
    let fileObj = Buffer.from(ctx.request.body[0].userHeadimg.replace(/^data:image\/\w+;base64,/, ""), 'base64');
    let tb_setfiled = 'userHeadimg';
    let filePath = `./src/assets/user/${userNickname}/${userNickname}Headimg`;
    let fileType = `./src/assets/user/${userNickname}/${userNickname}Headimg/${userHeadimgname}.jpg`;

    fileIo.readdirFileio(filePath).then((data) => {
        fileIo.writeFileio(fileType, fileObj).then((data) => {
            updataDatabase(fileType, userNickname,tb_setfiled);
        }).catch((err) => { console.log(err + '文件创建失败'); })
    }).catch((err) => { console.log(err + '目录不存在'); });
    ctx.response.body = ctx.request.body;
}

var updataDatabase = (fileType, userNickname,tb_field) => {
    let userMybg = `http://192.168.2.128:3000${fileType.substr(1)}`;
    let userMybgSql = `UPDATE yh_user SET ${tb_field} = ? WHERE userNickname = ?`;
    let userMybgParams = [userMybg, userNickname];
    db.query(userMybgSql, userMybgParams).then((data) => { console.log(data); }).catch((err) => { console.log(err); });
}

module.exports = {
    'POST /myWorkcollectionCollect': myWorkcollectionCollect,
    'POST /myCourseCollect': myCourseCollect,
    'POST /myFollowers': myFollowers,
    'POST /myFans': myFans,
    'POST /myUserbg': myUserbg,
    'POST /myUserheadimg': myUserheadimg,
    'POST /mytestData': testData,
}