var express = require("express");
const MainService = require("./MainService");
var router = express.Router();

router.get("/", async (req, res, next) => {
  // ejs로 data 전달
  // index.ejs => 공통적인 틀...!
  // page 전달해서, page 변경시키기(ejs에 include사용하면 변경 가능!)
  // 전달할 data
  const result = await MainService.getBookList();
  res.render("index", { page: "pages/main", booklist: result });
});

module.exports = router;
