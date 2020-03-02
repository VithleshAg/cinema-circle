var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cookieSession = require("cookie-session");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/user");
var adshowRouter = require("./routes/ad_show");
var entertainmentRouter = require("./routes/entertainment");
var ad_registerRouter = require("./routes/ad_register");
var spot_offerRouter = require("./routes/spot_offer");
var auditionRouter = require("./routes/audition");
var eventRouter = require("./routes/event");
var workshopRouter = require("./routes/workshop");

var app = express();

//// Session SetUp ///

app.use(
  cookieSession({
    name: "session",
    keys: ["Reactnative@2018", "123"]
  })
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/user", usersRouter);
app.use("/ad_show", adshowRouter);
app.use("/entertainment", entertainmentRouter);
app.use("/ad_register", ad_registerRouter);
app.use("/spot_offer", spot_offerRouter);
app.use("/audition", auditionRouter);
app.use("/event", eventRouter);
app.use("/workshop", workshopRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
