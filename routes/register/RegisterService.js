var db = require("../../utils/mysql");
const querys = require("./RegisterRepository");

module.exports = {
  register: async (email, id, name, password) => {
    try {
      const query = querys.register(email, id, name, password);
      const conn = await db.getConnection();
      const [result] = await conn.query(query);
      return result;
    } catch (err) {
      throw err;
    }
  },
  findByEmail: async (email) => {
    try {
      const query = querys.findByEmail(email);
      const conn = await db.getConnection();
      const [result] = await conn.query(query);
      return result;
    } catch (e) {
      throw e;
    }
  },
};
