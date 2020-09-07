const path = require('path')
const fs = require('fs')

// 定义正则表达式匹配style与script部分内容
const regStyle = /<style>([\s\S]*)<\/style>/
const regScript = /<Script>([\s\S]*)<\/Script>/

// 读取需要处理的HTML文件
fs.readFile(path.join(__dirname, '/index.html'), 'utf8', (err, dataStr) => {
    if (err) return console.log('读取HTML文件失败' + err.message);
    // console.log(dataStr)
    resolveCSS(dataStr);
})

function resolveCSS(data) {
    // 使用正则获取css内容
    const r1 = regStyle.exec(data)
    const rrs = data.match(regStyle);
    // r1[0]匹配的是整个正则的内容
    // r1[0]匹配的是圆括号中包含的内容
    // const newStr = r1[0].replace('<style>', '').replace('</style>', '')

    fs.writeFile(path.join(__dirname, './clock/index.css'), r1[1], err => {
        if (err) return console.log('写入文件失败' + err.message);
        console.log('写入文件成功！');
    })
}