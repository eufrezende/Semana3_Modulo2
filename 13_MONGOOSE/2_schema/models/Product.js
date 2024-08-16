const mongoose = require('mongoose')
const { Schema } = mongoose

//cria a classe
const Product = mongoose.model(
  //o nome do schema
  'Product',
  //instancia o novo objeto schema
  //a estrutura do model
  new Schema({
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  }),
)

module.exports = Product
