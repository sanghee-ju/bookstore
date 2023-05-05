const db = require("../../utils/mysql");
const querys = require("./LoginRepository");

module.exports = {
  login: async (id, pw) => {
    try {
      const query = querys.login(id, pw);
      const conn = await db.getConnection();
      const [result] = await conn.query(query);
      return result;
    } catch (e) {
      throw e;
    }
  },
};
