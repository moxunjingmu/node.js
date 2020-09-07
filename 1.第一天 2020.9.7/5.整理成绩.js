const fs = require('fs')


fs.readFile('./files/成绩.txt', 'utf8', (err, datastr) => {
    if (err) return console.log('err' + err.message);
    //  先把成绩的数据按照空格进行分割
    const arrOld = datastr.split(' ')
    const arrNew = []
    arrOld.forEach(item => {
        arrNew.push(item.replace('=', ':'))
    })
    const newStr = arrNew.join('\r\n')
    fs.writeFile('./files/chengji.txt', newStr, err => {
        if (err) return console.log('文件写入失败！' + err.message);
        console.log('文件写入成功！');
    });
})