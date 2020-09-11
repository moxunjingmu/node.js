const express = require('express')

const app = express()
// 注册两个全局中间件
// 注册两个局部中间件

// 全局中间件1
app.use((req, res, next) => {
  console.log('全局1');
  next()
})
// 全局中间件2
app.use((req, res, next) => {
  console.log('全局2');
  next()
})
// 局部中间件：第二个参数数组包裹了两个局部中间件
app.get('/',
  [(req, res, next) => {
    console.log('局部1');
    next()
  }, (req, res, next) => {
    console.log('局部2');
    next()
  }],
  (req, res) => {
    console.log('/请求处理函数');
    res.send('/请求')
  })

app.get('/user', (req, res) => {
  console.log('/user 请求处理函数');
  res.send('/user 请求')
})

app.listen('3001', _ => {
  console.log('http://127.0.0.1:3001');
})