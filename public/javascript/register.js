// alert("check");
const register_btn = document.getElementById("sbm_register");
const temp_btn = document.getElementById("btn_register");
const form = document.querySelector("form");
const pw = document.getElementById("pw");
const ck_pw = document.getElementById("ck_pw");
const ck_btn = document.getElementById("ck_btn");

ck_btn.addEventListener("click", () => {
  if (ck_pw.value === pw.value) {
    register_btn.style.display = "block";
    temp_btn.style.display = "none";
  } else {
    alert("비밀번호가 일치하지 않습니다!😕");
    ck_pw.value = "";
    pw.value = "";
  }
});
