const express = require('express')
require('dotenv').config()
const router = require('./router/router')
const app = express()
const port = process.env.PORT

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(router)

app.listen(port, () => {
  console.log(`Server runnig at http://localhost:${port}`)
})