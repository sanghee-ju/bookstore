const db = require("../../utils/mysql");
const querys = require("./MainRepository");
const bookQuerys = require("../books/BooksRepository");
// DB와 프론트엔드의 중간 지점? Data를 DB에서 가져와 보여주도록 하는 부분
const MainService = {
  getData: async () => {
    try {
      const query = querys.getData();
      const conn = await db.getConnection();
      const [result] = await conn.query(query);
      return result;
    } catch (e) {
      throw e;
    }
  },
  getBookList: async () => {
    try {
      const query = bookQuerys.getBookList();
      const conn = await db.getConnection();
      const [result] = await conn.query(query);
      return result;
    } catch (e) {
      throw e;
    }
  },
};

module.exports = MainService;
