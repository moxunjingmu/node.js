const fs = require('fs')


fs.readFile('./files/1.txt', 'utf8', (err, datastr) => {
    if (err) return console.log('err');

    fs.writeFile('./files/3.txt', datastr, err => {
        if (err) return console.log('文件写入失败！' + err.message);

        console.log('文件写入成功！');

    });
})