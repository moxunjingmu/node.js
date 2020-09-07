const path = require('path')
const fs = require('fs')
fs.readFile(path.join(__dirname, '/files/1.txt'), 'utf8', (err, dataStr) => {
    if (err) return console.log('读取文件失败！' + err.message);
    console.log('文件读取成功!' + dataStr);
})