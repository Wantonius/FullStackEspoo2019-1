const express = require('express');
const bodyParser = require('body-parser');
const contactRouter = require('./routes/contactrouter');

let app = express();
let port = process.env.PORT || 3001;

app.use(bodyParser.json());

// USER MANAGEMENT

const registeredUsers = [];
const loggedSessions = [];
const time_to_live_diff = 3600000;
/*
SESSION DATA

let session = {
	"username": username of the session holder,
	"ttl":time-to-live until session is finished,
	"token": user token for authentication purposes
}

*/
isUserLogged = (req,res,next) => {
	let token = req.headers.token;
	if(!token) {
		return res.status(403).json({"message":"forbidden"});
	}
	for(let i=0;i<loggedSessions.length;i++) {
		if(token === loggedSessions[i].token) {
			let dateNow = new Date().getTime();
			if(dateNow > loggedSessions[i].ttl) {
				loggedSessions.splice(i,1);
				return res.status(403).json({"message":"forbidden"});
			}
			loggedSessions[i].ttl = dateNow+time_to_live_diff;
			req.session = {};
			req.session.username = loggedSessions[i].username;
			return next();
		}
	}
	return res.status(403).json({"message":"forbidden"});
}


createToken = () => {
	let letters = "abcdefghijklmopqrstuABCDEFGHIJKLMNOPQRSTU0123456789"
	let token = "";
	for(let i=0;i<1024;i++) {
		let temp = Math.floor(Math.random()*letters.length);
		token = token + letters[temp]
	}
	return token;
}

app.post("/register", function(req,res) {
	if(!req.body.username || !req.body.password) {
		return res.status(422).json({"message":"please provide proper information"});
	}
	if(req.body.username.length < 4 || req.body.password.length < 8) {
		return res.status(422).json({"message":"please provide proper information"});		
	}
	for(let i=0;i<registeredUsers.length;i++) {
		if(req.body.username === registeredUsers[i].username) {
			return res.status(422).json({"message":"please provide proper information"})
		}
	}
	let user = {
		"username":req.body.username,
		"password":req.body.password
	}
	registeredUsers.push(user);
	console.log(registeredUsers);
	return res.status(200).json({"message":"success"});
});

app.post("/login",function(req,res) {
	if(!req.body.username || !req.body.password) {
		return res.status(422).json({"message":"please provide proper information"});
	}
	if(req.body.username.length < 4 || req.body.password.length < 8) {
		return res.status(422).json({"message":"please provide proper information"});		
	}	
	for(let i=0;i<registeredUsers.length;i++) {
		if(req.body.username === registeredUsers[i].username) {
			if(req.body.password === registeredUsers[i].password) {
				let token = createToken();
				let ttl = new Date().getTime()+time_to_live_diff;
				let session = {
					"username":req.body.username,
					"ttl":ttl,
					"token":token
				}
				loggedSessions.push(session);
				console.log(loggedSessions);
				return res.status(200).json({"token":token})
			}
		}
	}
	return res.status(403).json({"message":"login failed"});	
});

app.use('/api',isUserLogged,contactRouter);

app.listen(port);

console.log("Running in port "+port);

