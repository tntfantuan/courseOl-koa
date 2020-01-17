var fs = require('fs');

// 视频流
var writeCourseFileio = (fileType, coursefilePath) => {
    return new Promise((resolve, reject) => {
        console.log("--------我是分割线-------------")
        console.log('开始文件上传....');
        // './assets/kc/sp/' + req.body.kc_xx[0].courseSort + '/' + req.files.coursePath[0].originalFilename.split('.')[0] + '.mp4'
        fs.writeFile(fileType, coursefilePath, (error, results) => {
            if (error) reject('error:' + error);
            else {
                // 创建可读流
                let readerStream = fs.createReadStream(coursefilePath);
                let writerStream = fs.createWriteStream(fileType);
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

// 删除目录
var rmdirFileioAll = (fileType) => {
    return new Promise((resolve, reject) => {
        fs.rmdir(fileType, (error, results) => {
            if (error) reject('error:' + error);
            else {
                resolve(results);
            }
        });
    });
}

// 递归删除目录
var delDirFileioAll = (path) => {
    return new Promise((resolve, reject) => {
        let files = [];
        if (fs.existsSync(path)) {
            files = fs.readdirSync(path);
            // console.log(files);
            files.forEach((file, index, results, error) => {
                let curPath = path + "/" + file;
                if (error) reject('error:' + error);
                else {
                    resolve(results);
                }
                console.log(error);
                if (fs.statSync(curPath).isDirectory()) {
                    delDir(curPath); //递归删除文件夹
                } else {
                    fs.unlinkSync(curPath); //删除文件
                }
            });
            fs.rmdirSync(path);
        }
    });
}



module.exports = {
    readdirFileio,
    mkdirFileio,
    writeFileio,
    writeCourseFileio,
    rmdirFileioAll,
    delDirFileioAll
}