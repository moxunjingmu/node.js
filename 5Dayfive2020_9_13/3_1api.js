const express = require('express')
const app = express()
// 配置表单解析的中间件
const cors = require('cors')
const router = require('./3_2router')

app.get('/jsonp', (req, res) => {
    console.log(req.query);
    const callback = req.query.callback
    res.send(callback + '({name:"mo",age:23})')
})
// app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))


app.use('/api', router)

app.listen(5050, _ => {
    console.log('http://127.0.0.1:5050');
})