var express = require("express");
var router = express.Router();
var pool = require("../pool.js");

///////////// REST API   //////////////
router.get("/all_rest_audition", function(req, res) {
  let query = `select * from audition`;
  pool.query(query, function(err, result) {
    //res.send("hello Vithlesh...");
    res.json(result);
  });
});
///////////  REST API  ////////////////

module.exports = router;
