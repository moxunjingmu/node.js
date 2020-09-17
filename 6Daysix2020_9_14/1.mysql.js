const mysql = require('mysql')
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01'
})
// const sql = 'select * from users where id=5'
// db.query(sql, (err, results) => {
//     if (err) return console.log(err);
//     console.log(results);
// })


//todo 向users表中新增一条数据，其中username的值为Spider-Man ，password 的值为pcc123

// const user = {
//     username: 'Spider-Mansss',
//     password: 'pcc123'
// }
// // 定义待执行的sql语句
// const sqlstr = 'insert into users (username,password) values (?,?)'
// // 执行SQL语句
// db.query(sqlstr, [user.username, user.password], (err, results) => {
//     if (err) return console.log(err.message);
//     // 注意：如果执行得是insert into 插入语句 则results 是一个对象
//     results.affectedRows && console.log('插入成功！');
// })
//!插入数据的简便方式
// const user = {
//     username: 'Super-Man',
//     password: 'pcc123'
// }
// // 定义待执行的sql语句
// const sql = 'insert into users set ?'
// db.query(sql, user, (err, results) => {
//     if (err) return console.log(err.message);
//     // 注意：如果执行得是insert into 插入语句 则results 是一个对象
//     results.affectedRows && console.log('插入成功！');
// })
// //?更新用户信息
// const user = {
//     id: 6,
//     username: 'aaa-an',
//     password: 'c123'
// }
// // 定义待执行的sql语句
// const sql = 'update users set username=?,password=? where id =?'
// db.query(sql, [user.username, user.password, user.id], (err, results) => {
//     if (err) return console.log(err.message);
//     // 注意：如果执行得是insert into 插入语句 则results 是一个对象
//     results.affectedRows && console.log('插入成功！');
// })

// //?更新用户信息
// const user = {
//     id: 8,
//     username: 'dkfjgkdf',
//     password: 'c123'
// }
// // 定义待执行的sql语句
// const sql = 'update users set ? where id=?'
// db.query(sql, [user, user.id], (err, results) => {
//     if (err) return console.log(err.message);
//     // 注意：如果执行得是insert into 插入语句 则results 是一个对象
//     results.affectedRows && console.log('更新成功！');
// })
// //* 删除id为5的用户
// const sql = 'delete from users where id=?'
// db.query(sql, 5, (err, results) => {
//     if (err) return console.log(err.message);
//     // 注意：如果执行得是insert into 插入语句 则results 是一个对象
//     results.affectedRows && console.log('删除成功！');
// })
//todo 标记删除
const sql = 'update users set status=? where id=?'
db.query(sql, [1, 7], (err, results) => {
    if (err) return console.log(err.message);
    // 注意：如果执行得是insert into 插入语句 则results 是一个对象
    results.affectedRows && console.log('标记删除成功！');
})