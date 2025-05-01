function toggleMenu() {
  const menu = document.getElementById("menuDropdown");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("register-btn").addEventListener("click", () => {
    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();
    const email = document.getElementById("email").value.trim();
    const errorSpan = document.getElementById("form-error");

    // Check if any field is empty
    if (!firstName || !lastName || !username || !password || !confirmPassword || !email) {
      errorSpan.textContent = "Please fill in all fields.";
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      errorSpan.textContent = "Passwords do not match.";
      return;
    }

    // Check if username or email already exists
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.some(user => user.username === username || user.email === email)) {
      errorSpan.textContent = "Username or Email is already registered.";
      return;
    }

    // Store new user data
    users.push({ firstName, lastName, username, password, email });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful!");
    window.location.href = "html-adminlogin.html";
  });
});
