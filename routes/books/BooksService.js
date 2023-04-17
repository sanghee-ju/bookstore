const db = require("../../utils/mysql");
const querys = require("./BooksRepository");

const BooksService = {
  getBookList: async () => {
    try {
      const query = querys.getBookList();
      const conn = await db.getConnection();
      const [result] = await conn.query(query);
      return result;
    } catch (e) {
      throw e;
    }
  },
};

module.exports = BooksService;
