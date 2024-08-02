const fs = require("fs");

console.log("Início");

fs.writeFileSync("arquivo.txt", "Oi");//o sync determina que essa ação seja executada para dar continuidade no programa

console.log("Fim");
