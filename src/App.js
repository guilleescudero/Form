const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();

let urlencodedParser = bodyParser.urlencoded({ extended: false });

app.listen(3030, () => console.log('Listening port 3030'));

let arrayDeContactos = [];

app.get("/contacto", (req, res) =>{
var contacto = fs.readFileSync(__dirname + "../templates/contacto.html", "utf8");
red.end(contacto);
})

app.post("/contacto", urlencodedParser, (req, res) => {
  console.log("vino por post");
  console.log(req.body);
  arrayDeContactos.push(req.body);
  console.log(arrayDeContactos);
  red.send(arrayDeContactos);
});

// siempre al final del routing

app.use((req, res, next) =>{
  let notFound404 = fs.readFileSync(__dirname + "/../templates/404.html");
  res.status(404).end(notFound404)


})

app.use('/assets/', express.static(__dirname + '/../public/'));
