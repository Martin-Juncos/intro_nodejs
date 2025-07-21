const express = require('express')
const mainRoutes = require('./routes/mainRoutes')

const app = express()

app.use(express.json())

app.use(mainRoutes)

module.exports = app