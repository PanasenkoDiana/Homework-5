const form = document.getElementById("login-form");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  fetch("/login", {
    method: "POST",
    body: JSON.stringify({
      email: email.value,
      password: password.value
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => {
    if (response.ok) {
      window.location.href = "/dashboard";
    } else {
      alert("Invalid login credentials");
    }
  })
  .catch(error => console.error("Error:", error));
});
