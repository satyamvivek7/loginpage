const form = document.getElementById("form");
const emp_id = document.getElementById("username");
const user_password = document.getElementById("user_password");
const error = document.getElementById("error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!username.value) {
    error.innerHTML = "Please enter a username";
    return;
  }

  if (!user_password.value) {
    error.innerHTML = "Please enter a password";
    return;
  }

  if (!/^[a-zA-Z0-9]+$/.test(username.value)) {
    error.innerHTML = "username should not contain special characters";
    return;
  }

  // Validate username and password against server

  error.innerHTML = "";
});

// document.querySelector("#data").addEventListener('click', (e) => {
//   e.preventDefault()
//   fetch('http://localhost:1200/data')
//     .then(res => res.json())
//     .then(data => console.log(data))
// })