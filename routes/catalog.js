var express = require('express');
var router = express.Router();
var apartment_controller = require('../controller/apartmentController');


// apartment ROUTES ////


//GET request form create apartment
router.get('/apartment/create', apartment_controller.apartment_create_get);

//POST FORM create apartment
router.post('/apartment/create',apartment_controller.apartment_create_post);

//GET form to delete apartment
router.get('/apartment/:id/delete',apartment_controller.apartment_delete_get);

//POST form to delete apartment
router.post('/apartment/:id/delete',apartment_controller.apartment_delete_post);

//GET form to update apartment
router.get('/apartment/:id/update',apartment_controller.apartment_update_get);

//POST form to update apartment
router.post('/apartment/:id/update',apartment_controller.apartment_update_post);

//GET for one apartment
router.get('/apartment/:id',apartment_controller.apartment_details);

//GET for all apartment
router.get('/apartment',apartment_controller.apartment_list);

module.exports = router;
