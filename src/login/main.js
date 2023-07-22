const logForm = document.getElementById("logForm");
let msg = document.querySelector(".msg");
let regBtn = document.querySelector(".regBtn");
logForm.onsubmit = (e) => {
  e.preventDefault();
  let formdata = new FormData(logForm);
  let { email, password } = Object.fromEntries(formdata.entries());

  let dataArray = [];
  dataArray = JSON.parse(localStorage.getItem("formData"))
    ? JSON.parse(localStorage.getItem("formData"))
    : [];

  if (
    dataArray.find((data) => {
      return data.email == email && data.password == password;
    })
  ) {
    msg.innerHTML = setAllert("login succesfull", "success");
    let currentUser = dataArray.find((data) => {
      return data.email == email && data.password == password;
    });
    window.location.href = "profile.html";
    localStorage.setItem("CurrentUser", JSON.stringify(currentUser));
    console.log("login success");
  } else {
    msg.innerHTML = setAllert(
      "login failed. pls give me correct email or pass",
      "danger"
    );
  }
};

regBtn.onclick = () => {
  window.location.href = "registation.html";
};
