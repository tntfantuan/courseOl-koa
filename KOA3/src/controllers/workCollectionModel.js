var sd = require('silly-datetime');
let randomWord = require('../utils/randomkey/randomKey');
let time = sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
let db = require('../db/mysqldb');

/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-12 16:35:20 
 * @Last Modified by: mikey.zhiyuanL
 * @Last Modified time: 2019-12-12 17:37:05
 */
var workCollectionAll = async (ctx, next) => {
    let tb_name = 'yh_workCollection';
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
var workCollectionItem = async (ctx, next) => {
    ctx.response.body = `<img class="essayContentboxImg" src="http://192.168.2.128:3000/src/assets/workcollection/chQyaacccyQ/chQyaacccyQ/wc0.jpg" alt="">
    <img class="essayContentboxImg" src="http://192.168.2.128:3000/src/assets/workcollection/chQyaacccyQ/chQyaacccyQ/wc1.png" alt="">
    <img class="essayContentboxImg" src="http://192.168.2.128:3000/src/assets/workcollection/chQyaacccyQ/chQyaacccyQ/wc2.png" alt="">
    <img class="essayContentboxImg" src="http://192.168.2.128:3000/src/assets/workcollection/chQyaacccyQ/chQyaacccyQ/wc3.jpg" alt="">`
}

/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-12 16:35:20 
 * @Last Modified by:   mikey.zhiyuanL 
 * @Last Modified time: 2019-12-12 16:35:20 
 */
var essayCollect = async (ctx, next) => {

    let tb_condition = `wccUseropenkey,wlcOpenkey`;
    let tb_name = 'yh_wccCollect';
    let tb_whereName = `wccUseropenkey = '${ctx.request.body[0].wccUseropenkey}'`;

    await db.sWhereDb(tb_condition, tb_name, tb_whereName).then(data => {

        if (data.length == 0) {
            let tb_name = `yh_wccCollect(id,wlcOpenkey,wccUseropenkey,workcollectionHeadimg,workcollectionName,workcollectionContent,workcollectionPraise,workcollectionBrowse,workcollectionCollection,workcollectionUptime,workcollectionUserHeadimg,workcollectionUserNickname,workcollectionUserOpenkey) VALUES(0,?,?,?,?,?,?,?,?,?,?,?,?)`;
            let tb_data = [ctx.request.body[0].wlcOpenkey, ctx.request.body[0].wccUseropenkey, ctx.request.body[0].workcollectionHeadimg, ctx.request.body[0].workcollectionName, ctx.request.body[0].workcollectionContent, ctx.request.body[0].workcollectionPraise, ctx.request.body[0].workcollectionBrowse, ctx.request.body[0].workcollectionCollection, ctx.request.body[0].workcollectionUptime, ctx.request.body[0].workcollectionUserHeadimg, ctx.request.body[0].workcollectionUserNickname, ctx.request.body[0].workcollectionUserOpenkey];
            db.insertDatabase(tb_name, tb_data).then(data => {

                let tb_name = 'yh_workCollection';
                let tb_setName = 'workcollectionCollection';
                let tb_whereName = 'wlcOpenkey';
                let tb_data = { tb_setData: ctx.request.body[0].workcollectionCollection, tb_whereData: ctx.request.body[0].wlcOpenkey };

                db.upDataDb(tb_name, tb_setName, tb_whereName, tb_data).then(data => {
                    let tb_name = 'yh_wccPraise';
                    let tb_setName = 'workcollectionCollection';
                    let tb_whereName = 'wlcOpenkey';
                    let tb_data = { tb_setData: ctx.request.body[0].workcollectionCollection, tb_whereData: ctx.request.body[0].wlcOpenkey };

                    db.upDataDb(tb_name, tb_setName, tb_whereName, tb_data).then(data => {
                    }).catch(err => {
                        console.log(err);
                    });
                }).catch(err => {
                    console.log(err);
                });
            }).catch(err => {
                console.log(err);
            });
            ctx.response.body = '200';

        } else if (data.length == 1) {
            let tb_name = 'yh_wccCollect';
            let tb_whereName = `wccUseropenkey = '${ctx.request.body[0].wccUseropenkey}' AND wlcOpenkey = '${ctx.request.body[0].wlcOpenkey}'`;
            db.deleteDataDb(tb_name, tb_whereName).then(data => {
                let tb_name = 'yh_workCollection';
                let tb_setName = 'workcollectionCollection';
                let tb_whereName = 'wlcOpenkey';
                let THISwcCollection = parseInt(ctx.request.body[0].workcollectionCollection) - 2
                let tb_data = { tb_setData: THISwcCollection, tb_whereData: ctx.request.body[0].wlcOpenkey };
                db.upDataDb(tb_name, tb_setName, tb_whereName, tb_data).then(data => {
                }).catch(err => {
                    console.log(err);
                });
            }).catch(err => {
                console.log(err)
                ctx.response.body = '取消收藏失败';
            });
            ctx.response.body = '400';
        }
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
var essayPraise = async (ctx, next) => {

    let tb_condition = `wccUseropenkey,wlcOpenkey`;
    let tb_name = 'yh_wccPraise';
    let tb_whereName = `wccUseropenkey = '${ctx.request.body[0].wccUseropenkey}'`;

    await db.sWhereDb(tb_condition, tb_name, tb_whereName).then(data => {
        // console.log(data);
        if (data.length == 0) {
            let tb_name = `yh_wccPraise(id,wlcOpenkey,wccUseropenkey,workcollectionHeadimg,workcollectionName,workcollectionContent,workcollectionPraise,workcollectionBrowse,workcollectionCollection,workcollectionUptime,workcollectionUserHeadimg,workcollectionUserNickname,workcollectionUserOpenkey) VALUES(0,?,?,?,?,?,?,?,?,?,?,?,?)`;
            let tb_data = [ctx.request.body[0].wlcOpenkey, ctx.request.body[0].wccUseropenkey, ctx.request.body[0].workcollectionHeadimg, ctx.request.body[0].workcollectionName, ctx.request.body[0].workcollectionContent, ctx.request.body[0].workcollectionPraise, ctx.request.body[0].workcollectionBrowse, ctx.request.body[0].workcollectionCollection, ctx.request.body[0].workcollectionUptime, ctx.request.body[0].workcollectionUserHeadimg, ctx.request.body[0].workcollectionUserNickname, ctx.request.body[0].workcollectionUserOpenkey];
            db.insertDatabase(tb_name, tb_data).then(data => {

                let tb_name = 'yh_workCollection';
                let tb_setName = 'workcollectionPraise';
                let tb_whereName = 'wlcOpenkey';
                let tb_data = { tb_setData: ctx.request.body[0].workcollectionPraise, tb_whereData: ctx.request.body[0].wlcOpenkey };

                db.upDataDb(tb_name, tb_setName, tb_whereName, tb_data).then(data => {
                    let tb_name = 'yh_wccCollect';
                    let tb_setName = 'workcollectionPraise';
                    let tb_whereName = 'wlcOpenkey';
                    let tb_data = { tb_setData: ctx.request.body[0].workcollectionPraise, tb_whereData: ctx.request.body[0].wlcOpenkey };

                    db.upDataDb(tb_name, tb_setName, tb_whereName, tb_data).then(data => { }).catch(err => {
                        console.log(err);
                    });
                }).catch(err => {
                    console.log(err);
                });
            }).catch(err => {
                console.log(err);
            });
            ctx.response.body = '200';

        } else if (data.length == 1) {
            let tb_name = 'yh_wccPraise';
            let tb_whereName = `wccUseropenkey = '${ctx.request.body[0].wccUseropenkey}' AND wlcOpenkey = '${ctx.request.body[0].wlcOpenkey}'`;
            db.deleteDataDb(tb_name, tb_whereName).then(data => {

                let tb_name = 'yh_workCollection';
                let tb_setName = 'workcollectionPraise';
                let tb_whereName = 'wlcOpenkey';
                let THISwcPraise = parseInt(ctx.request.body[0].workcollectionPraise) - 2
                let tb_data = { tb_setData: THISwcPraise, tb_whereData: ctx.request.body[0].wlcOpenkey };

                db.upDataDb(tb_name, tb_setName, tb_whereName, tb_data).then(data => {
                    let tb_name = 'yh_wccCollect';
                    let tb_setName = 'workcollectionPraise';
                    let tb_whereName = 'wlcOpenkey';
                    let THISwcPraise = parseInt(ctx.request.body[0].workcollectionPraise) - 2
                    let tb_data = { tb_setData: THISwcPraise, tb_whereData: ctx.request.body[0].wlcOpenkey };

                    db.upDataDb(tb_name, tb_setName, tb_whereName, tb_data).then(data => {
                    }).catch(err => {
                        console.log(err);
                    });
                }).catch(err => {
                    console.log(err);
                });
            }).catch(err => {
                console.log(err)
                ctx.response.body = '取消点赞失败';
            });
            ctx.response.body = '400';
        }
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
var essayBrowse = async (ctx, next) => {

    let tb_name = 'yh_workCollection';
    let tb_setName = 'workcollectionBrowse';
    let tb_whereName = 'wlcOpenkey';
    let tb_data = { tb_setData: ctx.request.body[0].workcollectionBrowse, tb_whereData: ctx.request.body[0].wlcOpenkey };

    await db.upDataDb(tb_name, tb_setName, tb_whereName, tb_data).then(data => {

        let tb_name = 'yh_wccCollect';
        let tb_setName = 'workcollectionBrowse';
        let tb_whereName = 'wlcOpenkey';
        let tb_data = { tb_setData: ctx.request.body[0].workcollectionBrowse, tb_whereData: ctx.request.body[0].wlcOpenkey };

        db.upDataDb(tb_name, tb_setName, tb_whereName, tb_data).then(data => {

            let tb_name = 'yh_wccPraise';
            let tb_setName = 'workcollectionBrowse';
            let tb_whereName = 'wlcOpenkey';
            let tb_data = { tb_setData: ctx.request.body[0].workcollectionBrowse, tb_whereData: ctx.request.body[0].wlcOpenkey };

            db.upDataDb(tb_name, tb_setName, tb_whereName, tb_data).then(data => {
            }).catch(err => {
                console.log(err);
            });
        }).catch(err => {
            console.log(err);
        });
        ctx.response.body = '200';

    }).catch(err => {
        console.log(err);
    });
}



module.exports = {
    'GET /workCollectionAll': workCollectionAll,
    'POST /eCollect': essayCollect,
    'POST /ePraise': essayPraise,
    'POST /eBrowse': essayBrowse
}