// 需求：将files文件夹中的1.txt 写入到 files文件中的3.txt
// 1. 获取要读取的内容
// 2. 将读取到的内容写入目标路径

// 导入fs模块
const fs = require('fs')

// 读取文件
fs.readFile('./files/1.txt', 'utf8', (err, data) => {
  if (err) return console.log('读取失败');
  // console.log(data); // 打印读取的文件内容
  
  // 写入文件
  fs.writeFile('./files/3.txt', data, err => {
    if (err) return console.log('写入失败');
    console.log('写入成功');
  })
})