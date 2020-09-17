const express = require('express')

const app = express()

// 解决跨域
const cors = require('cors')
app.use(cors())
// 解析 urlencoded参数
app.use(express.urlencoded({ extended: false }))


// 导入路由并挂载
const userRouter = require('./router/user')
app.use('/api', userRouter)

app.listen(80, _ => {
  console.log('http://127.0.0.1');
})