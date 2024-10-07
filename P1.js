
const express = require('express')
require('dotenv').config()
const app = express()
const PORT = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/log', (req, res) => {
    res.send('Hello Himanshu!')
  })
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})