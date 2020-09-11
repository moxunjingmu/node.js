// 导入express
const express = require('express')
// 创建web服务器
const app = express()
// 监听客户端的get、post请求，并向客户端响应具体的内容
app.get('/get', (req, res) => {
    // 调用express提供的res.send()方法，返回json
    res.send({
        name: 'zd',
        age: '18cm',
        gender: '男'

    })

})
app.post('/post', (req, res) => {
    res.send('这是post请求！！！')
})
app.get('/query', (req, res) => {
    // 通过 req.query 对象，可以访问到客户端通过查询字符串的形式，发送到服务器的参数：
    console.log(req.query);
    res.send(req.query);
})
// 第二种通过url传递参数的方式
// id是动态获取的参数 通过：定义动态参数
app.get('/params/:id', (req, res) => {
    // 空对象存放动态获取的参数
    console.log(req.params);
    res.send(req.params)
})



// 启动web服务器
app.listen(5050, () => {
    console.log('express server running at http://127.0.0.1:5050')
})