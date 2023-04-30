var express = require("express");
const BooksService = require("./BooksService");
var router = express.Router();

router.get("/", async (req, res, next) => {
  const result = await BooksService.getBookList();
  res.render("index", { page: "pages/books", books: result });
});

router.get("/:id", async (req, res, next) => {
  // 현재 책 id
  const id = parseInt(req.params.id);
  const [info] = await BooksService.findById(id);
  res.render("index", { page: "pages/bookDetail", info: info });
});

module.exports = router;
