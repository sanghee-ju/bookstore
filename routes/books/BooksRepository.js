// db crud
// 책 리스트 정보 가져오기
// 책 테이블의 column
// b_id : 책 id, b_name:책 제목, b_qty:책 수량, b_price:책 가격
// b_desc:책 설명, b_img: 책 썸네일
module.exports = {
  getBookList: () => {
    return "SELECT b_id,b_name,b_qty,b_price,b_desc,b_img FROM t_books;";
  },
};
