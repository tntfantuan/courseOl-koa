let db = require('../db/mysqldb');
let randomWord = require('../utils/randomkey/randomKey');

/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-12 16:35:20 
 * @Last Modified by: mikey.zhiyuanL
 * @Last Modified time: 2019-12-17 14:47:43
 */
var courseAll = async (ctx, next) => {
    let courseData = [{
        id: 1,
        cUserheadimg: 'http://192.168.2.128:3000/src/assets/user/LISI/LISI.jpg',
        cHeadimg: 'http://192.168.2.128:3000/src/assets/img/courseHeadImg/coursePs.jpg',
        cType: 'ps',
        cName: 'PS基础教程',
        cIntroduce: '我是课程介绍，我叫PS我是课程介绍，我叫PS我是课程介绍，我叫PS我是课程介绍，我叫PS我是课程介绍，我叫PS我是课程介绍，我叫PS我是课程介绍，我叫PS我是课程介绍，我叫PS',
        cChapter: '第一章',
        cUptime: '2019-10-01',
        cRank: '进阶',
        cTcname: '李申',
        cTccoursetype: 'ps',
        cBrowsenumber: 33,
        cLearnnumber: 100,
        cPraisenumber: 20,
        cCollectionnumber: 20,
        cEWM: '',
        cPath: 'ps/PS基础教程.mp4'
    }, {
        id: 2,
        cUserheadimg: 'http://192.168.2.128:3000/src/assets/user/LISI/LISI.jpg',
        cHeadimg: 'http://192.168.2.128:3000/src/assets/img/courseHeadImg/courseAe.jpg',
        cType: 'ps',
        cName: 'Photoshop1 基础课程',
        cIntroduce: '我是课程介绍，我叫PS我是课程介绍，我叫PS我是课程介绍，我叫PS我是课程介绍，我叫PS我是课程介绍，我叫PS我是课程介绍，我叫PS我是课程介绍，我叫PS我是课程介绍，我叫PS',
        cChapter: '第二章',
        cUptime: '2019-10-01',
        cRank: '进阶',
        cTcname: '李申',
        cTccoursetype: 'ae',
        cBrowsenumber: 33,
        cLearnnumber: 100,
        cPraisenumber: 20,
        cCollectionnumber: 20,
        cEWM: '',
        cPath: 'ae/Aejc.mp4'
    }, {
        id: 3,
        cUserheadimg: 'http://192.168.2.128:3000/src/assets/user/LISI/LISI.jpg',
        cHeadimg: 'http://192.168.2.128:3000/src/assets/img/courseHeadImg/courseAi.jpg',
        cType: 'ai',
        cName: 'Ai基础教程',
        cIntroduce: '我是课程介绍，我叫PS我是课程介绍，我叫PS我是课程介绍，我叫PS我是课程介绍，我叫PS我是课程介绍，我叫PS我是课程介绍，我叫PS我是课程介绍，我叫PS我是课程介绍，我叫PS',
        cChapter: '第三章',
        cUptime: '2019-10-01',
        cRank: '进阶',
        cTcname: '李申',
        cTccoursetype: 'ae',
        cBrowsenumber: 33,
        cLearnnumber: 100,
        cPraisenumber: 20,
        cCollectionnumber: 20,
        cEWM: '',
        cPath: 'ps/ExcitableBadCarpenterant-mobile.mp4'
    }, {
        id: 4,
        cUserheadimg: 'http://192.168.2.128:3000/src/assets/user/LISI/LISI.jpg',
        cHeadimg: 'http://192.168.2.128:3000/src/assets/img/courseHeadImg/courseSketch.jpg',
        cType: 'sketch',
        cName: 'Sketch基础教程',
        cIntroduce: '我是课程介绍，我叫PS我是课程介绍，我叫PS我是课程介绍，我叫PS我是课程介绍，我叫PS我是课程介绍，我叫PS我是课程介绍，我叫PS我是课程介绍，我叫PS我是课程介绍，我叫PS',
        cChapter: '第四章',
        cUptime: '2019-10-01',
        cRank: '进阶',
        cTcname: '李申',
        cTccoursetype: 'ps',
        cBrowsenumber: 33,
        cLearnnumber: 100,
        cPraisenumber: 20,
        cCollectionnumber: 20,
        cEWM: '',
        cPath: 'ps/SeparateUnlawfulGodwit-mobile.mp4'
    }, {
        id: 5,
        cUserheadimg: 'http://192.168.2.128:3000/src/assets/user/LISI/LISI.jpg',
        cHeadimg: 'http://192.168.2.128:3000/src/assets/img/courseHeadImg/courseDx.jpg',
        cType: 'dx',
        cName: '动效基础教程',
        cIntroduce: '我是课程介绍，我叫PS我是课程介绍，我叫PS我是课程介绍，我叫PS我是课程介绍，我叫PS我是课程介绍，我叫PS我是课程介绍，我叫PS我是课程介绍，我叫PS我是课程介绍，我叫PS',
        cChapter: '第五章',
        cUptime: '2019-10-01',
        cRank: '进阶',
        cTcname: '李申',
        cTccoursetype: 'ps',
        cBrowsenumber: 33,
        cLearnnumber: 100,
        cPraisenumber: 20,
        cCollectionnumber: 20,
        cEWM: '',
        cPath: ''
    }];
    let tb_name = 'yh_course';
    await db.selectDatabase(tb_name).then((data) => {
        for (var i = 0; i < data.length; i++) {
            delete data[i].workcollectionUserPhone;
        }
        ctx.response.body = data;
    }).catch((err) => {
        console.log(err);
    });
}

