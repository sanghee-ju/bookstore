var express = require("express");
const AdminService = require("./AdminService");
var router = express.Router();
const authCheck = require("../login/authCheck");

router.get("/", async (req, res, next) => {
  const booklist = await AdminService.getBookList();
  res.render("index", {
    page: "pages/admin",
    books: booklist,
    status: authCheck.isOwner(req, res),
  });
});

router.get("/addBook", (req, res) => {
  res.render("index");
});
router.post("/addBook", async (req, res, next) => {
  let param = JSON.parse(JSON.stringify(req.body));
  let { title, id, author, qty, price, desc, img } = param;
  // AdminService.addBooklist(
  //   param.title,
  //   param.author,
  //   param.qty,
  //   param.price,
  //   param.desc,
  //   param.img
  // );
  await AdminService.addBooklist(title, id, author, qty, price, desc, img);
  res.redirect("/admin");
});

module.exports = router;
