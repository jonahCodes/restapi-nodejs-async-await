var Apartment = require('../models/apartment');
var multer = require('multer'); 
const path = require('path');

// =========== Image Upload Configuration =============
//multer config
const storage = multer.diskStorage({
	destination: './public/uploads/',
	filename: function(req, file, cb){
	  cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
	}
  });
  
  // Init Upload
  const upload = multer({
	storage: storage,
	limits:{fileSize: 1000000},
	fileFilter: function(req, file, cb){
	  checkFileType(file, cb);
	}
  }).single('myimage');
  
  // Check File Type
  function checkFileType(file, cb){
	// Allowed ext
	const filetypes = /jpeg|jpg|png|gif/;
	// Check ext
	const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
	// Check mime
	const mimetype = filetypes.test(file.mimetype);
  
	if(mimetype && extname){
	  return cb(null,true);
	} else {
	  cb('Error: Images Only!');
	}
  }


//========end Image CONFIG=======//


//display list of apartment
exports.apartment_list = async (req,res,next) =>{
	try{
		const users = await Apartment.find({});
			res.status(200).json(users);
	}catch(error){
		next(error);
	}
	
}

//display one apartment details
exports.apartment_details = async (req,res,next) =>{
	try{
		const user = await apartment.findById(req.params.id);
		res.render('apartment',{apartment:user});

	}catch(error){
		next(error);
	}
}
//display apartment create form 
exports.apartment_create_get = (req,res) =>{
	res.render('apartment');
}
//Handle apartment create on post
exports.apartment_create_post = (req,res,next) =>{
	try{
		upload(req,res,(err)=>{
			if(err){
				res.json(err);
			}else{
				if(req.file == undefined){
					res.send('file requested is undefined');
			}else {
				let {title,description,houseamenities,location,image}={
			title:req.body.title,
			description:req.body.description,
			location:req.body.location,
			houseamenities:req.body.houseamenities,
			image:req.file.filename
		}
		let newapt = {title, description,houseamenities,location,image};
		 Apartment.create(newapt,(err,newcreated)=>{
			if(err){
				console.log(err)
			}else{

				res.status(201).json(newcreated);
			}
		});
		
		}
	  }
	});

	}catch(error){
		next(error);
	}
	
}
//display apartment deleted form on GET
exports.apartment_delete_get = (req,res) =>{
	res.send('NOT IMPLEMENTED ');
}
//handle apartment delete on post
exports.apartment_delete_post = (req,res) =>{
	res.send('NOT IMPLEMENTED ');
}
//Display apartment update form on get
exports.apartment_update_get = (req,res) =>{
	res.send('NOT IMPLEMENTED ');
}
//handle apartment update post
exports.apartment_update_post = (req,res) =>{
	res.send('NOT IMPLEMENTED ');
}