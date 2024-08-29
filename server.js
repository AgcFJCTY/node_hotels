const express = require("express");
const db = require("./db");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Welcome to my hotel! How may i help you");
});

// Import menu router files
const menuRoutes = require("./routes/menuItemRoutes");
app.use("/menu", menuRoutes);

// Import the router files
const personRoutes = require("./routes/personRoutes");
app.use("/person", personRoutes);

app.listen(3000, () => {
  console.log("server is listening on 3000");
});
