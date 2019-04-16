const mongoose = require("mongoose");

let Schema = mongoose.Schema({
	name: String,
	surname: String,
	title: String,
	nickname: String,
	phone: [String], 
	mobile: [String],
	email: [String],
	street: String,
	postcode: String, 
	city: String, 
	country: String, 
	user: String
})

module.exports = mongoose.model("Contact",Schema);