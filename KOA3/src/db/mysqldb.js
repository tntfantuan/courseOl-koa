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

/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-09 10:35:10 
 * @Last Modified by: mikey.zhiyuanL
 * @Last Modified time: 2019-12-18 16:50:35
 */
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

/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-09 10:35:10 
 * @Last Modified by:   mikey.zhiyuanL 
 * @Last Modified time: 2019-12-09 10:35:10 
 */
var query = (sql, arr, callback) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, db) => {
            if (err) { throw err; return; }
            db.query(sql, arr, (error, results) => {
                pool.releaseConnection(db);
                if (error) reject('error:' + error);
                else { resolve(results); }
            });
        });
    });
}

/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-09 10:35:10 
 * @Last Modified by:   mikey.zhiyuanL 
 * @Last Modified time: 2019-12-09 10:35:10 
 */
var insertDatabase = (tb_name, tb_data) => {
    return new Promise((resolve, reject) => {
        let insertSql = `INSERT INTO ${tb_name}`;
        let insertParams = tb_data;
        // console.log(insertSql);
        // console.log(insertParams);
        query(insertSql, insertParams).then((data) => {
            resolve(data);
        }).catch((err) => {
            reject('error:' + err);
        });
    });
}

/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-09 10:35:10 
 * @Last Modified by:   mikey.zhiyuanL 
 * @Last Modified time: 2019-12-09 10:35:10 
 */
var selectDatabase = (tb_name) => {
    return new Promise((resolve, reject) => {
        let selectSql = `SELECT * FROM ${tb_name}`;
        query(selectSql).then((data) => {
            resolve(data);
        }).catch((err) => {
            reject('error:' + err);
        });
    });
}

/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-10 17:35:56 
 * @Last Modified by:   mikey.zhiyuanL 
 * @Last Modified time: 2019-12-10 17:35:56 
 */
var sWhereDb = (tb_condition, tb_name, tb_whereName) => {
    return new Promise((resolve, reject) => {
        let sWhereSql = `SELECT ${tb_condition} FROM ${tb_name} WHERE ${tb_whereName}`;
        // console.log(sWhereSql);
        query(sWhereSql).then(data => {
            resolve(data)
        }).catch(err => {
            reject(err)
        });
    });
}

var sAllwhereDb = (tb_condition, tb_name, tb_whereName) => {
    return new Promise((resolve, reject) => {
        let sWhereSql = `SELECT ${tb_condition} FROM ${tb_name} WHERE ${tb_whereName}`;
        // console.log(sWhereSql);
        query(sWhereSql).then(data => {
            resolve(data)
        }).catch(err => {
            reject(err)
        });
    });
}

/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-10 17:35:56 
 * @Last Modified by:   mikey.zhiyuanL 
 * @Last Modified time: 2019-12-10 17:35:56 
 */
var upDataDb = (tb_name, tb_setName, tb_whereName, tb_data) => {
    return new Promise((resolve, reject) => {
        let upDataSql = `UPDATE ${tb_name} SET ${tb_setName} = ? WHERE ${tb_whereName} = ?`;
        let upDataParams = [tb_data.tb_setData, tb_data.tb_whereData];
        query(upDataSql, upDataParams).then(data => {
            resolve(data);
        }).catch(err => {
            reject('error:' + err);
        })
    });
}

/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-10 17:35:56 
 * @Last Modified by:   mikey.zhiyuanL 
 * @Last Modified time: 2019-12-10 17:35:56 
 */
var upDataDb_course = (tb_name, tb_setName1, tb_setName2, tb_whereName, tb_data) => {
    return new Promise((resolve, reject) => {
        let upDataSql = `UPDATE ${tb_name} SET ${tb_setName1} = ? , ${tb_setName2} = ? WHERE ${tb_whereName} = ?`;
        let upDataParams = [tb_data.tb_setData1, tb_data.tb_setData2, tb_data.tb_whereData];
        query(upDataSql, upDataParams).then(data => {
            resolve(data);
        }).catch(err => {
            reject('error:' + err);
        })
    });
}

/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-10 17:35:56 
 * @Last Modified by:   mikey.zhiyuanL 
 * @Last Modified time: 2019-12-10 17:35:56 
 */
var deleteDataDb = (tb_name, tb_whereName) => {
    return new Promise((resolve, reject) => {
        let deleteSql = `DELETE FROM ${tb_name} WHERE ${tb_whereName}`;
        // let deleteParams = ``;
        // console.log(deleteSql);
        // console.log(deleteParams);
        query(deleteSql).then(data => {
            resolve(data);
        }).catch(err => {
            reject('error:' + err);
        });
    })
}

/*
 * @Author: mikey.zhiyuanL 
 * @Date: 2019-12-09 10:35:10 
 * @Last Modified by:   mikey.zhiyuanL 
 * @Last Modified time: 2019-12-09 10:35:10 
 */
var updataDatabase = (fileType, userNickname, tb_setName) => {
    let userMybg = `http://192.168.2.128:3000${fileType.substr(1)}`;
    let updataSql = `UPDATE yh_user SET ${tb_setName} = ? WHERE userNickname = ?`;
    let updataParams = [userMybg, userNickname];
    query(updataSql, updataParams).then((data) => {
        resolve(data);
    }).catch((err) => {
        reject('error:' + err);
    });
}



module.exports = {
    query,
    selectDatabase,
    insertDatabase,
    sWhereDb,
    upDataDb,
    upDataDb_course,
    deleteDataDb,
    sAllwhereDb
};