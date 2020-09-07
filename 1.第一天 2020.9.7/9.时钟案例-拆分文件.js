const path = require('path')
const fs = require('fs')

// 定义正则表达式匹配style与script部分内容
const regStyle = /<style>([\s\S]*)<\/style>/
const regScript = /<script>([\s\S]*)<\/script>/

// 读取需要处理的HTML文件
fs.readFile(path.join(__dirname, '/index.html'), 'utf8', (err, dataStr) => {
    if (err) return console.log('读取HTML文件失败' + err.message);

    // resolveCSS(dataStr);
    // resolveJS(dataStr);
    resolvesum(dataStr, 'index.css', regStyle)
    resolvesum(dataStr, 'index.js', regScript)
    resolveHtml(dataStr);
})



function resolvesum(data, arr, zz) {
    const str = zz.exec(data);
    const houzhui = path.extname(arr);
    fs.writeFile(path.join(__dirname, `/clock/${arr}`), str[1], err => {
        if (err) return console.log(`写入${houzhui}文件失败！` + err.message);
        console.log(`写入${houzhui}文件成功！`);
    })
}

function resolveHtml(data) {
    const htmlstr = data.replace(regStyle, '<link rel="stylesheet" href="./index.css" />').
    replace(regScript, '  <script src="./index.js"></script>')

    fs.writeFile(path.join(__dirname, '/clock/index.html'), htmlstr, err => {
        if (err) return console.log('写入html文件失败！' + err.message);
        console.log('写入html文件成功！');

    })
}

// function resolveCSS(data) {
//     // 使用正则获取css内容
//     const r1 = regStyle.exec(data)
//     // const rrs = data.match(regStyle);
//     console.log(typeof data);
//     // r1[0]匹配的是整个正则的内容
//     // r1[0]匹配的是圆括号中包含的内容
//     // const newStr = r1[0].replace('<style>', '').replace('</style>', '')

//     fs.writeFile(path.join(__dirname, '/clock/index.css'), r1[1], err => {
//         if (err) return console.log('写入文件失败' + err.message);
//         console.log('写入文件成功！');
//     })
// }

// function resolveJS(data) {
//     // 使用正则获取css内容
//     const rrs = regScript.exec(data)
//     fs.writeFile(path.join(__dirname, '/clock/index.js'), rrs[1], err => {
//         if (err) return console.log('写入js文件失败' + err.message);
//         console.log('写入js文件成功！');
//     })
// }