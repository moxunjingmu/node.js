const express = require('express')
const router = express.Router()
router.use((req, res, next) => {
  console.log('路由中间件');
  next()
})
// 4. 监听get请求
router.get('/get', (req, res) => {
  console.log('/get请求处理函数');
  res.send({ name: 'zs', type: 'get' })
})
// 5. 监听post请求
router.post('/post', (req, res) => {
  res.send('这是post请求')
})
// 6. 获取get请求的查询参数
router.get('/query', (req, res) => {
  console.log('/query请求处理函数');
  res.send(req.query)
})
// 7. 第二种通过resful格式url地址传参的方式
router.get('/params/:id/:age', (req, res) => {
  res.send(req.params)
})

module.exports = router