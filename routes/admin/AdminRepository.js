var { v4 } = require("uuid");
module.exports = {
  addBookList: (title, qty, price, desc, img) => {
    return `insert into t_books value(b_id, b_name,b_qty,b_price,b_desc,b_img) values (${v4()},${title},${qty},${price},${desc},${img});`;
  },
};
