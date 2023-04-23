var express = require("express");
const AdminService = require("./AdminService");
var router = express.Router();

router.get("/", async (req, res, next) => {
  const booklist = await AdminService.getBookList();
  res.render("index", { page: "pages/admin", books: booklist });
});

router.get("/addBook", (req, res) => {
  res.render("index");
});
router.post("/addBook", async (req, res, next) => {
  let param = JSON.parse(JSON.stringify(req.body));
  /*
param = {
  title: 'teste',
  qty: '121',
  price: '323',
  desc: '12dfdf3d',
  img: 'testteststetset'
}
*/
  let { title, author, qty, price, desc, img } = param;
  // AdminService.addBooklist(
  //   param.title,
  //   param.author,
  //   param.qty,
  //   param.price,
  //   param.desc,
  //   param.img
  // );
  AdminService.addBooklist(title, author, qty, price, desc, img);
  res.redirect("/");
});

module.exports = router;
