var db = require("../../utils/mysql");
const querys = require("./AdminRepository");

const AdminService = {
  addBooklist: async () => {
    try {
      const query = querys.addBooklist();
      const conn = await db.getConnection();
      const [result] = await conn.query(query);
      return result;
    } catch (e) {
      throw e;
    }
  },
};

module.exports = AdminService;
