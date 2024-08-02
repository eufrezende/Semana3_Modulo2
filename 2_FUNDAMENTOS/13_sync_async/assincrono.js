const fs = require("fs");

console.log("Início");

fs.writeFile("arquivo.txt", "Oi", function (err) { //método assincrono
  setTimeout(function () {
    console.log("Arquivo criado!");
  }, 1000); //levará 1s
});

console.log("Fim");
