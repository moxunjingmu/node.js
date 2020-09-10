const fs = require('fs')
const path = require('path')
const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
  const url = req.url // 用户请求地址
  let fPath = '' // 读取文件的地址
  // 设置读取文件的路径
  if (url === '/') {
    fPath = path.join(__dirname, '/clock/index.html')
  } else {
    fPath = path.join(__dirname, '/clock/', url)
  }

  fs.readFile(fPath, 'utf8', (err, data) => {
    if (err) return res.end('读取文件失败' + err.message);
    res.end(data);
  })
})

server.listen(3005, () => {
  console.log('http://localhost:3005');
})