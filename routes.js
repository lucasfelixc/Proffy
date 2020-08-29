const express = require('express')
const routes = express.Router()

const registerController = require('./src/controllers/registerController')
const landingController = require('./src/controllers/landingController')
const studyController = require('./src/controllers/studyController')

routes
// Página inicial
.get('/', landingController.landing)

// Página para procurar os professores
.get('/study', studyController.rendPageStudy)

// Página de cadastro de professores
.get('/give-classes', registerController.index)

// Post para salvar dados no banco de dados, no cadastro de professores
.post('/save-classes', registerController.register)


module.exports = routes