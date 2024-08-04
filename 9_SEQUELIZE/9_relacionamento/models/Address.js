const { DataTypes } = require('sequelize')

const db = require('../db/conn')

//o models que fará relação com esse
const User = require('./User')

const Address = db.define('Address', {
  street: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  number: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
  },
})

//definição do relacionamento
Address.belongsTo(User)

module.exports = Address
