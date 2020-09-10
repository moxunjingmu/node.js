// 导入http模块
const http = require('http');
const server = http.createServer();
// 为服务器绑定 request事件，监听客户端的请求
server.on('request', function (req, res) {
    console.log('heihei heiheiheihreihiehiehiehiehireihriehr');
    res.end('asdf;djsfjasdfj;lkj')

})
// 启动服务器
server.listen(5050, function () {
    console.log('server running at http://127.0.0.1:5050');
})