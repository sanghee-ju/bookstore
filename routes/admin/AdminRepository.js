const { v4 } = require("uuid");

module.exports = {
  addBookList: (title, author, qty, price, desc, img) => {
    return `insert into t_book(book_title,book_author,book_qty,book_price,book_desc,book_img) values ('${title}','${author}',
    ${parseInt(qty)},${parseInt(price)},'${desc}','${img}')`;
  },
};
