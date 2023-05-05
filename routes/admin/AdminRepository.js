module.exports = {
  addBookList: (title, id, author, qty, price, desc, img) => {
    return `insert into t_book values ('${id}','${title}','${author}',
    ${parseInt(qty)},${parseInt(price)},'${desc}','${img}');`;
  },
};
