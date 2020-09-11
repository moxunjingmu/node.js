const express = require('express')
// 导入路由模块
const router = require('./06.复习_router')

const app = express()
// 中间件函数 -- 全局应用级别中间件
app.use((req, res, next) => {
  console.log('1. 中间件函数 -- 全局应用级别中间件');
  next()
})
// express 内置 解析 post请求 content-type:application/json
app.use(express.json())
// express 内置 解析 post请求 content-type:application/x-www-form-urlencoded -- name=zs&age=18
app.use(express.urlencoded({ extended: false }))

// 托管静态文件
app.use('/static', express.static('files'))
// 挂载路由
app.use(router)


app.listen(3003, _ => {
  console.log('http://127.0.0.1:3003');
})