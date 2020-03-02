var express = require("express");
var router = express.Router();
var multer = require("multer");
var upload = multer({ dest: "public/images/" });
var pool = require("../pool.js");
var flash = require("connect-flash");
var session = require("express-session");

router.use(session({ secret: "123" }));
router.use(flash());
/* GET users listing. */

router.get("/signup", function(req, res) {
  res.render("user/signup");
});

router.post("/submit", function(req, res) {
  console.log(req.body);
  pool.query("insert into user set ?", req.body, function(err, result) {
    if (err) {
      if (err.errno == 1062) {
        // req.flash("message", "This entry already exist."); //we send the flash msg
        return res.redirect("/user/signup");
      } else {
        res.end("something ewent wrong....");
      }
    }
    console.log(result);
    res.render("user/signupsuccess");
  });
});

router.get("/login", function(req, res) {
  res.render("user/login", { message: "" });
});

router.post("/checkLogin", function(req, res) {
  let { user_name, password } = req.body;
  let query = `select * from user where user_name = '${user_name}' and password = '${password}'`;
  pool.query(query, function(err, result) {
    if (err) throw err;
    console.log(result);
    if (result.length == 0) {
      res.render("user/login", { message: "Invalid Credientials...." });
    } else {
      // req.session.user = result[0];
      res.redirect("/ad_show/audition");
    }
  });
});

router.get("/user_profile", function(req, res) {
  res.render("user/user_profile");
});

router.post(
  "/profile_submit",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "portfolio", maxCount: 1 }
  ]),
  function(req, res) {
    console.log(req.body);
    let image = req.files["image"][0].filename;
    let portfolio = req.files["portfolio"][0].filename;
    let {
      name,
      email,
      phone,
      gender,
      age,
      place,
      state,
      language,
      years
    } = req.body;
    let query = `insert into user_profile(name,email,phone,gender,age,place,state,language,years,image,portfolio) values('${name}','${email}','${phone}','${gender}','${age}','${place}','${state}','${language}','${years}','${image}','${portfolio}')`;
    pool.query(query, function(err, result) {
      if (err) throw err;
      console.log(result);
      res.render("user/user_profile_save");
    });
  }
);

router.get("/notification", function(req, res) {
  res.render("user/notification");
});

router.get("/action", function(req, res) {
  res.render("user/action");
});

///////////// REST API   //////////////
router.get("/all_rest", function(req, res) {
  let query = `select * from user`;
  pool.query(query, function(err, result) {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
});
///////////// REST API   //////////////

module.exports = router;

// router.all("*", function(req, res, next) {
//   if (req.session.user === undefined) {
//     res.redirect("/user/login");
//   } else {
//     next();
//   }
// });

router.get("/logout", function(req, res) {
  // console.log("heyyyyyyyyyyyyyy");
  // if (!(req.session.user === undefined)) {
  //   req.session.user = undefined;
  //   res.redirect("/user/login");
  // } else {
  res.render("user/login", { message: "" });
});
