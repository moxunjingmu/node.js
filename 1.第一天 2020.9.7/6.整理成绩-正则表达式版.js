const fs = require('fs')


fs.readFile('./files/成绩.txt', 'utf8', (err, datastr) => {
    if (err) return console.log('err' + err.message);
    //  先把成绩的数据按照空格进行分割
    datastr = datastr.replace(/=/g, ':').replace(/\s+/g, '\r\n')

    fs.writeFile('./files/chengji-zhengce.txt', datastr, err => {
        if (err) return console.log('文件写入失败！' + err.message);
        console.log('文件写入成功！');
    });
})