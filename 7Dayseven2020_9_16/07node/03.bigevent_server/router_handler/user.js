const db = require('../db/index')

exports.register = (req, res) => {
  // 获取用户提交参数
  const userinfo = req.body
  const sqlSelect = 'select * from ev_users where username = ?'
  db.query(sqlSelect, userinfo.username, (err, results) => {
    if (err) return res.send('查询数据错误')
    // 当前注册用户名 是否被占用
    if (results.length > 0) return res.send('用户名被占用')

    // userinfo.password = 加密的密码
    // 插入语句
    const sqlInsert = 'insert into ev_users set ?'
    db.query(sqlInsert, { username: userinfo.username, password: userinfo.password }, (err, results) => {
      console.log(err);
      if (err) return res.send('插入数据错误')
      if (results.affectedRows !== 1) return res.send('输入失败')
      res.send('输入成功！！')
    })
  })
}


exports.login = (req, res) => {
  res.send('login')
}