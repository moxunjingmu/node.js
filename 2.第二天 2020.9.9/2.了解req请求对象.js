// 导入http模块
const http = require('http');
const server = http.createServer();
// 为服务器绑定 request事件，监听客户端的请求
server.on('request', function (req, res) {
    //req是
    const url = req.url
    const method = req.method
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end(`请求地址：${url}，请求方式：${method}`)

})
// 启动服务器
server.listen(5050, function () {
    console.log('server running at http://10.123.17.208:5050');
})