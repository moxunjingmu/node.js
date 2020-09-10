const http = require('http');
const server = http.createServer();
const fs = require('fs');
const path = require('path')
// 为服务器绑定 request事件，监听客户端的请求
server.on('request', (req, res) => {

    let url = req.url
    let fpath = ''
    if (url === '/') {
        fpath = path.join(__dirname, './clock/index.html')
    } else {
        fpath = path.join(__dirname, '/clock', url)
    }

    fs.readFile(fpath, 'utf8', (err, dataStr) => {
        if (err) return res.end('404 not found.')
        res.end(dataStr)
    })


})
// 2.3 启动服务器
server.listen(80, () => {
    console.log('server running at http://127.0.0.1')
})