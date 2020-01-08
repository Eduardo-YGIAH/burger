var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  selectAll: function(tableName) {
    var queryString = "SELECT * FROM ??";
    console.log(queryString);
    connection.query(queryString, tableName, function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  insertOne: function(tableName, objCriteria) {
    var queryString = "INSERT INTO ?? SET ?";
    console.log(queryString);
    connection.query(queryString, [tableName, objCriteria], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne: function(tableName, objToUpdate, objCriteria) {
    var queryString = "UPDATE ?? SET ? WHERE ?";
    console.log(queryString);
    connection.query(queryString, [tableName, objToUpdate, objCriteria], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  }
};

module.exports = orm;
