const a = 'a1'
const b = 'b2'
function fn() {
  console.log('fn函数 -- 03m1');
}
// 当模块混用 exports 和 module.exports
// 以module.exports为准
module.exports = {
  b,
  fn
}

exports.a = a

// 设置当前模块提供的资源 -- true
// console.log(exports === module.exports)
// 1. 给对象添加属性的方式 -- 有效
// exports.a = a
// exports.fn = fn

// 2. 重置为对象 -- 无效
// exports = {
//   a,
//   f: fn
// }

// 3. 重置为普通属性 -- 无效
// exports = a

