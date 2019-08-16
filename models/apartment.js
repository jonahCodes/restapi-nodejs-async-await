const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ApartmentSchema = new Schema({
	title:{type:String,required:true,max:1000},
	description:{type:String,required:true,max:1000},
	houseamenities:{type:String,max:1000},
	location:{type:String,required:true,max:1000},
	image:{type:String,required:false}

});

var Apartment = mongoose.model('Apartment',ApartmentSchema);
module.exports = Apartment;
