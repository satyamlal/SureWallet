const express = require("express");
const router = express.Router();

router.get("/signup", (req, res) => {
  res.send("This is sign in Page!");
});

router.get("/signin", (req, req) => {
  res.send("This is the sign in page!");
});

module.exports = router;
