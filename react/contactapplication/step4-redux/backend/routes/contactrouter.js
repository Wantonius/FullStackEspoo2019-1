const express = require('express');
const mongoose = require('mongoose');
const contactModel = require('../models/contact');

let router = express.Router();


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
	let username = req.session.username;
	let list = [];
	contactModel.find({"user":username}, function(err,items,count) {
		if(err) {
			return res.status(409).json({"data":list})
		}
		if(!items) {
			return res.status(409).json({"data":list})
		}
		return res.status(200).json({"data":items});
	});
});

router.post("/contact", function(req,res) {
	if(!req.body.name || !req.body.surname) {
		return res.status(422).json({"message":"provide required data"})
	}
	if(req.body.name.length === 0 || req.body.surname.length === 0) {
		return res.status(422).json({"message":"provide required data"})
	}
	let contact = new contactModel({
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
	})
	contact.save(function(err) {
		if(err) {
			return res.status(409).json({"message":"try again later"});
		} 
		return res.status(200).json({"message":"success"});
	});
})

router.delete("/contact/:id", function(req,res) {
	contactModel.findById(req.params.id, function(err,item) {
		if(err) {
			return res.status(409).json({"message":err});
		}
		if(!item) {
			return res.status(404).json({"message":"not found"});
		}
		if(req.session.username === item.user) {
			contactModel.deleteOne({"_id":req.params.id}, function(err) {
				if(err) {
					return res.status(409).json({"message":err});
				}
				return res.status(200).json({"message":"success"});
			});
		} else {
			return res.status(403).json({"message":"not allowed"});
		}
	})
});

router.put("/contact/:id", function(req,res) {
	contactModel.findById(req.params.id, function(err,item) {
		if(err) {
			return res.status(409).json({"message":err});
		}
		if(!item) {
			return res.status(404).json({"message":"not found"});
		}
		if(req.session.username === item.user) {
			item.name=req.body.name;
			item.surname=req.body.surname;
			item.title=req.body.title;
			item.nickname= req.body.nickname;
			item.phone= req.body.phone;
			item.mobile= req.body.mobile;
			item.email= req.body.email;
			item.street=req.body.street;
			item.postcode= req.body.postcode;
			item.city = req.body.city;
			item.country= req.body.country;
			item.save(function(err) {
			if(err) {
				return res.status(409).json({"message":err});
			}
			return res.status(200).json({"message":"success"});
			});
		} else {
			return res.status(403).json({"message":"not allowed"});
		}
	});

});

module.exports = router;