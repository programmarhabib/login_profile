const subForm = document.getElementById("subForm");
let msg = document.querySelector(".msg");
let loginBtn = document.querySelector(".loginBtn");
subForm.onsubmit = (e) => {
  e.preventDefault();
  let form_data = new FormData(subForm);
  let { name, email, password } = Object.fromEntries(form_data);
  let formArray = [];

  formArray = JSON.parse(localStorage.getItem("formData"))
    ? JSON.parse(localStorage.getItem("formData"))
    : [];

  if (!name || !email || !password) {
    msg.innerHTML = setAllert("All fields are required", "danger");
  } else {
    if (
      formArray.some((data) => {
        return data.email == email;
      })
    ) {
      msg.innerHTML = setAllert("Already registered by this email");
    } else {
      formArray.push({
        name: name,
        email: email,
        password: password,
      });
      setData("formData", formArray);
      msg.innerHTML = setAllert("registered successfully", "success");
      e.target.reset();
      console.log(formArray);
    }
  }
};

loginBtn.onclick = () => {
  window.location.href = "login.html";
};
