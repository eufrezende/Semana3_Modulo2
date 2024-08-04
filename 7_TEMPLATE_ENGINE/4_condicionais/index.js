const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/", function (req, res) {
  const user = {
    name: "Felipe",
    surname: "Rezende",
  };
  //adiciona a validação do usuário da resposta
  res.render("home", { user: user, auth: true });
});

//criando a view de dashboard
app.get("/dashboard", function (req, res) {
  //renderiza a view de dashboard
  res.render("dashboard");
});

app.listen(3000);
