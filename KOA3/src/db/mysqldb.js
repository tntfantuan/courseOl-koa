let mysql = require('mysql');
// let pool = mysql.createPool({
//     host: '117.159.13.249',//主机名
//     port: '3306',
//     database: 'ol_yinghuoxueyua',// 数据库名称
//     user: 'ol_yinghuoxueyua',   //用户名
//     password: '42zEErZFEtLnGdRF',   //用户密码
//     connectionLimit: 200,
//     max_connections: 500,
//     wait_timeout: 10
// });

let pool = mysql.createPool({
    host: 'localhost',//主机名
    port: '3306',
    database: 'courseOl_v2.0',// 数据库名称
    user: 'root',   //用户名
    password: 'zY940926',   //用户密码
    connectionLimit: 200,
    max_connections: 500,
    wait_timeout: 10
});

// var query = (sql, arr, callback) => {
//     //建立链接
//     pool.getConnection((err, db) => {
//         if (err) { throw err; return; }
//         db.query(sql, arr, function (err, results) {
//             //将链接返回到连接池中，准备由其他人重复使用
//             pool.releaseConnection(db);
//             if (err) throw err;

//             //执行回调函数，将数据返回
//             callback && callback(err, results);

//         });
//     });
// };

var query = (sql, arr, callback) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, db) => {
            if (err) { throw err; return; }
            db.query(sql, arr, (error, results) => {
                if (error) reject('error:' + error);
                else {
                    resolve(results);
                    // console.log('results：'+results);
                }
            })
        });

    });
}

var updataDatabase = (fileType, userNickname, tb_setName) => {
    let userMybg = `http://192.168.2.128:3000${fileType.substr(1)}`;
    let userMybgSql = `UPDATE yh_user SET ${tb_setName} = ? WHERE userNickname = ?`;
    let userMybgParams = [userMybg, userNickname];
    query(userMybgSql, userMybgParams).then((data) => { console.log(data); }).catch((err) => { console.log(err); });
}

var selectDatabase = (tb_name) => {
    return new Promise((resolve, reject) => {
        let selectSql = `SELECT * FROM ${tb_name}`;
        query(selectSql, (error, results) => {
            if (error) reject('error:' + error);
            else {
                resolve(results);
            }
        });
    });

}

module.exports = {
    query,
    selectDatabase
};