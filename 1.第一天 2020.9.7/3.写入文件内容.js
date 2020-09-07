const fs = require('fs')

fs.writeFile('./files/2.txt', 'adsfadf', err => {
    if (err) return console.log('文件写入失败！' + err.message);

    console.log('文件写入成功！');

});
// fs.readFile('./files/1.txt', 'utf8', (errs, datastr) => {
//         console.log(errs);
//         console.log(datastr);
//     })