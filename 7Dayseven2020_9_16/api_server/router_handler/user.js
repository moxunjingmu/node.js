// todo 在这里定义和用户相关的路由处理函数，供 /router/user.js 模块进行调用
const db = require('../db/index')
const bcrypt = require('bcryptjs')
// 注册用户的处理函数
exports.regUser = (req, res) => {
    // 接收表单数据
    const userinfo = req.body
    // ?判断数据是否合法
    // if (!userinfo.username || !userinfo.password) {
    //     return res.cc('用户名或密码不能为空！')
    // }
    const sqlStr = 'select * from ev_users where username=?'
    db.query(sqlStr, [userinfo.username], (err, results) => {
        if (err) return res.cc(err)

        if (results.length > 0) return res.cc('用户名已存在，请重新输入！')


        // 对用户的密码,进行 bcrype 加密，返回值是加密之后的密码字符串
        userinfo.password = bcrypt.hashSync(userinfo.password, 10)
        //   定义插入新用户的SQL语句
        const sql = 'insert into ev_users set ?'
        db.query(sql, {
            username: userinfo.username,
            password: userinfo.password
        }, (err, results) => {
            if (err) return res.cc(err)
            if (results.affectedRows !== 1) return res.cc('注册失败，请稍后再试！')
            res.cc('注册成功！', 0)
        })

    })

}

// 登录的处理函数
exports.login = (req, res) => {
    res.send('login OK')
}