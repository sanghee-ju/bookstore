var express = require("express");
const AdminService = require("./AdminService");
var router = express.Router();

router.get("/", async (req, res, next) => {
  res.render("index", { page: "pages/admin" });
});
router.post("/addBook", async (req, res, next) => {
  let param = JSON.parse(JSON.stringify(req.body));
  console.log(param);
});

module.exports = router;
