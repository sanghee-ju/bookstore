const app = require("express");
var router = app.Router();
const LoginService = require("./LoginService");
const authCheck = require("./authCheck");

router.get("/", async (req, res, next) => {
  res.render("index", {
    page: "pages/login",
    status: authCheck.isOwner(req, res),
  });
});

router.post("/", async (req, res, next) => {
  let params = JSON.parse(JSON.stringify(req.body));
  const { id, password } = params;
  if (id && password) {
    const [result] = await LoginService.login(id, password);
    if (result.user_grade === "admin") {
      req.session.is_logined = true;
      req.session.user_id = "admin";
      req.session.save(() => {
        return res.redirect("/admin");
      });
    }
    if (!result) {
      res.write("<script>alert('You Failed Login :(');</script>");
      return res.write("<script>history.back();</script>");
    }
    req.session.is_logined = true;
    req.session.user_id = id;
    req.session.save(() => {
      return res.write("<script>history.back();</script>");
    });
  } else {
    alert("로그인 중 오류가 발생했습니다 :(");
    return res.write("<script>history.back();</script>");
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy((e) => {
    return res.redirect("/");
  });
});

module.exports = router;
