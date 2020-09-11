const express = require('express')
const app = express()

// 中间件：
app.use((req, res, next) => {
    console.log('全局1');
    next();
})
app.use((req, res, next) => {
    console.log('全局2');
    next();
})
// 局部中间件
// app.use((req, res, next) => {
//     console.log('局部1');
//     next();
// })

app.get('/', (req, res, next) => {
    console.log('局部1');
    next();
}, (req, res) => {
    console.log('请求处理函数');
    res.send('/get请求')
})
app.get('/user', (req, res) => {
    console.log('/user请求处理函数');
    res.send('/user 请求')
})

app.listen(5050, () => {
    console.log('http://127.0.0.1:5050')
})