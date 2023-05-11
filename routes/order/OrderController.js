var express = require("express");
var router = express.Router();
const authCheck = require("../login/authCheck");
const BookService = require("../books/BooksService");

router.get("/", async (req, res, next) => {
  res.render("index", {
    page: "pages/order",
    status: authCheck.isOwner(req, res),
  });
});

router.get("/:book_id", async (req, res) => {
  const id = req.params.book_id;
  const [bookInfo] = await BookService.findReqInfoById(id);
  const { title, author, price, img } = bookInfo;
  res.redirect("/");
});

module.exports = router;
