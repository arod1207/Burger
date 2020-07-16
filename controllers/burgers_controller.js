var express = require('express');

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", (req, res) => {
    burger.selectAll(function (data) {
        var burgerObject = {
            burgers: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });
});

router.post("/", (req, res) => {

    if (req.body.burger_name === ''){
      console.log('not valid')
    } else {
      burger.insertOne(req.body.burger_name, function () {
        res.redirect("/");
    });
    }
});

router.post("/:id", (req, res) => {
    var id = req.params.id;

    console.log("id", id);

    burger.updateOne(id, function () {
        res.redirect("/");
    });
});

module.exports = router;