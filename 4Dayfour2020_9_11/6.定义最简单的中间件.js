const express = require('express')
const app = express()
const router = require('./5router')
// 中间件：
app.use((req, res, next) => {
    req.query.age = 18;
    console.log('这是中间件函数！');
    next();
})

//②通过路由模块监听请求,'/api'添加统一前缀
app.use('/api', router)



app.listen(5050, () => {
    console.log('http://127.0.0.1:5050')
})