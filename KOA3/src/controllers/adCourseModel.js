var sd = require('silly-datetime');
let randomWord = require('../utils/randomkey/randomKey');
let db = require('../db/mysqldb');
let fileIo = require('../utils/fileio/fileio');

var upCourse = async (ctx, next) => {
    let time = sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
    let cOpenkey = randomWord.randomWord(false, 43);
    let newCourse = JSON.parse(ctx.request.body.newCourse);
    let newCourseMp4 = ctx.request.files;
    let cTypeFile = `./src/assets/course/${newCourse[0].cType}`;
    let cTitleFile = `./src/assets/course/${newCourse[0].cType}/${newCourse[0].cTitle}`;
    let cfileType = `./src/assets/course/${newCourse[0].cType}/${newCourse[0].cTitle}/${newCourse[0].cTitle}.mp4`;
    let ifileType = `./src/assets/course/${newCourse[0].cType}/${newCourse[0].cTitle}/${newCourse[0].cTitle}.jpg`;
    let finalCurl = `http://192.168.2.128:3000${ifileType.substr(1)}`;
    // let finalCcurl = `http://192.168.2.128:3000${cfileType.substr(1)}`;

    let cfileObj = newCourseMp4.uploadedfile.path;
    let ifileObj = Buffer.from(newCourse[0].cHeadimg.replace(/^data:image\/\w+;base64,/, ""), 'base64');

    fileIo.readdirFileio(cTypeFile).then(data => {
        console.log('课程分类存在');
        fileIo.readdirFileio(cTitleFile).then(data => {
            console.log('课程目录存在');
            addCourse();
            // console.log(newCourse);
        }).catch(err => {
            console.log('课程目录不存在');
            fileIo.mkdirFileio(cTitleFile).then((data) => {
                addCourse();
            }).catch((err) => { console.log(err + '课程目录创建失败'); });
        });
    }).catch(err => {
        console.log('目录不存在');
        fileIo.mkdirFileio(cTypeFile).then((data) => {
            fileIo.mkdirFileio(cTitleFile).then((data) => {
                addCourse();
            }).catch((err) => { console.log(err + '课程目录创建失败'); });
        }).catch((err) => { console.log(err + '课程目录创建失败'); });
    });
    let addCourse = () => {
        fileIo.writeCourseFileio(cfileType, cfileObj).then((data) => { }).catch((err) => { console.log(err + '文件创建失败'); });
        fileIo.writeFileio(ifileType, ifileObj).then((data) => { }).catch((err) => { console.log(err + '文件创建失败'); });
        inStallDb();
    }

    var inStallDb = () => {
        let insertEssaySql = 'INSERT INTO yh_course(id, cOpenkey, cUseropenkey, cUserheadimg, cHeadimg,cType,cTitle, cIntroduce, cChapter, cRank, cTcname,cTccoursetype, cUptime, cBrowsenumber,cLearnnumber,cPraisenumber,cCollectionnumber,cEWM,cPath) VALUES(0,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
        let insertEssayParms = [cOpenkey, newCourse[0].cUseropenkey, newCourse[0].cUserheadimg, finalCurl, newCourse[0].cType, newCourse[0].cTitle, newCourse[0].cIntroduce, newCourse[0].cChapter, newCourse[0].cRank, newCourse[0].cTcname, newCourse[0].cTccoursetype, time, newCourse[0].cBrowsenumber, newCourse[0].cLearnnumber, newCourse[0].cPraisenumber, newCourse[0].cCollectionnumber, newCourse[0].cEWM,cTitleFile];
        console.log(insertEssaySql);
        console.log(insertEssayParms);
        db.query(insertEssaySql, insertEssayParms).then((data) => {
            ctx.response.body = 'newCourse';
        }).catch((err) => { console.log(err); });
    }


    // console.log(newCourse);
    // console.log(newCourseMp4);
    // form.parse(ctx.req, (err, fields, files) => {
    //     // console.log(ctx.req)


    // });
    ctx.response.body = '200';

}

var adCourse = async (ctx, next) => {
    console.log(ctx.request.body)
}

module.exports = {
    'POST /upC': upCourse,
    'POST /adC': adCourse
}