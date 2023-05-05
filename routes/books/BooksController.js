var express = require("express");
const BooksService = require("./BooksService");
var router = express.Router();
const authCheck = require("../login/authCheck");

router.get("/", async (req, res, next) => {
  const result = await BooksService.getBookList();
  res.render("index", {
    page: "pages/books",
    books: result,
    status: authCheck.isOwner(req, res),
  });
});
// 입고일, 판매량 추가하기
router.get("/:id", async (req, res, next) => {
  // 현재 책 id
  const id = req.params.id;
  const [info] = await BooksService.findById(id);
  res.render("index", {
    page: "pages/bookDetail",
    info: info,
    status: authCheck.isOwner(req, res),
  });
});

module.exports = router;
