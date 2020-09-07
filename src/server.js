// Servidor
const express = require("express")
const server = express()

const { 
  landingPage,
  studyPage,
  giveClassesPage,
  saveClasses
} = require('./pages')

// Configura o nunjucks (template engine)
const nunjucks = require("nunjucks")
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

// Inicia o servidor
server

// Receber os dados do req.body
.use(express.urlencoded({extended: true}))
// Configura arquivos estáticos  (css, script, imagens)
.use(express.static("public"))
// Rotas da aplicação
.get("/", landingPage)
.get("/study-page", studyPage)
.get("/give-classes", giveClassesPage)
.post("/save-classes", saveClasses)
// Start do servidor
.listen(5500)