// db crud
// 책 리스트 정보 가져오기
// 책 테이블의 column
// b_id : 책 id, b_name:책 제목, b_qty:책 수량, b_price:책 가격
// b_desc:책 설명, b_img: 책 썸네일
// book_genre : 책 장르(숫자로 표시)
module.exports = {
  getBookList: () => {
    return "SELECT * FROM t_book;";
  },
  findById: (id) => {
    return `select book_title,book_author,book_qty,book_price,book_desc,book_img from t_book where book_id = '${id}'`;
  },
  findReqInfoById: (id) => {
    return `select book_title,book_author,book_price,book_img from t_book where book_id='${id}';`;
  },
};
