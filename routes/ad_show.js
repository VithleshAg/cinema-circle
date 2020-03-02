var express = require("express");
var router = express.Router();
var pool = require("../pool.js");

/* GET users listing. */

router.get("/audition", function(req, res) {
  res.render("ad_show/audition");
});

router.get("/event", function(req, res) {
  res.render("ad_show/event");
});

router.get("/spot_offer", function(req, res) {
  res.render("ad_show/spot_offer");
});

router.get("/workshop", function(req, res) {
  res.render("ad_show/workshop");
});

router.get("/sendprofile", function(req, res) {
  res.render("ad_show/sendprofile");
});

module.exports = router;
