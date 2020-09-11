const express = require('express')
const app = express()
const router = require('./5router')
// 中间件：
app.use((req, res, next) => {
    // 获取请求到达服务器的时间
    const time = Date.now()
    // 为req对象，挂载自定义属性，把时间共享给后面所有路由
    req.time = time;
    console.log(time);

    next();
})

//②通过路由模块监听请求,'/api'添加统一前缀
app.use('/api', router)



app.listen(5050, () => {
    console.log('http://127.0.0.1:5050')
})