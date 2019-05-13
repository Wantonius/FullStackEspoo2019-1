const mongoose = require("mongoose");

let Schema = mongoose.Schema({
	username:{type:String,indexed:true},
	ttl:Number,
	token:String
})

module.exports = mongoose.model("Session",Schema);