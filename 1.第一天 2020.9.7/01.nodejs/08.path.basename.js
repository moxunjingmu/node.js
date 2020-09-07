const path = require('path')

const res = path.basename('/a/b/c.js') // c.js
const res = path.basename('/a/b/c.js','.js') // c
const res = path.basename('/a/b/c.js','.css') // c.js
const res = path.basename('/a/b/c') // c
const res = path.basename('/a/b/c/') // c

console.log(res);