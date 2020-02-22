var express = require("express");
var router = express.Router();
var pool = require("../pool.js");

/* GET users listing. */
router.get("/login", function(req, res) {
  res.render("user/login");
});

router.get("/signup", function(req, res) {
  res.render("user/signup");
});

router.post("/submit", function(req, res) {
  pool.query(`insert into user(email) value("${req.body.email}")`, function(
    err,
    result
  ) {
    console.log(result);
    if (err) throw err;
    console.log(result);
    res.render("user/signupsuccess");
  });
});

module.exports = router;
