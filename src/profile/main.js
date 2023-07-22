const info = document.querySelector(".info");
let CurrentUser = [];
CurrentUser = JSON.parse(localStorage.getItem("CurrentUser"))
  ? JSON.parse(localStorage.getItem("CurrentUser"))
  : [];


let profinfo = "";

profinfo = `
    <h3> Name: ${CurrentUser.name}</h3>
    <h3> Email: ${CurrentUser.email}</h3>
    <p>Hi i am ${CurrentUser.name} This is my Profie page. Thank you for visiting my page</p>

    `;

info.innerHTML = profinfo;
