const {Router} = require('express')
const userRoutes = require('./userRoutes')
const postRoutes = require('./postRoutes')
const mainRoutes = Router()

mainRoutes.use("/user",userRoutes)
mainRoutes.use("/post", postRoutes)

module.exports = mainRoutes