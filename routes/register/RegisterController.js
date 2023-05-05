const app = require("express");
var router = app.Router();
const RegisterService = require("./RegisterService");
const authCheck = require("../login/authCheck");

router.get("/", (req, res, next) => {
  res.render("index", {
    page: "pages/register",
    status: authCheck.isOwner(req, res),
  });
});

router.post("/", async (req, res, next) => {
  let param = JSON.parse(JSON.stringify(req.body));
  const { email, id, name, password, ck_password } = param;
  const [result] = await RegisterService.findByEmail(email);
  if (!result) {
    await RegisterService.register(email, id, name, password);
    return res.redirect("/auth");
  } else {
    res.write("<script>alert('register failed! :(');</script>");
    // 한글 깨짐문제 발생..
    return res.write("<script>history.back();</script>");
  }
});

module.exports = router;
