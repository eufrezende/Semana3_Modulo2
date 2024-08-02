const http = require("http");
const url = require("url");

const port = 3000;

const server = http.createServer((req, res) => {
  //quando a requisição chegar, chama o módulo url e vamos passar a url que vem pela requisição 
  //e o parâmetro true é para que funcione corretamente
  var urlInfo = require("url").parse(req.url, true);
  //vou pegar a url decomposta e buscar o parâmetro name
  const name = urlInfo.query.name;

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  if (!name) { //se não vier algum nome
    res.end(
      "<h1>Preencha seu nome:</h1><form method='GET'><input type='text' name='name'/><input type='submit' value='Enviar'></form>"
    );
  } else {
    res.end(`<h1>Seja bem-vindo ${name}!</h1>`);
  }
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
