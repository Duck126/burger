var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var burgershb = {
            burgers: data
        };
        //console.log(burgershb);
        res.render("index", burgershb);
    });
});

router.post("/api/burgers", function (req, res) {
    console.log([req.body.name, req.body.eaten]);
    burger.insertOne(["burger_name", "devoured"], [req.body.name, req.body.eaten], function (data) {
    console.log(data);
        
        res.sendStatus(200);
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var thisBurger = "id = " + req.params.id;
    console.log(req.body);
    burger.updateOne(req.body.devoured, req.params.id, function (result) {
        //console.log(result);
        res.sendStatus(200);
    });
});

router.delete("/api/burgers/:id", function (req, res) {
    var thisBurger = "id =" + req.params.id;
    burger.delete(thisBurger, function (result) {
        //console.log(result);
        res.sendStatus(200);
    });
});

module.exports = router;