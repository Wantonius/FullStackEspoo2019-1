let express = require("express");
let bodyParser = require("body-parser");

let app = express();

app.use(bodyParser.json());

let database = [];
let id = 100;

app.get("/api/shopping", function(req,res) {
	res.status(200).json(database);
});

app.post("/api/shopping", function(req,res) {
	let item = {
		id:id,
		type:req.body.type,
		count:req.body.count,
		price:req.body.price
	}
	database.push(item);
	id++;
	res.status(200).json({"message":"success"});
});


app.delete("/api/shopping/:id", function(req,res){
	console.log(req.params.id);
	for(let i=0;i<database.length;i++) {
		if(database[i].id == req.params.id) {
			database.splice(i,1);
			return res.status(200).json({"message":"success"});
		}
	}
	return res.status(404).json({"message":"not found"});
})
app.listen(3001);
console.log("Running in port 3001");