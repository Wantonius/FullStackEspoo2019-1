const express = require("express");

let app = express();

let port = process.env.PORT | 3000;

app.use(express.static(__dirname+"/public_www"));

app.listen(port);

console.log("Running in port "+port);
