console.log(exports === module.exports)
exports = {
  username:'zs',
  gender:'男'
}
console.log(exports === module.exports)
module.exports = exports
module.exports.age = 22
console.log(exports === module.exports)
