const express = require('express')
const router = express.Router()

// 导入请求处理函数
const user_handler = require('../router_handler/user')

router.post('/register',user_handler.register)
console.log(user_handler.login);
router.post('/login',user_handler.login)

module.exports = router