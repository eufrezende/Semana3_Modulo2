const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', function (req, res) {
  const user = {
    name: 'Felipe',
    surname: 'Rezende',
  }
  //especifica a chave e o valor para uso no front-end
  res.render('home', { user: user })
})

app.listen(3000)
