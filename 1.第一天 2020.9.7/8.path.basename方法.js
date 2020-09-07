const path = require('path')
const fs = require('fs')

const res = path.basename('/a/d/g/g/d.js')
const res1 = path.basename('/a/d/g/g/d.js', '.js')
console.log(res);
console.log(res1);