const express = require('express');
const app = express()
const router = require('./5router')

// ① 路由最简单的用法
// app.get('/', (req, res) => res.send({
//     name: 'zs',
//     type: 'get'
// }))
// app.post('/', (req, res) => res.send('这是一个post请求'))
//③中间件：本质就是一个函数
app.use((req, res, next) => {
    req.query.age = 18;
    next();
})

//②通过路由模块监听请求,'/api'添加统一前缀
app.use('/api', router)

app.listen(5050, () => {
    console.log('express server running at http://127.0.0.1:5050')
})