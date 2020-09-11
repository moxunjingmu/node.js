// 托管静态资源：可以直接访问托管文件夹下的文件
// 导入express
const express = require('express')
// 创建web服务器
const app = express()
// 监听客户端的get、post请求，并向客户端响应具体的内容


app.use(express.static('./clock'))
// 启动web服务器
app.listen(5050, () => {
    console.log('express server running at http://127.0.0.1:5050')
})