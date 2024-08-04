const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(express.static("public"));

const produtos = [
  {
    id: "0",
    titulo: "Dom Quixote",
    autor: "Miguel de Cervantes",
    descricao: "É um romance escrito por Miguel de Cervantes, publicado pela primeira vez em duas partes, em 1605 e 1615. A obra narra as aventuras de Alonso Quijano, um fidalgo espanhol que, após ler muitos romances de cavalaria, decide se tornar cavaleiro andante sob o nome de Dom Quixote.",
  },
  {
    id: "1",
    titulo: "1984",
    autor: "George Orwell",
    descricao: "É um romance distópico escrito por George Orwell, publicado em 1949. A trama se passa em um futuro totalitário, no qual o Estado controla todos os aspectos da vida dos cidadãos, monitorando-os constantemente através do 'Grande Irmão'.",
  },
  {
    id: "2",
    titulo: "Orgulho e Preconceito",
    autor: "Jane Austen",
    descricao: "É um romance escrito por Jane Austen, publicado pela primeira vez em 1813. A história é centrada na vida da protagonista Elizabeth Bennet e suas quatro irmãs, enquanto navegam pelas expectativas sociais e econômicas do início do século XIX na Inglaterra.",
  },
];

app.get("/", function (req, res) {
  res.render("home", { produtos });
});

app.get("/products/:id", function (req, res) {
  const produto = produtos[req.params.id];

  res.render("products", { produto });
});

app.listen(3000);
