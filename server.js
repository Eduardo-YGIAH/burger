const express = require("express");
var orm = require("./config/orm.js");

const app = express();

require("dotenv").config();

const PORT = process.env.PORT;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

orm.selectAll("burger");

// Static directory to be served
//app.use(express.static("app/public"));

// Routes
// =============================================================
//require("./app/routes/api-routes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
