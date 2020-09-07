const fs = require('fs')
// fs.readFile('./files/1.txt', 'utf8', (err, datastr) => {
//     if (err) return console.log(err);
//     console.log('---------')
//     console.log(datastr);
// })

const datastr = fs.readFileSync('./files/1.txt')