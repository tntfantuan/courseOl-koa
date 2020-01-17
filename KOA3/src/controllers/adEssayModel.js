var sd = require('silly-datetime');
let randomWord = require('../utils/randomkey/randomKey');
let db = require('../db/mysqldb');
let fileIo = require('../utils/fileio/fileio');

var upEssay = async (ctx, next) => {
    let time = sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
    let wclcOpenkey = randomWord.randomWord(false, 43);
    let eHiname = randomWord.randomWord(false, 10);
    let Essay = JSON.parse(ctx.request.body.newEssay)
    let newEssay = [];
    let finalEssay = []
    let essayContent = JSON.parse(Essay[0].wclcContent)

    for (let i = 0; i < Essay.length; i++) {
        Essay[i].wclcOpenkey = wclcOpenkey;
        Essay[i].wclcUptime = time;
        Essay[i].wclcPraise = 1;
        Essay[i].wclcBrowse = 1;
        Essay[i].wclcCollection = 1;
        Essay[i].wclcUserPhone = null;
        Essay[i].wclcUesrName = null;
        newEssay.push(Essay[i]);
    }

    let newEssayMp4 = ctx.request.files;
    let euNameFile = `./src/assets/workcollection/${newEssay[0].wclcUserOpenkey}`;
    let eFile = `./src/assets/workcollection/${newEssay[0].wclcUserOpenkey}/${newEssay[0].wclcName}`;


    let eHiNameFile = `./src/assets/workcollection/${newEssay[0].wclcUserOpenkey}/${newEssay[0].wclcName}/wclcHi_${randomWord.randomWord(false, 10)}.jpg`;
    let evNameFile = `./src/assets/workcollection/${newEssay[0].wclcUserOpenkey}/${newEssay[0].wclcName}/wclcC_${randomWord.randomWord(false, 10)}.mp4`;

    let efileObj = newEssayMp4.uploadedfile.path;
    let ifileObj = Buffer.from(newEssay[0].wclcHeadimg.replace(/^data:image\/\w+;base64,/, ""), 'base64');
    newEssay[0].wclcHeadimg = `http://192.168.2.128:3000${eHiNameFile.substr(1)}`


    var createFinaEssay = () => {
        fileIo.readdirFileio(euNameFile).then(data => {
            console.log('用户目录存在');
            fileIo.readdirFileio(eFile).then(data => {
                console.log('作品目录存在');
                fileIo.delDirFileioAll(eFile).then(data => {
                    console.log('作品目录清除成功');
                    createFinaEssay();
                }).catch(err => {
                    console.log(err + '作品目录清除失败');
                });
            }).catch(err => {
                console.log('作品目录不存在');
                fileIo.mkdirFileio(eFile).then((data) => {
                    newFinaEssay();
                }).catch(err => { });
            });
        }).catch(err => {
            console.log('用户目录不存在');
            fileIo.mkdirFileio(euNameFile).then((data) => {
                fileIo.mkdirFileio(eFile).then((data) => {
                    newFinaEssay();
                }).catch(err => { console.log(err + '作品目录创建失败'); });
            }).catch(err => { console.log(err + '用户目录创建失败'); });
        });
    }

    var newFinaEssay = () => {
        fileIo.writeCourseFileio(evNameFile, efileObj).then((data) => { }).catch((err) => { console.log(err + '文件创建失败'); });
        fileIo.writeFileio(eHiNameFile, ifileObj).then((data) => { }).catch((err) => { console.log(err + '文件创建失败'); });
        for (let i = 0; i < essayContent.length; i++) {
            let ifileObj = Buffer.from(essayContent[i].replace(/^data:image\/\w+;base64,/, ""), 'base64');
            let eNameFile = `./src/assets/workcollection/${newEssay[0].wclcUserOpenkey}/${newEssay[0].wclcName}/wccC_${randomWord.randomWord(false, 10)}.jpg`;
            let finalEurl = `http://192.168.2.128:3000${eNameFile.substr(1)}`;

            fileIo.writeFileio(eNameFile, ifileObj).then((data) => { }).catch((err) => { console.log(err + '文件创建失败'); });
            finalEssay.push(finalEurl);
        }
        // console.log(JSON.stringify(finalEssay));
        newEssay[0].wclcContent = JSON.stringify(finalEssay);
         inStallDb();
    }

    var inStallDb = () => {
        let insertEssaySql = 'INSERT INTO yh_workCollection(id, wclcOpenkey, wclcHeadimg, wclcTitle, wclcContent,wclcPraise,wclcBrowse, wclcCollection, wclcUptime, wclcUserPhone, wclcUserHeadimg,wclcUserNickname, wclcUesrName, wclcUserOpenkey) VALUES(0,?,?,?,?,?,?,?,?,?,?,?,?,?)';
        let insertEssayParms = [newEssay[0].wclcOpenkey, newEssay[0].wclcHeadimg, newEssay[0].wclcTitle, newEssay[0].wclcContent, newEssay[0].wclcPraise, newEssay[0].wclcBrowse, newEssay[0].wclcCollection, newEssay[0].wclcUptime, newEssay[0].wclcUserPhone, newEssay[0].wclcUserHeadimg, newEssay[0].wclcUserNickname, newEssay[0].wclcUesrName, newEssay[0].wclcUserOpenkey];

        console.log(insertEssayParms);
        db.query(insertEssaySql, insertEssayParms).then((data) => {
            ctx.response.body = 'newEssay';
        }).catch((err) => { console.log(err); });
    }

    createFinaEssay();
}



module.exports = {
    'POST /upE': upEssay
}