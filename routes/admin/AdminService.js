var db = require("../../utils/mysql");
const querys = require("./AdminRepository");
const bookQuerys = require("../books/BooksRepository");

const AdminService = {
  addBooklist: async (title, author, qty, price, desc, img) => {
    try {
      const query = querys.addBookList(title, author, qty, price, desc, img);
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

module.exports = AdminService;
