let backbtn = document.querySelector("#backbtn");
backbtn.addEventListener("click", () => {
  window.location.href = "/landingpage.html";
});
let get_person_signup_data =
  JSON.parse(localStorage.getItem("person_signup_data")) || [];
document.querySelector("form").addEventListener("submit", siginin);

function siginin(event) {
  event.preventDefault();

  let form = document.querySelector("form");
  let objsignin = {
    email: form.logemail.value,
    password: form.logpassword.value,
  };

  if (objsignin.email == "" || objsignin.password == "") {
    alert("Please fill inputs");
    return;
  }

  let flag = false;
  get_person_signup_data.forEach(function (ele) {
    if (objsignin.email == ele.email && objsignin.password == ele.password) {
      flag = true;
    }
  });

  if (flag == true) {
    alert("login successfull");

    window.location.href = "/landingpage.html";
  } else {
    alert("Please provide a valid credentials!");
  }
}
