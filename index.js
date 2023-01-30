let backbtn = document.querySelector("#backbtn");
backbtn.addEventListener("click", () => {
  window.location.href = "/landingpage.html";
});
let form = document.querySelector("form").addEventListener("submit", storage);
let person_signup_data =
  JSON.parse(localStorage.getItem("person_signup_data")) || [];
function storage(event) {
  event.preventDefault();
  let form = document.querySelector("form");
  let obj = {
    email: form.email.value,
    firstname: form.Fname.value,
    lastname: form.Lname.value,
    password: form.password.value,
  };

  if (
    obj.firstname == "" ||
    obj.lastname == "" ||
    obj.password == "" ||
    obj.email == ""
  ) {
    alert("Please fill all fields");
  } else {
    alert("Congratulations, You have successfully created your account !");
    person_signup_data.push(obj);
    localStorage.setItem(
      "person_signup_data",
      JSON.stringify(person_signup_data)
    );
    window.location.href = "signin.html";
  }
}
