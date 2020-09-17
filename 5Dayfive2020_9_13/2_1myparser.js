const express = require('express')
const app = express()

const moxunpar = require('./2_2moxunparser')

app.use(moxunpar)





app.post('/urlencoded', (req, res) => {
    res.send(req.body)
})


app.listen(5050, _ => {
    console.log('http://127.0.0.1:5050');
})