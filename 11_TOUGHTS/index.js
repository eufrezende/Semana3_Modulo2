const express = require("express");
const exphbs = require("express-handlebars");
//autenticação mais simples do express
const session = require("express-session");
//salvar sessões em arquivos na pasta session
const FileStore = require("session-file-store")(session);
//flash message
const flash = require("express-flash");

const app = express();

const conn = require("./db/conn");

// Models
const Tought = require("./models/Tought");

// routes
const toughtsRoutes = require("./routes/toughtsRoutes");
const authRoutes = require("./routes/authRoutes");
const ToughController = require("./controllers/ToughtController");

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

//receber resposta do body
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

//session middleware - diz onde o express vai salvar as sessões
app.use(
  session({
    name: 'session',
    secret: 'nosso_secret',
    resave: false,
    saveUninitialized: false,
    store: new FileStore({
      logFn: function () {},
      //caminho para a pasta sessions
      path: require('path').join(require('os').tmpdir(), 'sessions'),
    }),
    //faz a conexão com o usuário
    cookie: {
      secure: false,
      //deixa de ser válido em 1 dia
      maxAge: 3600000,
      //expira em 1 dia
      expires: new Date(Date.now() + 3600000),
      httpOnly: true,
    },
  }),
)

// flash messages - mensagem de status do sistema
app.use(flash());

//public path
app.use(express.static("public"));

// set session to res
app.use((req, res, next) => {
  // console.log(req.session)
  console.log(req.session.userid);

  //verifica se o usuario tem sessao pra salvar no documento
  if (req.session.userid) {
    //pega a requisição e passa na resposta
    res.locals.session = req.session;
  }

  next();
});

app.use("/toughts", toughtsRoutes);
app.use("/", authRoutes);

app.get("/", ToughController.showToughts);

conn
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
