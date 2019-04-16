const express = require('express');

let router = express.Router();

//contact database

let database = [];
let id = 100;

/*
Data structure:
let contact = {
	name: String,first name of the contact, required
	surname: String, last name of the contact, required
	title: String, title of contact
	nickname: String, nickname
	phone: List, possible phone numbers
	mobile: List, possible mobile phone numbers
	email: List, possible email addresses
	street: String, street address,
	postcode: String, post code of the address
	city: String, city
	country: String, country,
	id: database id,
	user: user owner of the contact info. Used for searches
}
*/	

router.get("/contact", function(req,res) {
	let tempList = [];
	for(let i = 0;i<database.length;i++) {
		if(req.session.username === database[i].user) {
			tempList.push(database[i]);
		}
	}
	return res.status(200).json(tempList);
});

router.post("/contact", function(req,res) {
	if(!req.body.name || !req.body.surname) {
		return res.status(422).json({"message":"provide required data"})
	}
	if(req.body.name.length === 0 || req.body.surname.length === 0) {
		return res.status(422).json({"message":"provide required data"})
	}
	let contact = {
		id:id++,
		user:req.session.username,
		name:req.body.name,
		surname:req.body.surname,
		title: req.body.title,
		nickname: req.body.nickname,
		phone: req.body.phone,
		mobile: req.body.mobile,
		email: req.body.email,
		street:req.body.street,
		postcode: req.body.postcode,
		city: req.body.city,
		country: req.body.country
	}
	database.push(contact);
	return res.status(200).json({"message":"success"});
})

router.delete("/contact/:id", function(req,res) {
	let id = parseInt(req.params.id,10);
	for(let i=0;i<database.length;i++) {
		if(database[i].id === id) {
			if(req.session.username === database[i].user) {
				database.splice(i,1)
				return res.status(200).json({"message":"success"});
			} else {
				return res.status(403).json({"message":"forbidden"});
			}
		}
	}
	return res.status(404).json({"message":"not found"});
});

router.put("/contact/:id", function(req,res) {
	let id = parseInt(req.params.id,10);
	let contact = {
		id:id,
		user:req.session.username,
		name:req.body.name,
		surname:req.body.surname,
		title: req.body.title,
		nickname: req.body.nickname,
		phone: req.body.phone,
		mobile: req.body.mobile,
		email: req.body.email,
		street:req.body.street,
		postcode: req.body.postcode,
		city: req.body.city,
		country: req.body.country
	}	
	for(let i=0;i<database.length;i++) {
		if(database[i].id === id) {
			if(req.session.username === database[i].user) {
				database.splice(i,1,contact);
				return res.status(200).json({"message":"success"});
			} else {
				return res.status(403).json({"message":"forbidden"});
			}
		}
	}
	return res.status(404).json({"message":"not found"});
});

module.exports = router;