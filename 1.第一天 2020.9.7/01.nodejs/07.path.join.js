const path = require('path')

// const pathStr = path.join('a', './b', '/c', '..')

// console.log(pathStr);

const path1 = path.join('/a', '/b/c', '../../', './d', 'e')
// '/a/d/e'
console.log(path1);