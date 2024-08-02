//Order c -> a -> b
function a() {
  console.log('Executando a()')
}

function b() {
  console.log('Executando b()')
}

function c() { //c executa "a" e "b"
  console.log('Executando c()')
  a()
  b()
}

c() //chama c e depois roda os demais pela definição da função.
