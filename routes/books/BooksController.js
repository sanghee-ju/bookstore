var express = require("express");
const BooksService = require("./BooksService");
var router = express.Router();

router.get("/", async (req, res, next) => {
  const result = await BooksService.getBookList();
  res.render("index", { page: "pages/books" });
});

module.exports = router;