/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-12 16:35:20 
 * @Last Modified by:   mikey.zhiyuanL 
 * @Last Modified time: 2019-12-12 16:35:20 
 */
var courseRecommend = async (ctx, next) => {
    let courseRecommenddata = [{
        id: 1,
        cUserheadimg: 'http://192.168.2.128:3000/src/assets/user/LISI/LISI.jpg',
        cHeadimg: 'http://192.168.2.128:3000/src/assets/img/courseHeadImg/coursePs.jpg',
        cType: 'ps',
        cName: 'PS基础教程',
        cIntroduce: '我是课程介绍，我叫PS我是课程介绍，我叫PS我是课程介绍，我叫PS我是课程介绍，我叫PS我是课程介绍，我叫PS我是课程介绍，我叫PS我是课程介绍，我叫PS我是课程介绍，我叫PS我是课程介绍，我叫PS我是课程介绍，我叫PS我是课程介绍，我叫PS我是课程介绍，我叫PS',
        cChapter: '第一章',
        cUptime: '2019-10-01',
        cRank: '进阶',
        cTcname: '李申',
        cTccoursetype: 'ps',
        cBrowsenumber: 33,
        cLearnnumber: 100,
        cPraisenumber: 20,
        cCollectionnumber: 20,
        cEWM: '',
        cPath: 'ps/PS基础教程.mp4'
    }, {
        id: 2,
        cUserheadimg: 'http://192.168.2.128:3000/src/assets/user/LISI/LISI.jpg',
        cHeadimg: 'http://192.168.2.128:3000/src/assets/img/courseHeadImg/courseAe.jpg',
        cType: 'ps',
        cName: 'Photoshop1 基础课程',
        cIntroduce: '我是课程介绍，我叫PS我是课程介绍，我叫PS',
        cChapter: '第二章',
        cUptime: '2019-10-01',
        cRank: '进阶',
        cTcname: '李申',
        cTccoursetype: 'ae',
        cBrowsenumber: 33,
        cLearnnumber: 100,
        cPraisenumber: 20,
        cCollectionnumber: 20,
        cEWM: '',
        cPath: 'ae/Aejc.mp4'
    }, {
        id: 3,
        cUserheadimg: 'http://192.168.2.128:3000/src/assets/user/LISI/LISI.jpg',
        cHeadimg: 'http://192.168.2.128:3000/src/assets/img/courseHeadImg/courseAi.jpg',
        cType: 'ai',
        cName: 'Ai基础教程',
        cIntroduce: '我是课程介绍，我叫PS我是课程介绍，我叫PS',
        cChapter: '第三章',
        cUptime: '2019-10-01',
        cRank: '进阶',
        cTcname: '李申',
        cTccoursetype: 'ae',
        cBrowsenumber: 33,
        cLearnnumber: 100,
        cPraisenumber: 20,
        cCollectionnumber: 20,
        cEWM: '',
        cPath: 'ps/ExcitableBadCarpenterant-mobile.mp4'
    }];
    ctx.response.body = courseRecommenddata;
}

