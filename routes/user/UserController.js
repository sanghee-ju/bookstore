var express = require("express");
const UserService = require("./UserService");
var router = express.Router();
const authCheck = require("../login/authCheck");

router.get("/", async (req, res, next) => {
  res.render("index", {
    page: "pages/user",
    status: authCheck.isOwner(req, res),
  });
});

module.exports = router;
