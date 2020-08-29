// Servidor
const express = require('express');
const app = express();
const routes = require('./routes')

const {
    pageGiveClasses,
    pageSucess
} = require('./pages')

// configurar nunjucks
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: app,
    noCache: true
})

app
// receber dados do body
.use(express.urlencoded({ extended: true }))
// configurar os arquivos estáticos (css, html, imagens)
.use(express.static('public'))
// rotas da aplicação
.use(routes)

.get('/sucess', pageSucess)

// iniciar servidor
.listen(3000, () => {
    console.log('Acesse http://localhost:3000')
});