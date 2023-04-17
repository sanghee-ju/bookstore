var express = require("express");
const UserService = require("./UserService");
var router = express.Router();

router.get("/", async (req, res, next) => {
  res.render("index", { page: "pages/user" });
});

module.exports = router;
