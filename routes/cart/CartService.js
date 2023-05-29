const db = require("../../utils/mysql");
const querys = require("./CartRepository");

const CartService = {
  addCart: async (user_id) => {
    try {
      const query = querys.addCart(user_id);
      const conn = await db.getConnection();
      const [result] = await conn.query(query);
      return result;
    } catch (e) {
      throw e;
    }
  },
  addOrderDetail: async (book_id, qty) => {
    try {
      const query = querys.addCartDetail(book_id, qty);
      const conn = await db.getConnection();
      const [result] = await conn.query(query);
      return result;
    } catch (e) {
      throw e;
    }
  },
  getCartById: async (user_id) => {
    try {
      const query = querys.getCartById(user_id);
      const conn = await db.getConnection();
      const [result] = await conn.query(query);
      return result;
    } catch (e) {
      throw e;
    }
  },
};

module.exports = CartService;
