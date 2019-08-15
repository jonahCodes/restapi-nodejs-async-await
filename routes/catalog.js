var express = require('express');
var router = express.Router();

var author_controller = require('../controller/authorController');

// AUTHOR ROUTES ////


//GET request form create author
router.get('/author/create', author_controller.author_create_get);

//POST FORM create author
router.post('/author/create',author_controller.author_create_post);

//GET form to delete Author
router.get('/author/:id/delete',author_controller.author_delete_get);

//POST form to delete Author
router.post('/author/:id/delete',author_controller.author_delete_post);

//GET form to update Author
router.get('/author/:id/update',author_controller.author_update_get);

//POST form to update Author
router.post('/author/:id/update',author_controller.author_update_post);

//GET for one author
router.get('/author/:id',author_controller.author_details);

//GET for all author
router.get('/author',author_controller.author_list);

module.exports = router;
