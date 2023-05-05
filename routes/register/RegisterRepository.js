module.exports = {
  register: (email, id, name, password) => {
    return `INSERT INTO t_user VALUES('${email}','${id}','${password}','${name}','new');`;
  },
  findByEmail: (email) => {
    return `SELECT user_id FROM t_user WHERE user_em = '${email}';`;
  },
};
