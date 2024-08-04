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

  res.render("home", { user: user, auth: true });
});

app.get("/dashboard", function (req, res) {
  //lista de itens
  const items = ["Item a", "Item b", "Item c"];

  res.render("dashboard", { items: items });
});

app.listen(3000);
