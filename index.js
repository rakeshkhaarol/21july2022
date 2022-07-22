const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/know', function (req, res) {
    res.send('Hello World again')
  })

app.listen(5000)