const app = require("express");
const router = app.Router();
const authCheck = require("../login/authCheck");
const bookService = require("../books/BooksService");
const CartService = require("./CartService");

router.get("/", (req, res) => {
  if (typeof req.session.user_id === "undefined") {
    return res.redirect("/auth");
  } else {
    return res.render("index", {
      page: "pages/cart",
      carts: CartService.getCartById(req.session.use_id),
      status: authCheck.isOwner(req, res),
    });
  }
});

// 책 장바구니에 추가. 1) 테이블에 담기, 2) cart 페이지에 data 전달하기
router.post("/go_to_cart", async (req, res) => {
  const book_id = req.body.book_id;
  const use_id = req.session.user_id;
  try {
    await CartService.addCart(use_id);
    await CartService.addOrderDetail(book_id);
    return res.write("<script>history.back();</script>");
  } catch (e) {
    throw e;
  }
});

module.exports = router;
