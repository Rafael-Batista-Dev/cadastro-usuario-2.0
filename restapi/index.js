const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");

let app = express();
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(expressValidator());

// O modulo consign incluido todas as rotas em app
consign()
  .include("routes")
  .include("utils")
  .into(app);

app.listen(4000, () => {
  console.log("Server Online");
});
