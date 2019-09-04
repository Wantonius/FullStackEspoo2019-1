const express = require("express");
const bodyParser = require("body-parser");

let app = express();

app.use(bodyParser.json());

let database = [];
let id = 100;

app.get("/api/shopping",function(req,res) {
	res.status(200).json(database);
})

app.post("/api/shopping", function(req,res) {
	let item = {
		type:req.body.type,
		count:req.body.count,
		price:req.body.price
	} 
	item.id = id;
	id++;
	database.push(item);
	res.status(200).json({message:"success"})
})

app.delete("/api/shopping/:id", function(req,res) {
	let tempid = req.params.id;
	for(let i=0;i<database.length;i++) {
		if(tempid == database[i].id) {
			database.splice(i,1);
			return res.status(200).json({message:"success"})
		}
	}
	res.status(404).json({message:"not found"})
})

app.put("/api/shopping/:id", function(req,res) {
	let tempid = req.params.id;
	let item = {
		id:tempid,
		type:req.body.type,
		count:req.body.count,
		price:req.body.price
	} 
	for(let i=0;i<database.length;i++) {
		if(tempid == database[i].id) {
			database.splice(i,1,item);
			return res.status(200).json({message:"success"})
		}
	}
	res.status(404).json({message:"not found"})	
})

app.listen(3000);
console.log("Running in port 3000");