const express = require('express')
const app = express()
const port = 3000

//chama o path
const path = require('path')

//a pasta base é a 3_render_html e eu quero acessar a templates
//_dirname é o diretório atual
const basePath = path.join(__dirname, 'templates')
//aqui encerra o acesso à pasta

//aqui passa a acessaar o arquivo na pasta templates
app.get('/', (req, res) => {
  //res.sendFile envia a respsota de um arquivo
  //`${basePath}/index.html` é o caminho relativo para o arquivo
  res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
  console.log(`App rodando na porta:${port}`)
})
