const http = require("http");
const fs = require("fs");

const port = 3000;

const server = http.createServer((req, res) => {
  //url importado direto
  var urlInfo = require("url").parse(req.url, true); 
  //retira o name declarado no html do input que vai pa a url após declarado
  const name = urlInfo.query.name;

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  if (!name) { //se não houver o envio do nome
    fs.readFile("index.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  } else { //aqui ele grava pelo método writeFile no arquivo, 
    //a variável retornando erro ou o dado
    fs.writeFile("arquivo.txt", name, function (err, data) {
      res.writeHead(302, {
        Location: "/",
      });
      return res.end();
    });
  }
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
