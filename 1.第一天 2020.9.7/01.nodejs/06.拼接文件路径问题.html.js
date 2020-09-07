const fs = require('fs')
const path = require('path')

// 出现路径拼接错误的问题，是因为提供了 ./ 或 ../ 开头的相对路径
// 如果要解决这个问题，可以直接提供一个完整的文件存放路径就行
fs.readFile(path.join(__dirname,'files/1.txt'), 'utf8', function (err, dataStr) {
  if (err) {
    return console.log('读取文件失败！' + err.message)
  }
  console.log('读取文件成功！' + dataStr)
})

// 当前执行文件所在的绝对路径
// C:\Users\HUAWEI\Desktop\01.nodejs> 
// console.log(__dirname);
