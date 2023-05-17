const { v4 } = require("uuid");
const moment = require("moment");
let order_id = v4();
module.exports = {
  addOrder: (user_id, order_total) => {
    // order_id, user_id, order_date,
    return `INSERT INTO t_order VALUES('${order_id}','${user_id}','${moment().format(
      "YYYY-MM-DD"
    )}',${parseInt(order_total)});`;
  },
  addOrderDetail: (book_id, order_qty, payment) => {
    // 수정
    return `INSERT INTO t_order_detail VALUES('${book_id}','${order_id}',${parseInt(
      order_qty
    )},'${payment}');`;
  },
  addAddress: (user_id, addr, addr2, phonenumber, username) => {
    return `INSERT INTO t_address VALUES('${v4()}','${user_id}','${addr}','${addr2}','${phonenumber}','${username}');`;
  },
  findAddressByUserId: (user_id) => {
    return `SELECT * FROM t_address where user_id='${user_id}'`;
  },
};
