const app = require("express");
var router = app.Router();

router.get("/", async (req, res, next) => {
  res.render("index", { page: "pages/login" });
});

module.exports = router;
