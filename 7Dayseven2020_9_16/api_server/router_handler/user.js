// todo 在这里定义和用户相关的路由处理函数，供 /router/user.js 模块进行调用
const db = require('../db/index')
const bcrypt = require('bcryptjs')
// 用这个包来生成 Token 字符串
const jwt = require('jsonwebtoken')
const config = require('../config')

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
        //todo 加盐处理
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
    const userinfo = req.body
    const sqlStr = 'select * from ev_users where username=?'
    db.query(sqlStr, [userinfo.username], (err, results) => {
        if (err) return res.cc(err)
        if (results.length !== 1) return res.cc('登录失败！！！')
        //todo 判断密码是否正确
        const compareRsult = bcrypt.compareSync(userinfo.password, results[0].password)
        if (!compareRsult) return res.cc('密码错误！')
        //todo 生成 Token 字符串包含的用户信息，不包含密码和头像
        const user = {
            ...results[0],
            password: '',
            user_pic: ''
        }
        //对用户的信息进行加密，生成Token字符串
        //参数1：生成token字符串的信息
        //参数2：加密字符串
        //参数3：{过期时间}
        const tokenStr = jwt.sign(user, config.jwtSecretKey, {
            expiresIn: config.expiresIn
        })
        res.send({
            status: 0,
            message: '登录成功！',
            token: 'Bearer ' + tokenStr
        })
    })
}