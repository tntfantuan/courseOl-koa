let fs = require('fs');

// 视频流
let writeCourseFileio = (coursefilePath) => {
    return new Promise((resolve, reject) => {
        console.log("--------我是分割线-------------")
        console.log('开始文件上传....');
        // './assets/kc/sp/' + req.body.kc_xx[0].courseSort + '/' + req.files.coursePath[0].originalFilename.split('.')[0] + '.mp4'
        fs.writeFile(coursefilePath, (error, results) => {
            if (error) reject('error:' + error);
            else {
                // 创建可读流
                let readerStream = fs.createReadStream(req.files.coursePath[0].path);
                let writerStream = fs.createWriteStream();
                readerStream.pipe(writerStream);
                let data = ''
                // 处理流事件 --> data, end, and error
                readerStream.on('data', (chunk) => {
                    data += chunk;
                });
                readerStream.on('end', () => {
                    console.log("数据写入成功！");
                    console.log("--------我是分割线-------------")
                });
                readerStream.on('error', (err) => {
                    console.log(err.stack);
                });
                resolve(results);
            }
        })
    });
}
//检查目录
var readdirFileio = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readdir(filePath, (error, results) => {
            if (error) reject(error);
            else {
                resolve(results);
            }
        });
    });
}
// 创建目录
var mkdirFileio = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.mkdir(filePath, (error, results) => {
            if (error) reject('error:' + error);
            else {
                resolve(results);
            }
        });
    });
}
// 创建文件
var writeFileio = (fileType, fileObj) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileType, fileObj, (error, results) => {
            if (error) reject('error:' + error);
            else {        
                resolve(results);
            }
        });
    });
}



module.exports = {
    readdirFileio,
    mkdirFileio,
    writeFileio,
}