/* File Name: COMP229-W2022-Midterm-301202722
Student Name: Gokulraj Venugopal
Student ID: 301202722
Date: 05-March-2022 
*/

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
