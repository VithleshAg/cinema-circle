var express = require("express");
var router = express.Router();
var pool = require("../pool.js");

/* GET users listing. */

router.get("/register", function(req, res) {
  res.render("ad_register/register");
});

router.get("/register_spot", function(req, res) {
  res.render("ad_register/register_spot");
});

router.get("/register_audition", function(req, res) {
  res.render("ad_register/register_audition");
});

router.get("/register_event", function(req, res) {
  res.render("ad_register/register_event");
});

router.get("/register_workshop", function(req, res) {
  res.render("ad_register/register_workshop");
});

router.post("/ad_session", function(req, res) {
  req.session.ad_session = req.body;
  console.log(req.body);
  res.render("ad_register/payment");
});

router.get("/payment", function(req, res) {
  res.render("ad_register/payment");
});

router.post("/paydone", function(req, res) {
  req.session.ad_session = {
    ...req.session.ad_session,
    ...req.body
  };
  console.log(req.session.ad_session);
  pool.query(
    `insert into ${req.session.ad_session.ad_type} set ?`,
    req.session.ad_session,
    function(err, result) {
      if (err) throw err;
      console.log(result);
      res.render("ad_register/paydone");
    }
  );
});

module.exports = router;
