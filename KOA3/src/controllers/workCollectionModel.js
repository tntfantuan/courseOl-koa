var sd = require('silly-datetime');
let randomWord = require('../utils/randomkey/randomKey');
let time = sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
let db = require('../db/mysqldb');

/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-12 16:35:20 
 * @Last Modified by: mikey.zhiyuanL
 * @Last Modified time: 2020-01-14 16:13:32
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

    let tb_condition = `wclcOpenkey`;
    let tb_name = 'yh_wclcCollect';
    let tb_whereName = `wccUseropenkey = '${ctx.request.body[0].wccUseropenkey}' AND wclcOpenkey = '${ctx.request.body[0].wclcOpenkey}'`;

    await db.sWhereDb(tb_condition, tb_name, tb_whereName).then(data => {

        if (data.length == 0) {
            let tb_condition = `*`;
            let tb_name = 'yh_workCollection';
            let tb_whereName = `wclcOpenkey = '${ctx.request.body[0].wclcOpenkey}'`;

            db.sWhereDb(tb_condition, tb_name, tb_whereName).then(data => {
                let thisWccnumber = data[0].wclcCollection + 1;
                let tb_name = `yh_wclcCollect(id,wclcOpenkey,wccUseropenkey,wclcHeadimg,wclcTitle,wclcContent,wclcPraise,wclcBrowse,wclcCollection,wclcUptime,wclcUserHeadimg,wclcUserNickname,wclcUserOpenkey) VALUES(0,?,?,?,?,?,?,?,?,?,?,?,?)`;
                let tb_data = [ctx.request.body[0].wclcOpenkey, ctx.request.body[0].wccUseropenkey, ctx.request.body[0].wclcHeadimg, ctx.request.body[0].wclcTitle, ctx.request.body[0].wclcContent, ctx.request.body[0].wclcPraise, ctx.request.body[0].wclcBrowse, thisWccnumber, ctx.request.body[0].wclcUptime, ctx.request.body[0].wclcHeadimg, ctx.request.body[0].wclcUserNickname, ctx.request.body[0].wclcUserOpenkey];
                db.insertDatabase(tb_name, tb_data).then(data => { }).catch(err => {
                    console.log('insertDatabase:' + err);
                });

                let utb_name = 'yh_workCollection';
                let utb_setName = 'wclcCollection';
                let utb_whereName = 'wclcOpenkey';
                let utb_data = { tb_setData: thisWccnumber, tb_whereData: ctx.request.body[0].wclcOpenkey };
                db.upDataDb(utb_name, utb_setName, utb_whereName, utb_data).then(data => {
                    let utb_name = 'yh_wclcPraise';
                    let utb_setName = 'wclcCollection';
                    let utb_whereName = 'wclcOpenkey';
                    let utb_data = { tb_setData: thisWccnumber, tb_whereData: ctx.request.body[0].wclcOpenkey };

                    db.upDataDb(utb_name, utb_setName, utb_whereName, utb_data).then(data => { }).catch(err => { console.log(err); });

                    let u2tb_name = 'yh_wclcCollect';
                    let u2tb_setName = 'wclcCollection';
                    let u2tb_whereName = 'wclcOpenkey';
                    let u2tb_data = { tb_setData: thisWccnumber, tb_whereData: ctx.request.body[0].wclcOpenkey };

                    db.upDataDb(u2tb_name, u2tb_setName, u2tb_whereName, u2tb_data).then(data => { }).catch(err => { console.log(err); });
                }).catch(err => { console.log('upDataDb:' + err); });

            }).catch(err => {
                'sWhereDb:' + err
            });
            ctx.response.body = '200';

        } else if (data.length == 1) {

            let tb_condition = `*`;
            let tb_name = 'yh_workCollection';
            let tb_whereName = `wclcOpenkey = '${ctx.request.body[0].wclcOpenkey}'`;

            db.sWhereDb(tb_condition, tb_name, tb_whereName).then(data => {
                let thisWccnumber = data[0].wclcCollection - 1;

                let tb_name = 'yh_wclcCollect';
                let tb_whereName = `wccUseropenkey = '${ctx.request.body[0].wccUseropenkey}' AND wclcOpenkey = '${ctx.request.body[0].wclcOpenkey}'`;
                db.deleteDataDb(tb_name, tb_whereName).then(data => {
                    let utb_name = 'yh_wclcCollect';
                    let utb_setName = 'wclcCollection';
                    let utb_whereName = 'wclcOpenkey';
                    let utb_data = { tb_setData: thisWccnumber, tb_whereData: ctx.request.body[0].wclcOpenkey };

                    db.upDataDb(utb_name, utb_setName, utb_whereName, utb_data).then(data => { }).catch(err => { console.log(err); });
                }).catch(err => { console.log('deleteDataDb:' + err); });

                let utb_name = 'yh_workCollection';
                let utb_setName = 'wclcCollection';
                let utb_whereName = 'wclcOpenkey';
                let utb_data = { tb_setData: thisWccnumber, tb_whereData: ctx.request.body[0].wclcOpenkey };
                db.upDataDb(utb_name, utb_setName, utb_whereName, utb_data).then(data => {
                    let utb_name = 'yh_wclcPraise';
                    let utb_setName = 'wclcCollection';
                    let utb_whereName = 'wclcOpenkey';
                    let utb_data = { tb_setData: thisWccnumber, tb_whereData: ctx.request.body[0].wclcOpenkey };

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
    // console.log(ctx.request.body[0]);
    let tb_condition = `wclcOpenkey`;
    let tb_name = 'yh_wclcPraise';
    let tb_whereName = `wccUseropenkey = '${ctx.request.body[0].wccUseropenkey}' AND wclcOpenkey = '${ctx.request.body[0].wclcOpenkey}'`;

    await db.sWhereDb(tb_condition, tb_name, tb_whereName).then(data => {
        // console.log(data);
        if (data.length == 0) {

            let tb_condition = `*`;
            let tb_name = 'yh_workCollection';
            let tb_whereName = `wclcOpenkey = '${ctx.request.body[0].wclcOpenkey}'`;

            db.sWhereDb(tb_condition, tb_name, tb_whereName).then(data => {
                let thisWcpnumber = data[0].wclcPraise + 1;
                let tb_name = `yh_wclcPraise(id,wclcOpenkey,wccUseropenkey,wclcHeadimg,wclcTitle,wclcContent,wclcPraise,wclcBrowse,wclcCollection,wclcUptime,wclcUserHeadimg,wclcUserNickname,wclcUserOpenkey) VALUES(0,?,?,?,?,?,?,?,?,?,?,?,?)`;
                let tb_data = [ctx.request.body[0].wclcOpenkey, ctx.request.body[0].wccUseropenkey, ctx.request.body[0].wclcHeadimg, ctx.request.body[0].wclcTitle, ctx.request.body[0].wclcContent, thisWcpnumber, ctx.request.body[0].wclcBrowse, ctx.request.body[0].wclcCollection, ctx.request.body[0].wclcUptime, ctx.request.body[0].wclcUserHeadimg, ctx.request.body[0].wclcUserNickname, ctx.request.body[0].wclcUserOpenkey];
                
                db.insertDatabase(tb_name, tb_data).then(data => { }).catch(err => { console.log('insertDatabase:' + err) });

                let utb_name = 'yh_workCollection';
                let utb_setName = 'wclcPraise';
                let utb_whereName = 'wclcOpenkey';
                let utb_data = { tb_setData: thisWcpnumber, tb_whereData: ctx.request.body[0].wclcOpenkey };
                db.upDataDb(utb_name, utb_setName, utb_whereName, utb_data).then(data => {
                    let utb_name = 'yh_wclcPraise';
                    let utb_setName = 'wclcPraise';
                    let utb_whereName = 'wclcOpenkey';
                    let utb_data = { tb_setData: thisWcpnumber, tb_whereData: ctx.request.body[0].wclcOpenkey };

                    db.upDataDb(utb_name, utb_setName, utb_whereName, utb_data).then(data => { }).catch(err => { console.log(err); });

                    let u2tb_name = 'yh_wclcCollect';
                    let u2tb_setName = 'wclcPraise';
                    let u2tb_whereName = 'wclcOpenkey';
                    let u2tb_data = { tb_setData: thisWcpnumber, tb_whereData: ctx.request.body[0].wclcOpenkey };

                    db.upDataDb(u2tb_name, u2tb_setName, u2tb_whereName, u2tb_data).then(data => { }).catch(err => { console.log(err); });
                }).catch(err => { console.log('upDataDb:' + err); });

            }).catch(err => {
                'sWhereDb:' + err
            });
            ctx.response.body = '200';

        } else if (data.length == 1) {

            let tb_condition = `*`;
            let tb_name = 'yh_workCollection';
            let tb_whereName = `wclcOpenkey = '${ctx.request.body[0].wclcOpenkey}'`;

            db.sWhereDb(tb_condition, tb_name, tb_whereName).then(data => {
                let thisWcpnumber = data[0].wclcPraise - 1;

                let tb_name = 'yh_wclcPraise';
                let tb_whereName = `wccUseropenkey = '${ctx.request.body[0].wccUseropenkey}' AND wclcOpenkey = '${ctx.request.body[0].wclcOpenkey}'`;
                db.deleteDataDb(tb_name, tb_whereName).then(data => {
                    let utb_name = 'yh_wclcPraise';
                    let utb_setName = 'wclcPraise';
                    let utb_whereName = 'wclcOpenkey';
                    let utb_data = { tb_setData: thisWcpnumber, tb_whereData: ctx.request.body[0].wclcOpenkey };

                    db.upDataDb(utb_name, utb_setName, utb_whereName, utb_data).then(data => { }).catch(err => { console.log(err); });
                }).catch(err => { console.log('deleteDataDb:' + err); });

                let utb_name = 'yh_workCollection';
                let utb_setName = 'wclcPraise';
                let utb_whereName = 'wclcOpenkey';
                let utb_data = { tb_setData: thisWcpnumber, tb_whereData: ctx.request.body[0].wclcOpenkey };
                db.upDataDb(utb_name, utb_setName, utb_whereName, utb_data).then(data => {
                    
                    let utb_name = 'yh_wclcCollect';
                    let utb_setName = 'wclcPraise';
                    let utb_whereName = 'wclcOpenkey';
                    let utb_data = { tb_setData: thisWcpnumber, tb_whereData: ctx.request.body[0].wclcOpenkey };

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
    // console.log(ctx.request.body[0]);
    let tb_name = 'yh_workCollection';
    let tb_setName = 'wclcBrowse';
    let tb_whereName = 'wclcOpenkey';
    let tb_data = { tb_setData: ctx.request.body[0].wclcBrowse, tb_whereData: ctx.request.body[0].wclcOpenkey };

    await db.upDataDb(tb_name, tb_setName, tb_whereName, tb_data).then(data => {

        let tb_name = 'yh_wclcCollect';
        let tb_setName = 'wclcBrowse';
        let tb_whereName = 'wclcOpenkey';
        let tb_data = { tb_setData: ctx.request.body[0].wclcBrowse, tb_whereData: ctx.request.body[0].wclcOpenkey };

        db.upDataDb(tb_name, tb_setName, tb_whereName, tb_data).then(data => {

            let tb_name = 'yh_wclcPraise';
            let tb_setName = 'wclcBrowse';
            let tb_whereName = 'wclcOpenkey';
            let tb_data = { tb_setData: ctx.request.body[0].wclcBrowse, tb_whereData: ctx.request.body[0].wclcOpenkey };

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