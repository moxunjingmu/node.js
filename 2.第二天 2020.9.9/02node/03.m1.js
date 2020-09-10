const a = 'a1'
const b = 'b2'
function fn() {
  console.log('fn函数 -- 03m1');
}
// 设置当前模块提供的资源

// 1. 给对象添加属性的方式
module.exports.a = a
module.exports.fn = fn

// 2. 重置为对象
module.exports = {
  a,
  f: fn
}

// 3. 重置为普通属性
module.exports = a

