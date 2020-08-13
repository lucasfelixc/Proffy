// Servidor
const express = require('express');
const app = express();

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

// configurar nunjucks
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: app,
    noCache: true
})

app.use(express.urlencoded({ extended: true }))
// configurar os arquivos estáticos (css, html, imagens)
.use(express.static('public'))
// rotas da aplicação
.get('/', pageLanding)
.get('/study', pageStudy)
.get('/give-classes', pageGiveClasses)
.post('/save-classes', saveClasses)
// iniciar servidor
app.listen(5500);