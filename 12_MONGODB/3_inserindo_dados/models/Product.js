const conn = require('../db/conn')

class Product {
  //cria o objeto
  constructor(name, price, description) {
    //instancia as propriedades a um objeto
    this.name = name
    this.price = price
    this.description = description
  }

    //objeto save
  save() {
    //invoca o banco de dados que informa em qual collecton irá inserir
    const product = conn.db().collection('products').insertOne({
      name: this.name,
      price: this.price,
      description: this.description,
    })

    return product
  }
}

module.exports = Product
