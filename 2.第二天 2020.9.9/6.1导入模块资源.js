const a = 'adsjfadfadsf'
const b = 'lajdfahdf'

function f() {
    console.log('fn');
}
module.exports.a = a
// 2.重置空对象
module.exports = {
    b,
    f
}

// 3.重置普通属性
// module.exports = a
// console.log(module);