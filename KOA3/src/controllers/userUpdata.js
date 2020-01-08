let db = require('../db/mysqldb.js');
var userUpdata = async (ctx, next) => {

    let thisCheckUpdataData = ctx.request.body;
    let cUuserOpenkeyParams = thisCheckUpdataData[0].userOpenkey;
    let checkUpdataPhoneSql = `SELECT * FROM yh_user WHERE userOpenkey ='${cUuserOpenkeyParams}'`;
    // console.log(checkUpdataPhoneSql);
    await db.query(checkUpdataPhoneSql).then((data) => {
        // console.log('--------------------------SELECT----------------------------');
        // console.log(data);
        ctx.response.body = data;
        // console.log('------------------------------------------------------------\n\n');

    }).catch((err) => {
        console.log(err)
    });

}

module.exports = {
    'POST /userUpdata': userUpdata
}