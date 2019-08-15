var Author = require('../models/author');
//display list of author
exports.author_list = async (req,res,next) =>{
	try{
		const users = await Author.find({});
			res.status(200).json(users);
	}catch(error){
		next(error);
	}
	
}
//display one author details
exports.author_details = async(req,res,next) =>{
	try{
		const user = await Author.findById(req.params.id);
		res.render('author',{author:user});

	}catch(error){
		next(error);
	}
}
//display author create form 
exports.author_create_get = (req,res) =>{
	res.render('create an Author');
}
//Handle author create on post
exports.author_create_post = (req,res,next) =>{
	try{

		let {firstname, lastname}={
			firstname:req.body.firstname,
			lastname:req.body.lastname

		}
		let newuser = {firstname,lastname};
		 Author.create(newuser,(err,newcreated)=>{
			if(err){console.log(err)}else{res.status(201).json(newcreated);}
		});
		


	}catch(error){
		next(error);
	}
	
}
//display author deleted form on GET
exports.author_delete_get = (req,res) =>{
	res.send('NOT IMPLEMENTED ');
}
//handle author delete on post
exports.author_delete_post = (req,res) =>{
	res.send('NOT IMPLEMENTED ');
}
//Display author update form on get
exports.author_update_get = (req,res) =>{
	res.send('NOT IMPLEMENTED ');
}
//handle author update post
exports.author_update_post = (req,res) =>{
	res.send('NOT IMPLEMENTED ');
}