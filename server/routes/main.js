const express = require("express");
const router = express.Router();

// Routes
router.get("/", (req, res) => {
  const locals = {
    title: "NodeJS Blog",
    description: "This is a blog built with NodeJS and ExpressJS",
  };

  res.render("index", { locals });
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/news", (req, res) => {
  res.render("news");
});

module.exports = router;
