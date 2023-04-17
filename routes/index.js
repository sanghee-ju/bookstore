// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;

const main = require("./main");
const books = require("./books");
const user = require("./user");
const admin = require("./admin");

module.exports = [main, books, user, admin];
