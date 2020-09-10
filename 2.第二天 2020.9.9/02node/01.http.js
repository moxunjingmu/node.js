// 1. 导入http模块
const http = require('http')
// 2. 创建 服务器
const server = http.createServer()
// 3. 监听客户请求
server.on('request', (req, res) => {
  // 设置编码格式
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  // 服务器响应给客户端的数据
  res.end(`请求地址：${req.url}，请求方式：${req.method}`)
})
// 4. 启动服务
server.listen(3002, () => {
  console.log('http://127.0.0.1:3002')
})