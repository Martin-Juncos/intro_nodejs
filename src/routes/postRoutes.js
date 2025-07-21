const {Router} = require('express')
const postRoutes = Router()

postRoutes.get('/post', (req, res) => {
    res.send('Solicitando los comentarios')
})
postRoutes.get('/post/:id', (req, res) => {
    res.send('Solicitando los comentarios')
})
postRoutes.post('/post', (req, res) => {
    res.send('Solicitando los comentarios')
})

module.exports = postRoutes