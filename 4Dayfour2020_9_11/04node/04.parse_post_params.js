const express = require('express')

const app = express()
// 托管静态文件：
app.use(express.static('senddata'))

// content-type:application/json
app.use(express.json())
// content-type:application/x-www-form-urlencoded -- name=zs&age=18
app.use(express.urlencoded({ extended: false }))

app.post('/json', (req, res) => {
  // req.body：post提交的参数
  console.log(req.body);
  res.send(req.body)
})
app.post('/urlencoded', (req, res) => {
  res.send(req.body)
})


app.listen(80, _ => {
  console.log('http://127.0.0.1');
})