const app = require("express");
var router = app.Router();

router.get("/", (req, res, next) => {
  res.render("index", { page: "pages/register" });
});

module.exports = router;
