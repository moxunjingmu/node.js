const fs = require('fs')
// 异步读文件
// fs.readFile('./files/1.txt','utf8',(err,data)=>{
//   if(err) return console.log(err);
//   console.log(data);
// })

// 同步读文件：
const dataStr = fs.readFileSync('./files/1.txt','utf8')
console.log(dataStr);
console.log('1.readFile之后');