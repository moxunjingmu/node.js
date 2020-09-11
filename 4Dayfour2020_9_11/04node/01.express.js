// 1. 导入express
const express = require('express')
// 导入 路由 模块
const router = require('./02.router')

// 2. 创建app服务
const app = express()
// 添加全局中间件处理函数
app.use((req, res, next) => {
  req.query.age = 15
  console.log('01 全局中间件函数');
  next()
})

// 挂载路由 - 添加请求地址的公共路径
app.use('/user', router)

// 8. 托管静态资源：可以直接访问托管目录下的文件
app.use(express.static('./public')) // 托管多个目录
// 设置静态文件访问的前缀路径
// /index.html -> /files/index.html
app.use('/files', express.static('./files'))


// 3. 监听端口
app.listen(3000, () => {
  console.log('http://127.0.0.1:3000');
})