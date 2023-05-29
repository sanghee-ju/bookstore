const { v4 } = require("uuid");
let cartId = v4();
module.exports = {
  addCart: (user_id) => {
    return `INSERT INTO t_cart VALUES ('${cartId}','${user_id}');`;
  },
  addCartDetail: (book_id) => {
    return `INSERT INTO t_cart_detail VALUES ('${cartId}','${book_id}',1)`;
  },
  getCartById: (user_id) => {
    // 개선 필요....ㅎ
    return `SELECT book_id,book_title,book_author,book_qty,book_price,book_img FROM t_book where book_id in (SELECT book_id FROM t_cart_detail WHERE cart_id in (select cart_id from t_cart where user_id='${user_id}'));`;
  },
};
