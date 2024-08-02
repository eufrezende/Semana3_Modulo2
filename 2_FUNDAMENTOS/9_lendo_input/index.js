const readline = require("readline").createInterface({ //importa e executa a função cresteInterface
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Qual a sua linguagem preferida? `, (language) => {
  if(language === 'Python') {
    console.log(`Isso não é linguagem!`);
  }else{
    console.log(`A minha linguagem preferida é: ${language}`);
  }

  readline.close();
});
