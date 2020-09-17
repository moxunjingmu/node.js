//todo 导入node内置的querystring模块
const qs = require('querystring')

const moxunpar = (req, res, next) => {
    // 定义中间件具体的业务逻辑
    // 1.定义一个str字符串，专门用来存储客户端发来的请求体数据
    let str = ''
    // 2.监听req 的data事件
    req.on('data', chunk => str += chunk)
    // 3.监听req的end事件
    req.on('end', () => {
        //请求头的数据格式
        console.log(req.headers['content-type']);
        // 打印数据
        // console.log(str);
        const body = qs.parse(str)
        req.body = body
        next()
    })

}
module.exports = moxunpar