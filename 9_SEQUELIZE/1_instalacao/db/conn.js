const { Sequelize } = require('sequelize')

//o banco, o usuário e a senha como parâmetros
const sequelize = new Sequelize('nodesequelize', 'root', '', {
  host: 'localhost',
  //qual banco será utilizado
  dialect: 'mysql',
})

try {
  sequelize.authenticate()
  console.log('Conectamos com o Sequelize!')
} catch (error) {
  console.error('Não foi possível conectar:', error)
}

module.exports = sequelize
