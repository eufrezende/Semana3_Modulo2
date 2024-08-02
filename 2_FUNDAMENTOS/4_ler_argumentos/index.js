// nome=Matheus

console.log(process.argv); // mostra o executável, o arquivo e o argumento

const args = process.argv.slice(2); //o slice usado apra resgatar o segundo índice (que no caso seria apenas o argumento do process.argv)

console.log(args);

const nome = args[0].split("=")[1]; //o split divide a string quando vê um =, fazendo com que ele retorne apenas o valor do nome

console.log(nome);

const idade = args[1].split("=")[1];

console.log(idade);

console.log(`Onome dele é ${nome} e ele tem ${idade} anos.`)