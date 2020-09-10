// 导入http模块
const http = require('http');
const server = http.createServer();

const path = require('path')
// 为服务器绑定 request事件，监听客户端的请求
server.on('request', (req, res) => {
    //req是
    const url = req.url
    const method = req.method
    let content = '<h1>404</h1>'

    if (url === '/' || url === '/index.html') {
        content = '<h1>首页</h1>'
    } else if (url === '/about.html') {
        content = '<h1>关于页面</h1>'
    }

    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    // res.end(`请求地址：${url}，请求方式：${method}`)
    res.end(content)

})
// 启动服务器
server.listen(5050, function () {
    console.log('server running at http://10.123.17.208:5050');
})