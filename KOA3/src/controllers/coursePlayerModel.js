let fs = require('fs');

/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-12 16:35:20 
 * @Last Modified by: mikey.zhiyuanL
 * @Last Modified time: 2019-12-12 23:36:03
 */
var coursePlayerCs1 = async (ctx, next) => {

    // ctx.request.body;
    ctx.body = '视频测试1：2000';
}

/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-12 16:35:20 
 * @Last Modified by:   mikey.zhiyuanL 
 * @Last Modified time: 2019-12-12 16:35:20 
 */
var coursePlayerCs2 = async (ctx, next) => {
    const coursePath = './src/111.mp4';
    const courseStat = fs.statSync(coursePath);
    const fileSize = courseStat.size;

    let head = {
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4'
    };

    ctx.res.writeHead(200, head);
    ctx.body = fs.createReadStream(coursePath);
}

/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-12 16:35:20 
 * @Last Modified by:   mikey.zhiyuanL 
 * @Last Modified time: 2019-12-12 16:35:20 
 */
var coursePlayer = async (ctx, next) => {
    // console.log('ctxUrl :' + ctx.url);
    // console.log(ctx.querystring.split('=')[1]);

    let coursePath = `./src/assets/course/${ctx.params.courseType}/${ctx.params.courseName}.mp4`;
    let courseStat = fs.statSync(coursePath);
    let fileSize = courseStat.size;
    let range = ctx.req.headers.range;
    let head = {
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4'
    };

    if (range) {
        let parts = range.replace(/bytes=/, "").split("-");
        let start = parseInt(parts[0], 10);
        let end = parts[1] ? parseInt(parts[1], 10) : start + 999999;

        // end 在最后取值为 fileSize - 1 
        end = end > fileSize - 1 ? fileSize - 1 : end;

        let chunksize = (end - start) + 1;
        let file = fs.createReadStream(coursePath, {
            start,
            end
        });
        let head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'video/mp4',
        };

        ctx.res.writeHead(206, head);
        ctx.body = file;

    } else {
        let head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4'
        };
        ctx.res.writeHead(200, head);
        ctx.body = fs.createReadStream(coursePath);
    }
}

module.exports = {
    'GET /coursePlayer1': coursePlayerCs1,
    'GET /coursePlayer2': coursePlayerCs2,
    'GET /coursePlayer/:courseType/:courseName': coursePlayer,
}