/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-12 16:35:20 
 * @Last Modified by:   mikey.zhiyuanL 
 * @Last Modified time: 2019-12-12 16:35:20 
 */
var courseLearn = async (ctx, next) => {

    let tb_name = 'yh_course';
    let tb_setName1 = 'cBrowsenumber';
    let tb_setName2 = 'cLearnnumber';
    let tb_whereName = 'cOpenkey';
    let tb_data = { tb_setData1: ctx.request.body[0].cBrowsenumber, tb_setData2: ctx.request.body[0].cLearnnumber, tb_whereData: ctx.request.body[0].cOpenkey };

    await db.upDataDb_course(tb_name, tb_setName1, tb_setName2, tb_whereName, tb_data).then(data => {
        ctx.response.body = '200';
    }).catch(err => {
        console.log(err);
    });
}

/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-12 16:35:20 
 * @Last Modified by:   mikey.zhiyuanL 
 * @Last Modified time: 2019-12-12 16:35:20 
 */
var courseCollect = async (ctx, next) => {
    // console.log(ctx.request.body);
    let tb_condition = `cOpenkey`;
    let tb_name = 'yh_cCollect';
    let tb_whereName = `wccUseropenkey = '${ctx.request.body[0].wccUseropenkey}' AND cOpenkey = '${ctx.request.body[0].cOpenkey}'`;

    await db.sWhereDb(tb_condition, tb_name, tb_whereName).then(data => {

        if (data.length == 0) {

            let tb_condition = `*`;
            let tb_name = 'yh_course';
            let tb_whereName = `cOpenkey = '${ctx.request.body[0].cOpenkey}'`;

            db.sWhereDb(tb_condition, tb_name, tb_whereName).then(data => {

                let thisCcnumber = data[0].cCollectionnumber + 1;
                let tb_name = `yh_cCollect(id,cOpenkey,wccUseropenkey,cUseropenkey,cUserheadimg,cHeadimg,cType,cTitle,cIntroduce,cChapter,cRank,cTcname,cTccoursetype,cUptime,cBrowsenumber,cLearnnumber,cPraisenumber,cCollectionnumber,cEWM) VALUES(0,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                let tb_data = [ctx.request.body[0].cOpenkey, ctx.request.body[0].wccUseropenkey, ctx.request.body[0].cUseropenkey, ctx.request.body[0].cUserheadimg, ctx.request.body[0].cHeadimg, ctx.request.body[0].cType, ctx.request.body[0].cTitle, ctx.request.body[0].cIntroduce, ctx.request.body[0].cChapter, ctx.request.body[0].cRank, ctx.request.body[0].cTcname, ctx.request.body[0].cTccoursetype, ctx.request.body[0].cUptime, ctx.request.body[0].cBrowsenumber, ctx.request.body[0].cLearnnumber, ctx.request.body[0].cPraisenumber, thisCcnumber, ctx.request.body[0].cEWM];
                db.insertDatabase(tb_name, tb_data).then(data => { }).catch(err => {
                    console.log('insertDatabase:' + err);
                });

                let utb_name = 'yh_course';
                let utb_setName = 'cCollectionnumber';
                let utb_whereName = 'cOpenkey';
                let utb_data = { tb_setData: thisCcnumber, tb_whereData: ctx.request.body[0].cOpenkey };
                db.upDataDb(utb_name, utb_setName, utb_whereName, utb_data).then(data => {
                    let utb_name = 'yh_cPraise';
                    let utb_setName = 'cCollectionnumber';
                    let utb_whereName = 'cOpenkey';
                    let utb_data = { tb_setData: thisCcnumber, tb_whereData: ctx.request.body[0].cOpenkey };

                    db.upDataDb(utb_name, utb_setName, utb_whereName, utb_data).then(data => { }).catch(err => { console.log(err); });

                    let u2tb_name = 'yh_cCollect';
                    let u2tb_setName = 'cCollectionnumber';
                    let u2tb_whereName = 'cOpenkey';
                    let u2tb_data = { tb_setData: thisCcnumber, tb_whereData: ctx.request.body[0].cOpenkey };

                    db.upDataDb(u2tb_name, u2tb_setName, u2tb_whereName, u2tb_data).then(data => { }).catch(err => { console.log(err); });
                }).catch(err => { console.log('upDataDb:' + err); });
            }).catch(err => {
                console.log(err);
            });

            ctx.response.body = '200';
        } else if (data.length == 1) {

            let tb_condition = `*`;
            let tb_name = 'yh_course';
            let tb_whereName = `cOpenkey = '${ctx.request.body[0].cOpenkey}'`;

            db.sWhereDb(tb_condition, tb_name, tb_whereName).then(data => {
                let thisCcnumber = data[0].cCollectionnumber - 1;
                let tb_name = 'yh_cCollect';
                let tb_whereName = `wccUseropenkey = '${ctx.request.body[0].wccUseropenkey}' AND cOpenkey = '${ctx.request.body[0].cOpenkey}'`;
                db.deleteDataDb(tb_name, tb_whereName).then(data => {
                    let utb_name = 'yh_cCollect';
                    let utb_setName = 'cCollectionnumber';
                    let utb_whereName = 'cOpenkey';
                    let utb_data = { tb_setData: thisCcnumber, tb_whereData: ctx.request.body[0].cOpenkey };

                    db.upDataDb(utb_name, utb_setName, utb_whereName, utb_data).then(data => { }).catch(err => { console.log(err); });
                }).catch(err => { console.log(err); });

                let utb_name = 'yh_course';
                let utb_setName = 'cCollectionnumber';
                let utb_whereName = 'cOpenkey';
                let utb_data = { tb_setData: thisCcnumber, tb_whereData: ctx.request.body[0].cOpenkey };
                db.upDataDb(utb_name, utb_setName, utb_whereName, utb_data).then(data => {
                    let utb_name = 'yh_cPraise';
                    let utb_setName = 'cCollectionnumber';
                    let utb_whereName = 'cOpenkey';
                    let utb_data = { tb_setData: thisCcnumber, tb_whereData: ctx.request.body[0].cOpenkey };

                    db.upDataDb(utb_name, utb_setName, utb_whereName, utb_data).then(data => { }).catch(err => { console.log(err); });
                }).catch(err => { console.log('upDataDb:' + err); });
            }).catch(err => { console.log(err) });
            ctx.response.body = '400';
        }
    }).catch(err => {
        console.log(err)
        ctx.response.body = '取消收藏失败';
    });
}

/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-12 16:35:20 
 * @Last Modified by:   mikey.zhiyuanL 
 * @Last Modified time: 2019-12-12 16:35:20 
 */
var coursePraise = async (ctx, next) => {
    // console.log(ctx.request.body);
    let tb_condition = `cOpenkey`;
    let tb_name = 'yh_cPraise';
    let tb_whereName = `wccUseropenkey = '${ctx.request.body[0].wccUseropenkey}' AND cOpenkey = '${ctx.request.body[0].cOpenkey}'`;


    await db.sWhereDb(tb_condition, tb_name, tb_whereName).then(data => {

        if (data.length == 0) {

            let tb_condition = `*`;
            let tb_name = 'yh_course';
            let tb_whereName = `cOpenkey = '${ctx.request.body[0].cOpenkey}'`;

            db.sWhereDb(tb_condition, tb_name, tb_whereName).then(data => {

                let thisCpnumber = data[0].cPraisenumber + 1;
                let tb_name = `yh_cPraise(id,cOpenkey,wccUseropenkey,cUseropenkey,cUserheadimg,cHeadimg,cType,cTitle,cIntroduce,cChapter,cRank,cTcname,cTccoursetype,cUptime,cBrowsenumber,cLearnnumber,cPraisenumber,cCollectionnumber,cEWM) VALUES(0,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                let tb_data = [ctx.request.body[0].cOpenkey, ctx.request.body[0].wccUseropenkey, ctx.request.body[0].cUseropenkey, ctx.request.body[0].cUserheadimg, ctx.request.body[0].cHeadimg, ctx.request.body[0].cType, ctx.request.body[0].cTitle, ctx.request.body[0].cIntroduce, ctx.request.body[0].cChapter, ctx.request.body[0].cRank, ctx.request.body[0].cTcname, ctx.request.body[0].cTccoursetype, ctx.request.body[0].cUptime, ctx.request.body[0].cBrowsenumber, ctx.request.body[0].cLearnnumber, thisCpnumber, ctx.request.body[0].cCollectionnumber, ctx.request.body[0].cEWM];
                db.insertDatabase(tb_name, tb_data).then(data => { }).catch(err => { console.log('insertDatabase:' + err); });

                let utb_name = 'yh_course';
                let utb_setName = 'cPraisenumber';
                let utb_whereName = 'cOpenkey';
                let utb_data = { tb_setData: thisCpnumber, tb_whereData: ctx.request.body[0].cOpenkey };
                db.upDataDb(utb_name, utb_setName, utb_whereName, utb_data).then(data => {
                    let utb_name = 'yh_cPraise';
                    let utb_setName = 'cPraisenumber';
                    let utb_whereName = 'cOpenkey';
                    let utb_data = { tb_setData: thisCpnumber, tb_whereData: ctx.request.body[0].cOpenkey };

                    db.upDataDb(utb_name, utb_setName, utb_whereName, utb_data).then(data => { }).catch(err => { console.log(err); });

                    let u2tb_name = 'yh_cCollect';
                    let u2tb_setName = 'cPraisenumber';
                    let u2tb_whereName = 'cOpenkey';
                    let u2tb_data = { tb_setData: thisCpnumber, tb_whereData: ctx.request.body[0].cOpenkey };

                    db.upDataDb(u2tb_name, u2tb_setName, u2tb_whereName, u2tb_data).then(data => { }).catch(err => { console.log(err); });
                }).catch(err => { console.log('upDataDb:' + err); });
            }).catch(err => {
                console.log(err);
            });

            ctx.response.body = '200';
        } else if (data.length == 1) {
            let tb_condition = `*`;
            let tb_name = 'yh_course';
            let tb_whereName = `cOpenkey = '${ctx.request.body[0].cOpenkey}'`;

            db.sWhereDb(tb_condition, tb_name, tb_whereName).then(data => {
                let thisCpnumber = data[0].cPraisenumber - 1;
                let tb_name = 'yh_cPraise';
                let tb_whereName = `wccUseropenkey = '${ctx.request.body[0].wccUseropenkey}' AND cOpenkey = '${ctx.request.body[0].cOpenkey}'`;
                db.deleteDataDb(tb_name, tb_whereName).then(data => {
                    let u2tb_name = 'yh_cPraise';
                    let u2tb_setName = 'cPraisenumber';
                    let u2tb_whereName = 'cOpenkey';
                    let u2tb_data = { tb_setData: thisCpnumber, tb_whereData: ctx.request.body[0].cOpenkey };

                    db.upDataDb(u2tb_name, u2tb_setName, u2tb_whereName, u2tb_data).then(data => { }).catch(err => { console.log(err); });
                }).catch(err => { console.log(err); });

                let utb_name = 'yh_course';
                let utb_setName = 'cPraisenumber';
                let utb_whereName = 'cOpenkey';
                let utb_data = { tb_setData: thisCpnumber, tb_whereData: ctx.request.body[0].cOpenkey };
                db.upDataDb(utb_name, utb_setName, utb_whereName, utb_data).then(data => {
                    let utb_name = 'yh_cCollect';
                    let utb_setName = 'cPraisenumber';
                    let utb_whereName = 'cOpenkey';
                    let utb_data = { tb_setData: thisCpnumber, tb_whereData: ctx.request.body[0].cOpenkey };

                    db.upDataDb(utb_name, utb_setName, utb_whereName, utb_data).then(data => { }).catch(err => { console.log(err); });
                }).catch(err => { console.log('upDataDb:' + err); });
            }).catch(err => { console.log(err) });

            ctx.response.body = '400';
        }
    }).catch(err => {
        console.log(err)
        ctx.response.body = '取消收藏失败';
    });
}

/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-12 16:35:20 
 * @Last Modified by:   mikey.zhiyuanL 
 * @Last Modified time: 2019-12-12 16:35:20 
 */
var courseComment = async (ctx, next) => { }

module.exports = {
    'GET /courseAll': courseAll,
    'POST /courseRecommend': courseRecommend,
    'POST /cLearn': courseLearn,
    'POST /cCollect': courseCollect,
    'POST /cPraise': coursePraise,
    'POST /cComment': courseComment
}

