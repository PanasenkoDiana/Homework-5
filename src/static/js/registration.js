document.getElementById("registration-form").addEventListener("submit", async (event) => {
    event.preventDefault();
  
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    const response = await fetch("/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });
    
    if (response.ok) {
      const user = await response.json();
      alert("Регистрация прошла успешно!");
      window.location.href = "/login"; 
    } else {
      const error = await response.json();
      alert(error.error || "Ошибка регистрации.");
    }
  });
  