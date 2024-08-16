const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

const conn = require("./db/conn").run;

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

//pra ler oq vem no corpo da requisição
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
