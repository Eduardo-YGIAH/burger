const connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
const orm = {
  selectAll: function(tableName, cb) {
    const queryString = "SELECT * FROM ??";
    console.log(queryString);
    connection.query(queryString, tableName, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function(tableName, objCriteria, cb) {
    const queryString = "INSERT INTO ?? SET ?";
    console.log(queryString);
    connection.query(queryString, [tableName, objCriteria], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function(tableName, objToUpdate, objCriteria, cb) {
    const queryString = "UPDATE ?? SET ? WHERE ?";
    console.log(queryString);
    connection.query(queryString, [tableName, objToUpdate, objCriteria], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;
