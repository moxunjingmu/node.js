// 导入数据库
const mysql = require('mysql')

// 创建链接对象
const db = mysql.createPool({
  hots:'127.0.0.1',
  user:'root',
  password:'admin123',
  database:'my_db_01'
})

// 导出链接对象
module.exports = db