var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var burgershb = {
            burgers: data
        };
        res.render("index", burgershb);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.name, req.body.eaten], function (data) {
        res.sendStatus(200);
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var thisBurger = "id = " + req.params.id;
    burger.updateOne(req.body.devoured, req.params.id, function (result) {
        res.sendStatus(200);
    });
});

router.delete("/api/burgers/:id", function (req, res) {
    var thisBurger = "id =" + req.params.id;
    burger.delete(thisBurger, function (result) {
        res.sendStatus(200);
    });
});

module.exports = router;