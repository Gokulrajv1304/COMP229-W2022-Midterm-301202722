/* File Name: COMP229-W2022-Midterm-301202722
Student Name: Gokulraj Venugopal
Student ID: 301202722
Date: 05-March-2022 
*/

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
