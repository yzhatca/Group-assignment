let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let surveyController = require('../controllers/survey');

/* GET Route for the Survey List page - Read Operation */
router.get('/', surveyController.displaySurveyList);

/* GET Route for displaying Add page - Create Operation */
router.get('/add', surveyController.displayAddPage);

/* POST Route for processing Add page - Create Operation */
router.post('/add', surveyController.processAddPage);

/* GET Route for displaying Edit page - Update Operation */
router.get('/edit/:id', surveyController.displayEditPage);

/* POST Route for processing Edit page - Update Operation */
router.post('/edit/:id', surveyController.processEditPage);

/* GET to perform Deletion - Delete Operation */
router.get('/delete/:id', surveyController.performDelete);

module.exports = router;