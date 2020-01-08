// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
  selectAll: function(cb) {
    orm.selectAll("burger", function(res) {
      cb(res);
    });
  },

  insertOne: function(objCriteria, cb) {
    orm.insertOne("burger", objCriteria, function(res) {
      cb(res);
    });
  },
  updateOne: function(objToUpdate, condition, cb) {
    orm.updateOne("burger", objToUpdate, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
