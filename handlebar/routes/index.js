var express = require('express');
var router = express.Router();


var persons = require("../Model/Model");
persons.addTestData();


router.get('/', function(req, res, next){

    res.render('index', {persons: persons.getAll});
});


router.post('/', function(req, res, next){

    var name = req.body.name;
    persons.addPerson(name);
    res.redirect("/");
});

module.exports = router;
