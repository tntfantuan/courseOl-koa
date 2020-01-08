var sd = require('silly-datetime');
let randomWord = require('../utils/randomkey/randomKey');
let time = sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
let db = require('../db/mysqldb');

/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-12 16:35:20 
 * @Last Modified by: mikey.zhiyuanL
 * @Last Modified time: 2020-01-06 14:05:36
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

    let tb_condition = `wlcOpenkey`;
    let tb_name = 'yh_wccCollect';
    let tb_whereName = `wccUseropenkey = '${ctx.request.body[0].wccUseropenkey}' AND wlcOpenkey = '${ctx.request.body[0].wlcOpenkey}'`;

    await db.sWhereDb(tb_condition, tb_name, tb_whereName).then(data => {

        if (data.length == 0) {
            let tb_condition = `*`;
            let tb_name = 'yh_workCollection';
            let tb_whereName = `wlcOpenkey = '${ctx.request.body[0].wlcOpenkey}'`;

            db.sWhereDb(tb_condition, tb_name, tb_whereName).then(data => {
                let thisWccnumber = data[0].workcollectionCollection + 1;
                let tb_name = `yh_wccCollect(id,wlcOpenkey,wccUseropenkey,workcollectionHeadimg,workcollectionName,workcollectionContent,workcollectionPraise,workcollectionBrowse,workcollectionCollection,workcollectionUptime,workcollectionUserHeadimg,workcollectionUserNickname,workcollectionUserOpenkey) VALUES(0,?,?,?,?,?,?,?,?,?,?,?,?)`;
                let tb_data = [ctx.request.body[0].wlcOpenkey, ctx.request.body[0].wccUseropenkey, ctx.request.body[0].workcollectionHeadimg, ctx.request.body[0].workcollectionName, ctx.request.body[0].workcollectionContent, ctx.request.body[0].workcollectionPraise, ctx.request.body[0].workcollectionBrowse, thisWccnumber, ctx.request.body[0].workcollectionUptime, ctx.request.body[0].workcollectionUserHeadimg, ctx.request.body[0].workcollectionUserNickname, ctx.request.body[0].workcollectionUserOpenkey];
                db.insertDatabase(tb_name, tb_data).then(data => { }).catch(err => {
                    console.log('insertDatabase:' + err);
                });

                let utb_name = 'yh_workCollection';
                let utb_setName = 'workcollectionCollection';
                let utb_whereName = 'wlcOpenkey';
                let utb_data = { tb_setData: thisWccnumber, tb_whereData: ctx.request.body[0].wlcOpenkey };
                db.upDataDb(utb_name, utb_setName, utb_whereName, utb_data).then(data => {
                    let utb_name = 'yh_wccPraise';
                    let utb_setName = 'workcollectionCollection';
                    let utb_whereName = 'wlcOpenkey';
                    let utb_data = { tb_setData: thisWccnumber, tb_whereData: ctx.request.body[0].wlcOpenkey };

                    db.upDataDb(utb_name, utb_setName, utb_whereName, utb_data).then(data => { }).catch(err => { console.log(err); });

                    let u2tb_name = 'yh_wccCollect';
                    let u2tb_setName = 'workcollectionCollection';
                    let u2tb_whereName = 'wlcOpenkey';
                    let u2tb_data = { tb_setData: thisWccnumber, tb_whereData: ctx.request.body[0].wlcOpenkey };

                    db.upDataDb(u2tb_name, u2tb_setName, u2tb_whereName, u2tb_data).then(data => { }).catch(err => { console.log(err); });
                }).catch(err => { console.log('upDataDb:' + err); });

            }).catch(err => {
                'sWhereDb:' + err
            });
            ctx.response.body = '200';

        } else if (data.length == 1) {

            let tb_condition = `*`;
            let tb_name = 'yh_workCollection';
            let tb_whereName = `wlcOpenkey = '${ctx.request.body[0].wlcOpenkey}'`;

            db.sWhereDb(tb_condition, tb_name, tb_whereName).then(data => {
                let thisWccnumber = data[0].workcollectionCollection - 1;

                let tb_name = 'yh_wccCollect';
                let tb_whereName = `wccUseropenkey = '${ctx.request.body[0].wccUseropenkey}' AND wlcOpenkey = '${ctx.request.body[0].wlcOpenkey}'`;
                db.deleteDataDb(tb_name, tb_whereName).then(data => {
                    let utb_name = 'yh_wccCollect';
                    let utb_setName = 'workcollectionCollection';
                    let utb_whereName = 'wlcOpenkey';
                    let utb_data = { tb_setData: thisWccnumber, tb_whereData: ctx.request.body[0].wlcOpenkey };

                    db.upDataDb(utb_name, utb_setName, utb_whereName, utb_data).then(data => { }).catch(err => { console.log(err); });
                }).catch(err => { console.log('deleteDataDb:' + err); });

                let utb_name = 'yh_workCollection';
                let utb_setName = 'workcollectionCollection';
                let utb_whereName = 'wlcOpenkey';
                let utb_data = { tb_setData: thisWccnumber, tb_whereData: ctx.request.body[0].wlcOpenkey };
                db.upDataDb(utb_name, utb_setName, utb_whereName, utb_data).then(data => {
                    let utb_name = 'yh_wccPraise';
                    let utb_setName = 'workcollectionCollection';
                    let utb_whereName = 'wlcOpenkey';
                    let utb_data = { tb_setData: thisWccnumber, tb_whereData: ctx.request.body[0].wlcOpenkey };

                    db.upDataDb(utb_name, utb_setName, utb_whereName, utb_data).then(data => { }).catch(err => { console.log(err); });
                }).catch(err => { console.log('upDataDb:' + err); });
            }).catch(err => {
                console.log('sWhereDb:' + err);
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

    let tb_condition = `wlcOpenkey`;
    let tb_name = 'yh_wccPraise';
    let tb_whereName = `wccUseropenkey = '${ctx.request.body[0].wccUseropenkey}' AND wlcOpenkey = '${ctx.request.body[0].wlcOpenkey}'`;

    await db.sWhereDb(tb_condition, tb_name, tb_whereName).then(data => {
        // console.log(data);
        if (data.length == 0) {

            let tb_condition = `*`;
            let tb_name = 'yh_workCollection';
            let tb_whereName = `wlcOpenkey = '${ctx.request.body[0].wlcOpenkey}'`;

            db.sWhereDb(tb_condition, tb_name, tb_whereName).then(data => {
                let thisWcpnumber = data[0].workcollectionPraise + 1;
                let tb_name = `yh_wccPraise(id,wlcOpenkey,wccUseropenkey,workcollectionHeadimg,workcollectionName,workcollectionContent,workcollectionPraise,workcollectionBrowse,workcollectionCollection,workcollectionUptime,workcollectionUserHeadimg,workcollectionUserNickname,workcollectionUserOpenkey) VALUES(0,?,?,?,?,?,?,?,?,?,?,?,?)`;
                let tb_data = [ctx.request.body[0].wlcOpenkey, ctx.request.body[0].wccUseropenkey, ctx.request.body[0].workcollectionHeadimg, ctx.request.body[0].workcollectionName, ctx.request.body[0].workcollectionContent, thisWcpnumber, ctx.request.body[0].workcollectionBrowse, ctx.request.body[0].workcollectionCollection, ctx.request.body[0].workcollectionUptime, ctx.request.body[0].workcollectionUserHeadimg, ctx.request.body[0].workcollectionUserNickname, ctx.request.body[0].workcollectionUserOpenkey];
                db.insertDatabase(tb_name, tb_data).then(data => { }).catch(err => {
                    console.log('insertDatabase:' + err);
                });

                let utb_name = 'yh_workCollection';
                let utb_setName = 'workcollectionPraise';
                let utb_whereName = 'wlcOpenkey';
                let utb_data = { tb_setData: thisWcpnumber, tb_whereData: ctx.request.body[0].wlcOpenkey };
                db.upDataDb(utb_name, utb_setName, utb_whereName, utb_data).then(data => {
                    let utb_name = 'yh_wccPraise';
                    let utb_setName = 'workcollectionPraise';
                    let utb_whereName = 'wlcOpenkey';
                    let utb_data = { tb_setData: thisWcpnumber, tb_whereData: ctx.request.body[0].wlcOpenkey };

                    db.upDataDb(utb_name, utb_setName, utb_whereName, utb_data).then(data => { }).catch(err => { console.log(err); });

                    let u2tb_name = 'yh_wccCollect';
                    let u2tb_setName = 'workcollectionPraise';
                    let u2tb_whereName = 'wlcOpenkey';
                    let u2tb_data = { tb_setData: thisWcpnumber, tb_whereData: ctx.request.body[0].wlcOpenkey };

                    db.upDataDb(u2tb_name, u2tb_setName, u2tb_whereName, u2tb_data).then(data => { }).catch(err => { console.log(err); });
                }).catch(err => { console.log('upDataDb:' + err); });

            }).catch(err => {
                'sWhereDb:' + err
            });
            ctx.response.body = '200';

        } else if (data.length == 1) {

            let tb_condition = `*`;
            let tb_name = 'yh_workCollection';
            let tb_whereName = `wlcOpenkey = '${ctx.request.body[0].wlcOpenkey}'`;

            db.sWhereDb(tb_condition, tb_name, tb_whereName).then(data => {
                let thisWcpnumber = data[0].workcollectionPraise - 1;

                let tb_name = 'yh_wccPraise';
                let tb_whereName = `wccUseropenkey = '${ctx.request.body[0].wccUseropenkey}' AND wlcOpenkey = '${ctx.request.body[0].wlcOpenkey}'`;
                db.deleteDataDb(tb_name, tb_whereName).then(data => {
                    let utb_name = 'yh_wccPraise';
                    let utb_setName = 'workcollectionPraise';
                    let utb_whereName = 'wlcOpenkey';
                    let utb_data = { tb_setData: thisWcpnumber, tb_whereData: ctx.request.body[0].wlcOpenkey };

                    db.upDataDb(utb_name, utb_setName, utb_whereName, utb_data).then(data => { }).catch(err => { console.log(err); });
                }).catch(err => { console.log('deleteDataDb:' + err); });

                let utb_name = 'yh_workCollection';
                let utb_setName = 'workcollectionPraise';
                let utb_whereName = 'wlcOpenkey';
                let utb_data = { tb_setData: thisWcpnumber, tb_whereData: ctx.request.body[0].wlcOpenkey };
                db.upDataDb(utb_name, utb_setName, utb_whereName, utb_data).then(data => {
                    let utb_name = 'yh_wccCollect';
                    let utb_setName = 'workcollectionPraise';
                    let utb_whereName = 'wlcOpenkey';
                    let utb_data = { tb_setData: thisWcpnumber, tb_whereData: ctx.request.body[0].wlcOpenkey };

                    db.upDataDb(utb_name, utb_setName, utb_whereName, utb_data).then(data => { }).catch(err => { console.log(err); });
                }).catch(err => { console.log('upDataDb:' + err); });
            }).catch(err => {
                console.log('sWhereDb:' + err);
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