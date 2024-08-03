const express = require('express')
const app = express()
const port = 3000

const path = require('path')

const basePath = path.join(__dirname, 'templates')

//variável apra checar autenticação
var checkAuth = function (req, res, next) {
  //vai verificar a autenticação do usuário
  req.authStatus = true

  if (req.authStatus) {
    console.log('Está logado, pode continuar')
    //para o loop infinito autoriando a continuação
    next()
  } else {
    console.log('Não está logado, faça o login para continuar!')
  }
}

//utilizando o middleware
app.use(checkAuth)

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
  console.log(`App rodando na porta:${port}`)
})
