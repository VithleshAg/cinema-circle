var mysql = require("mysql");

// var pool = mysql.createPool({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "",
//   database: "cinema_circle",
//   multipleStatements: true
// });

var pool = mysql.createPool({
  host: "68.66.224.58",
  user: "cinemacircle",
  password: "Reactnative@2018",
  database: "saanviin_cinema",
  multipleStatements: true
});

module.exports = pool;
