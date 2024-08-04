const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

//invoca o hbs e cria o objeto de verificação do partials
const hbs = exphbs.create({
  partialsDir: ["views/partials/"],
});

//altera a forma como passa a variável, pois ela passa a ser executada
//na declaração da variável hbs (declarada acima)
app.engine("handlebars", hbs.engine());
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

app.get("/post", function (req, res) {
  const post = {
    title: "Aprender Node.js",
    category: "Node.js",
    body: "Node.js é muito utilizado na programação hoje em dia",
    comments: 4,
  };

  res.render("blogpost", { post });
});

//aplicando o partials
app.get("/blog", function (req, res) {
  const posts = [
    {
      title: "Aprender Node.js",
      category: "Node.js",
      body: "Node.js é muito utilizado na programação hoje em dia",
      comments: 4,
    },
    {
      title: "PHP ainda vale a pena?",
      category: "PHP",
      body: "",
      comments: 12,
    },
    {
      title: "Os segredos de JavaScript",
      category: "JavaScript",
      body: "",
      comments: 5,
    },
  ];

  res.render("blog", { posts });
});

app.listen(3000);
