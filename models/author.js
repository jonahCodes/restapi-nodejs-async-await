const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AuthorSchema = new Schema({
	firstname:{type:String,required:true,max:100},
	lastname:{type:String,required:false,max:100}
});

// // Virtual for author's full name
// AuthorSchema
// .virtual('name')
// .get(function () {
//   return this.family_name + ', ' + this.first_name;
// });

// // Virtual for author's URL
// AuthorSchema
// .virtual('url')
// .get(function () {
//   return '/catalog/author/' + this._id;
// });
var Author = mongoose.model('Author',AuthorSchema);
module.exports = Author;
