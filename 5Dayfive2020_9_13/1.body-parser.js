const express = require('express')
const app = express()

// 导入解析表单数据的中间件 body-parser
const parser = require('body-parser')

//todo解析json格式的中间件：contentType:application/json;charset=utf-8;
app.use(parser.json())
// app.use(express.json())
//* 解析url-encoded格式中间件 contentType:application/x-www-from-urlencoded;charset=utf-8;
app.use(parser.urlencoded({
    extended: false
}))

app.post('/json', (req, res) => {
    res.send(req.body)
})

app.post('/urlencoded', (req, res) => {
    res.send(req.body)
})

app.listen(5050, _ => {
    console.log('http://127.0.0.1:5050');
})