const express = require("express");
const path = require("path");

const app = express();

require("dotenv").config();

const PORT = process.env.PORT;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "public/assets/js"));
app.use("/js", express.static(path.join(__dirname, "public/assets/js")));
app.use("/css", express.static(path.join(__dirname, "public/assets/css")));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
