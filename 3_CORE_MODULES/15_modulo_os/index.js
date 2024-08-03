const os = require("os");

//quantas cpus tem o servidor
console.log(os.cpus());
//quanto de memória livre
console.log(os.freemem());
//qual diretório principal 
console.log(os.homedir());
//qual o tipo de sistema operacional
console.log(os.type());
