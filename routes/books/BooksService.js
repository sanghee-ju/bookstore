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
  findById: async (id) => {
    try {
      const query = querys.findById(id);
      const conn = await db.getConnection();
      const [result] = await conn.query(query);
      return result;
    } catch (e) {
      throw e;
    }
  },
  findReqInfoById: async (id) => {
    try {
      const query = querys.findReqInfoById(id);
      const conn = await db.getConnection();
      const [result] = await conn.query(query);
      return result;
    } catch (e) {
      throw e;
    }
  },
  updateBookQty: async (id, newQty) => {
    try {
      const query = querys.updateBookQty(id, newQty);
      const conn = await db.getConnection();
      const [result] = await conn.query(query);
      return result;
    } catch (e) {
      throw e;
    }
  },
};

module.exports = BooksService;
