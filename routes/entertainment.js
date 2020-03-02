var express = require("express");
var router = express.Router();
var pool = require("../pool.js");

/* GET users listing. */

router.get("/trending", function(req, res) {
  res.render("entertainment/trending");
});

router.get("/trailer", function(req, res) {
  res.render("entertainment/trailer");
});

router.get("/movie", function(req, res) {
  res.render("entertainment/movie");
});

router.get("/news", function(req, res) {
  res.render("entertainment/news");
});

module.exports = router;
