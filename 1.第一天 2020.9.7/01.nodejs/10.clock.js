// 1.1 导入 fs 模块
const fs = require('fs')
// 1.2 导入 path 模块
const path = require('path')

// 1.3 定义正则表达式，分别匹配 <style></style> 和 <script></script> 标签
const regStyle = /<style>([\s\S]*)<\/style>/
const regScript = /<script>([\s\S]*)<\/script>/

// 2.1 调用 fs.readFile() 方法读取文件
fs.readFile(path.join(__dirname, '/index.html'), 'utf8', function (err, dataStr) {
  // 2.2 读取 HTML 文件失败
  if (err) return console.log('读取HTML文件失败！' + err.message)

  // 2.3 读取文件成功后，调用对应的三个方法，分别拆解出 css, js, html 文件
  resolveCss(dataStr) // 将style标签包裹的内容，写入到clock文件夹下的index.css
  resolveJS(dataStr) // 将script标签包裹的内容，写入到clock文件夹下的index.js
  resolveHTML(dataStr) // 将index.html内容，添加外联的css与js文件
})

// 提去参数htmlStr中，style标签包裹的内容，并写入到指定路径
function resolveCss(htmlStr) {
  // res[0]：整个正则匹配到的内容
  // res[1]：正则圆括号匹配到的内容
  const res = regStyle.exec(htmlStr)
  // 写入文件
  fs.writeFile(path.join(__dirname, '/clock/index.css'), res[1], err => {
    if (err) return console.log('写入css失败：' + err.message)
    console.log('写入css成功')
  })
}

function resolveJS(htmlStr) {
  // res[0]：整个正则匹配到的内容
  // res[1]：正则圆括号匹配到的内容
  const res = regScript.exec(htmlStr)
  // 写入文件
  fs.writeFile(path.join(__dirname, '/clock/index.js'), res[1], err => {
    if (err) return console.log('写入js失败：' + err.message)
    console.log('写入js成功')
  })
}

function resolveHTML(htmlStr) {
  htmlStr = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css" />').replace(regScript, '<script src="./index.js"></script>')
  // 写入文件
  fs.writeFile(path.join(__dirname, '/clock/index.html'), htmlStr, err => {
    if (err) return console.log('写入html失败：' + err.message)
    console.log('写入html成功')
  })
}

