const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

//define o handeblars e executa a função importada
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars') //


app.get('/', function (req, res) {
  //renderiza a view home
  res.render('home', { layout: false })
})

app.listen(3000)
