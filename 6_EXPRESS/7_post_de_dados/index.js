const express = require('express')
const app = express()
const port = 3000

const path = require('path')

const basePath = path.join(__dirname, 'templates')

// ler o body
app.use(
  express.urlencoded({
    extended: true,
  }),
)

//todo objeto do body é transformado em um objeto JS
app.use(express.json())

var checkAuth = function (req, res, next) {
  req.authStatus = true

  if (req.authStatus) {
    console.log('Está logado, pode continuar')
    next()
  } else {
    console.log('Não está logado, faça o login para continuar!')
  }
}

app.use(checkAuth)

//uma rota para trazer o formulário
app.get('/users/add', (req, res) => {
  //envia o arquivo (form) para o front
  res.sendFile(`${basePath}/userform.html`)
})

//tratar a requisição
app.post('/users/save', (req, res) => {
  //utiliza a requisição para dar uma resposta ao usuário
  //tratamento dos dados
  console.log(req.body)
  //extraindo as variáveis do form
  const name = req.body.name
  const age = req.body.age

  console.log(name)
  console.log(age)
})

// antes do /
app.get('/users/:id', (req, res) => {
  console.log(`Carregando usuário: ${req.params.id}`)

  res.sendFile(`${basePath}/users.html`)
})

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
  console.log(`App rodando na porta:${port}`)
})
