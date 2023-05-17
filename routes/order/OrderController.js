var express = require("express");
var router = express.Router();
const authCheck = require("../login/authCheck");
const BookService = require("../books/BooksService");
const OrderService = require("./OrderService");

router.post("/", async (req, res, next) => {
  // 구매할 상품정보 가져오기
  if (typeof req.session.user_id === "undefined") {
    return res.redirect("/auth");
  }
  let params = JSON.parse(JSON.stringify(req.body));
  const { book_id } = params;
  let book_info = [];
  // 상품 목록에서 바로 구매 선택 시,
  if (typeof book_id === "string") {
    book_info = await BookService.findReqInfoById(book_id);
  } else {
    // 장바구니에서 구매 선택 시, -- 테스트 필요..!
    for (let i = 0; i < book_id.length; i++) {
      const [result] = await BookService.findReqInfoById(book_id[i]);
      book_info.push(result);
    }
  }
  const user_id = req.session.user_id;
  const [address_info] = await OrderService.findAddressByUserId(user_id);
  // render 동작으로 넘겨주기

  res.render("index", {
    page: "pages/order",
    book_info: book_info,
    address_info: address_info,
    status: authCheck.isOwner(req, res),
  });
});

router.post("/order_process", async (req, res, next) => {
  try {
    const params = JSON.parse(JSON.stringify(req.body));
    const { book_id, book_qty, qty, payment, price } = params;
    const user_id = req.session.user_id;
    const newQty = parseInt(book_qty) - parseInt(qty);
    await OrderService.addOrder(user_id, price);
    await OrderService.addOrderDetail(book_id, qty, payment);
    await BookService.updateBookQty(book_id, newQty);
    // catch 문 => rollback

    res.redirect("/books");
  } catch (e) {
    throw e;
  }
});

router.post("/add_address", async (req, res) => {
  let params = JSON.parse(JSON.stringify(req.body));
  const { username, userphone, addr, addr2 } = params;
  const userId = req.session.user_id;
  await OrderService.addAddress(userId, addr, addr2, userphone, username);
  return res.redirect("/order");
});

module.exports = router;
