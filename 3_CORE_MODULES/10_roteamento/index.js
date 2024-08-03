const http = require('http')
const fs = require('fs')
const url = require('url')

const port = 3000

const server = http.createServer((req, res) => {
  var q = url.parse(req.url, true)
  //com base no url acessado vai saber qual é o filename 
  //e pega o nome dele com o substring(1)
  var filename = q.pathname.substring(1)

  console.log(filename)
  //html pq ele só vai aceitar arquivos html
  if (filename.includes('html')) {
    //trabalhando de forma síncrona ele veririfa se o arquivo existe
    if (fs.existsSync(filename)) { //renderiza a página acessada
      fs.readFile(filename, function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)
        return res.end()
      })
    } else {
      fs.readFile('404.html', function (err, data) {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.write(data)
        return res.end()
      })
    }
  }
})

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})
