var db = require("../../utils/mysql");
const querys = require("./OrderRepository");

const OrderService = {
  addOrder: async (user_id, order_total) => {
    try {
      const query = querys.addOrder(user_id, order_total);
      const conn = await db.getConnection();
      const [result] = await conn.query(query);
      return result;
    } catch (e) {
      throw e;
    }
  },
  addOrderDetail: async (book_id, order_qty, payment) => {
    try {
      const query = querys.addOrderDetail(book_id, order_qty, payment);
      const conn = await db.getConnection();
      const [result] = await conn.query(query);
      return result;
    } catch (e) {
      throw e;
    }
  },
  addAddress: async (user_id, addr, addr2, phonenumber, username) => {
    try {
      const query = querys.addAddress(
        user_id,
        addr,
        addr2,
        phonenumber,
        username
      );
      const conn = await db.getConnection();
      const [result] = await conn.query(query);
      return result;
    } catch (e) {
      throw e;
    }
  },
  findAddressByUserId: async (user_id) => {
    try {
      const query = querys.findAddressByUserId(user_id);
      const conn = await db.getConnection();
      const [result] = await conn.query(query);
      return result;
    } catch (e) {
      throw e;
    }
  },
};

module.exports = OrderService;
