// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()
//! 导入 cors 中间件 解决跨域
const cors = require('cors')

const joi = require('@hapi/joi')

app.use(cors()) // 将 cors 注册为全局中间件
// write your code here...

app.use(express.urlencoded({
    extended: false
}))
// 在路由之前封装res.cc函数
app.use((req, res, next) => {
    res.cc = function (err, status = 1) {
        res.send({
            status,
            message: err instanceof Error ? err.message : err,
        })
    }
    next()
})
//!一定要在路由注册之前配置中间件
const expressJWT = require('express-jwt')
const config = require('./config')


// 使用 .unless({ path: [/^\/api\//] }) 指定哪些接口不需要进行 Token 的身份认证
//! 最新版本需要添加algorithms:['HS256']参数
app.use(expressJWT({
    secret: config.jwtSecretKey,
    algorithms: ['HS256']
}).unless({
    path: [/^\/api\//]
}))


//* 导入并注册用户路由模块
const userRouter = require('./router/user')
app.use('/api', userRouter)

//* 导入并使用用户信息路由模块
const userinfoRouter = require('./router/userinfo')
// 注意：以 /my 开头的接口，都是有权限的接口，需要进行 Token 身份认证
app.use('/my', userinfoRouter)

// // * 错误中间件
// app.use(function (err, req, res, next) {
//     // 数据验证失败
//     if (err instanceof joi.ValidationError) return res.cc(err)
//     // 未知错误
//     res.cc(err)
// })

// ! 错误中间件
app.use((err, req, res, next) => {
    //验证失败导致的错误
    if (err instanceof joi.ValidationError) return res.cc(err)
    // 捕获身份认证失败的错误
    if (err.name === 'UnauthorizedError') return res.cc('身份认证失败！')
    //未知错误
})
// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(5050, function () {
    console.log('api server running at http://127.0.0.1:5050')
})