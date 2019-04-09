const express = require("express");
const bodyParser = require("body-parser");

let app = express();

let port = process.env.PORT | 3000;

app.use(express.static(__dirname+"/public_www"));
app.use(bodyParser.json());
//DATABASE

const database = [];
let id = 100;

app.get("/api/contact", function(req,res) {
	res.status(200).json(database);
});

app.post("/api/contact", function(req,res) {
	let contact = {
		"firstname":req.body.firstname,
		"lastname":req.body.lastname,
		"email":req.body.email,
		"address:":req.body.address,
		"phone":req.body.phone,
		"id":id
	}
	id++;
	database.push(contact);
	res.status(200).json({"message":"success"});
});

app.delete("/api/contact/:id", function(req,res) {
	let tempId = parseInt(req.params.id,10);
	for (let i = 0;i < database.length; i++) {
		if(tempId === database[i].id) {
			database.splice(i,1);
			return res.status(200).json({"message":"success"});
		}
	}
	return res.status(404).json({"message":"not found"});
});

app.listen(port);

console.log("Running in port "+port);
