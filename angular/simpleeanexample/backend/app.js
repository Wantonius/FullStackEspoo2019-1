let express = require('express');
let bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());

//LOGIN DATABASE

let registeredUsers = [];
let loggedUsers = [];

// SHOPPING DATABASE

let database = [];
let id = 100;

//TOKEN CREATION

function createToken() {
	let token = "";
	let letters = "abcdefghijABCDEFGHIJ0123456789"
	for(let i = 0;i<1024;i++) {
		let temp = Math.floor(Math.random()*30);
		token = token + letters[temp];
	}
	return token;
}

//LOGIN API

app.post("/a/register", function(req,res) {
	let user = {
		username:req.body.username,
		password:req.body.password
	}
	for(let i=0; i<registeredUsers.length;i++) {
		if(registeredUsers[i].username === req.body.username) {
			return res.status(409).json({"message":"conflict"});
	}
	}
	registeredUsers.push(user);
	return res.status(200).json({"message":"success"});
});

app.post("/a/login", function(req,res) {
	for(let i=0; i<registeredUsers.length;i++) {
		if(registeredUsers[i].username === req.body.username) {
			if(registeredUsers[i].password === req.body.password) {
				let token = createToken();
				loggedUsers.push({
					username:req.body.username,
					token:token
				})
				return res.status(200).json({"token":token});
			}
		}
	}
	return res.status(403).json({"message":"username or password did not match"});
});

app.post("/a/logout", function(req,res) {
	let token = req.headers.token;
	for(let i=0;i<loggedUsers.length;i++) {
		if(token === loggedUsers[i].token) {
			loggedUsers.splice(i,1);
			return res.status(200).json({"message":"success"})
		}
	}
	return res.status(404).json({"message":"not found"});
})


//LOGIN FILTER

function isUserLogged(req,res,next) {
	let token = req.headers.token;
	for(let i=0;i<loggedUsers.length;i++) {
		if(loggedUsers[i].token === token) {
			return next();
		}
	}
	return res.status(403).json({"message":"forbidden"});
}

app.use("/a/api/",isUserLogged);

//SHOPPING API

app.get("/a/api/shoppinglist",function(req,res) {
	return res.status(200).json(database);
});

app.post("/a/api/shoppinglist", function(req,res) {
	let item = {
		id:id,
		type:req.body.type,
		price:req.body.price,
		count:req.body.count
	}
	database.push(item);
	id++;
	return res.status(200).json({"message":"success"});
});

app.delete("/a/api/shoppinglist/:id",function(req,res) {
	let id = parseInt(req.params.id,10);
	for(let i=0;i<database.length;i++) {
		if(id === database[i].id) {
			database.splice(i,1);
			return res.status(200).json({"message":"success"});
		}
	}
	return res.status(404).json({"message":"not found"});
});

app.listen(3000);
console.log("Running in port 3000");