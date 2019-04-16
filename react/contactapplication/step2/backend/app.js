const express = require('express');
const bodyParser = require('body-parser');
const contactRouter = require('./routes/contactrouter');
const mongoose = require('mongoose');
const userModel = require('./models/user');
const sessionModel = require('./models/session');

let app = express();
let port = process.env.PORT || 3001;

mongoose.connect("mongodb://localhost/contactapplicationdb").then(
	() => {console.log("Connection to mongodb successful");},
	(error) => {console.log("Error connecting to mongodb:"+error);}
);

app.use(bodyParser.json());

// USER MANAGEMENT

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
	sessionModel.findOne({"token":token}, function(err,session) {
		if(err) {
			return res.status(403).json({"message":"forbidden"});
		}
		if(!session) {
			return res.status(403).json({"message":"forbidden"});
		}
		let now = new Date().getTime();
		if(now > session.ttl) {
			sessionModel.deleteOne({"_id":session._id}, function(err) {
				return res.status(403).json({"message":"forbidden"});
			})
		} else {
			req.session = {};
			req.session.username = session.username;
			session.ttl = now+time_to_live_diff;
			session.save(function(err,item) {
				return next();
			})
		}
	})
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
	let user = new userModel({
		"username":req.body.username,
		"password":req.body.password
	})
	user.save(function(err,item) {
		if(err) {
			console.log("Register failed reason:"+err);
			return res.status(422).json({"message":"please provide proper information"});				
		} else {
			console.log("Register success:"+item.username);
			return res.status(200).json({"message":"success"});
		}		
	});
});

app.post("/login",function(req,res) {
	if(!req.body.username || !req.body.password) {
		return res.status(422).json({"message":"please provide proper information"});
	}
	if(req.body.username.length < 4 || req.body.password.length < 8) {
		return res.status(422).json({"message":"please provide proper information"});		
	}	
	userModel.findOne({"username":req.body.username}, function(err,user){
			if(err) {
				return res.status(422).json({"message":"please provide proper information"});	
			}
			if(!user) {
				return res.status(422).json({"message":"please provide proper information"});					
			}
			if(user.password === req.body.password) {
				let token = createToken();
				let ttl = new Date().getTime()+time_to_live_diff;
				let session = new sessionModel({
					"username":user.username,
					"ttl":ttl,
					"token":token
				})
				session.save(function(err,item) {
					if(err) {
						return res.status(403).json({"message":"login failed"});							
					} else {
						return res.status(200).json({"token":token});
					}
				})
			} else {
					return res.status(403).json({"message":"login failed"});				
			}
	});
});

app.use('/api',isUserLogged,contactRouter);

app.listen(port);

console.log("Running in port "+port);

