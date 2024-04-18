require("dotenv").config();

const express = require("express");
const expressLayout = require("express-ejs-layouts");

const app = express();
const PORT = process.env.PORT || 3000;

//Static Files
app.use(express.static("public"));

//Template Engine
app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

const mainRoutes = require("./server/routes/main");
app.use("/", mainRoutes); // Mount main routes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
