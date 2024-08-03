const fs = require('fs')

//método, (arquivo, novo nome, função)
fs.rename('arquivo.txt', 'novoarquivo.txt', function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Arquivo renomeado!')
})
