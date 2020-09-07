// 1. 导入文件系统模块
const fs = require('fs')
// 2. 读取文件内容
fs.readFile('./成绩.txt', 'utf8', (err, dataStr) => {
  // 读文件失败时终止后续代码执行
  if (err) return console.log('读取文件失败')
  // 3. 处理读取的文件内容：将有所的 = 替换为 : 将连续出现的多个空白符，替换为换行
  dataStr = dataStr.replace(/=/g, ':').replace(/\s+/g, '\r\n')
  // 4. 将替换后的内容写入文件
  fs.writeFile('./files/4.score-ok.txt', dataStr, err => {

    if (err) return console.log('写入文件失败')

    console.log('写入文件成功！')
  })
})