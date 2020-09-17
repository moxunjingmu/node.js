// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()
// 导入 cors 中间件
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
// 导入并注册用户路由模块
const userRouter = require('./router/user')
app.use('/api', userRouter)

// * 
错误中间件
app.use(function (err, req, res, next) {
    // 数据验证失败
    if (err instanceof joi.ValidationError) return res.cc(err)
    // 未知错误
    res.cc(err)
})
// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(5050, function () {
    console.log('api server running at http://127.0.0.1:5050')
})