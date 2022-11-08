let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let DB = require('../config/db');

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title: 'Home', page: 'home'});
}


