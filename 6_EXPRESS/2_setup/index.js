const express = require('express') //chamada do express
//inicializando/executando o express
const app = express()
const port = 3000

//cria a rota
//o get representa o verbo http e é uma função
// (rota principal, argumento(requisição, resposta) função anônima (=>))
//req - recebe, res - envia
  app.get('/', (req, res) => {
  //resposta enviar...
  res.send('Olá Mundo!!')
})

//ouvinte (callback...)
app.listen(port, () => {
  console.log(`App rodando na porta:${port}`)
})
