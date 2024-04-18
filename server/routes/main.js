const express = require("express");
const router = express.Router();

// Routes
router.get("/", (req, res) => {
  res.render("index");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/news", (req, res) => {
  res.render("news");
});

module.exports = router;
