const express = require('express')
const router = express.Router()

// 全局 路由级别中间件
router.use((req,res,next)=>{
  console.log('2 全局 路由级别中间件');
  next()
})

router.get('/user/:id',(req,res,next)=>{
  console.log('3 局部 中间件');
  next()
}, (req, res) => {
  // get请求查询参数?name=zs&age=18
  console.log(req.query);
  // url地址中的动态参数
  console.log(req.params);
  res.send('服务器响应客户端数据')
})

module.exports = router