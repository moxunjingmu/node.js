const express = require('express');
const router = express.Router()
router.get('/user/list', (req, res) => {
    res.send('get user list')
})
router.post('/user/add', (req, res) => {
    res.send('Add new user ')
})
// id是动态获取的参数 通过：定义动态参数
router.get('/params/:id', (req, res) => {
    // 空对象存放动态获取的参数
    console.log(req.params);
    res.send(req.params)
})

router.get('/query', (req, res) => {
    // 通过 req.query 对象，可以访问到客户端通过查询字符串的形式，发送到服务器的参数：
    console.log(req.query);
    res.send(req.query);
})
module.exports = router;