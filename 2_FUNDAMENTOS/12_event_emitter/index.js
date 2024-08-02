const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('start', () => { //definição do evento
  console.log('Durante')
})

console.log('Antes')

eventEmitter.emit('start')

console.log('Depois')
