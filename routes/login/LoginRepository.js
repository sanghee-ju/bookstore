module.exports = {
  login: (id, pw) => {
    return `select user_nm,user_grade from t_user where user_id='${id}' and user_pw='${pw}';`;
  },
};
