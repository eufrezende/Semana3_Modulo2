const fs = require('fs')

//confere se o diretório existe
if (!fs.existsSync('./minhapasta')) {
  console.log('Não existe')
  fs.mkdirSync('minhapasta')
} //se não existir ele cria
  else if (fs.existsSync('minhapasta')) {
  console.log('Existe')
}
