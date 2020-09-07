const fs = require('fs')

fs.writeFile('./files/2.txt', 'aaaaa', err => {
  if(err) return console.log('写文件失败');
  console.log('写文件成功');
})