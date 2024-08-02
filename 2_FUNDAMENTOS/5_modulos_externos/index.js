// --nome=Matheus --idade=30
const minimist = require("minimist"); //módulo que lê argumentos

const args = minimist(process.argv.slice(2)); //slice 2 é para pegar os egundo argumento. lembrando 0: executavel, 1 arquivo e 2 argumentos.

console.log(args);

const nome = args["nome"];
const idade = args["idade"];

console.log(nome);
console.log(idade);
