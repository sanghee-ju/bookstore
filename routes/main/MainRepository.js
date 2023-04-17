// db crud 담당
// 사용자 정보 불러오기
module.exports = {
  getData: () => {
    return "SELECT * FROM t_user;";
  },
};
