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
  const items = ["Item a", "Item b", "Item c"];

  res.render("dashboard", { items: items });
});

//renderizando a view post
app.get("/post", function (req, res) {
  //caracteristica das postagens
  const post = {
    title: "Aprender Node.js",
    category: "Node.js",
    body: "Node.js é muito utilizado na programação hoje em dia",
    comments: 4,
  };
  //renderiza a pagina e envia o post ocmo objeto
  res.render("blogpost", { post });
});

app.listen(3000);
