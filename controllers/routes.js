// Dependencies 
var express = require("express");
var router = express.Router();
var burger = require("../models/burgers");

router.get("/", function(req,res){
	res.render("index");
   });

module.exports = router;