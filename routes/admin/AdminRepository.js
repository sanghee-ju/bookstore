module.exports = {
  addBookList: (title, author, qty, price, desc, img) => {
    return `insert into t_books(b_title,b_author,b_qty,b_price,b_desc,b_img) values ('${title}','${author}',
    ${parseInt(qty)},${parseInt(price)},'${desc}','${img}')`;
  },
};
