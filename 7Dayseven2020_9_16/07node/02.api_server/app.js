// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// write your code here...
// 导入 cors 中间件
const cors = require('cors')
// 将 cors 注册为全局中间件
app.use(cors())
// 配置解析表单数据的中间件，注意：这个中间件，只能解析 application/x-www-form-urlencoded 格式的表单数据
app.use(express.urlencoded({ extended: false }))

// 一定要在路由之前，封装 res.cc 函数
app.use((req, res, next) => {
  // status 默认值为 1，表示失败的情况
  // err 的值，可能是一个错误对象，也可能是一个错误的描述字符串
  res.cc = function (err, status = 1) {
    res.send({
      status,
      message: err instanceof Error ? err.message : err,
    })
  }
  next()
})

// 导入路由，并挂载
const userRouter = require('./router/user')
app.use('/api', userRouter)

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(3007, function () {
  console.log('api server running at http://127.0.0.1:3007')
})
