function toggleMenu() {
  let menu = document.getElementById("menuDropdown");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("login-btn");

  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      // Clear previous error messages
      document.getElementById("username-error").textContent = '';
      document.getElementById("password-error").textContent = '';

      // Check if the inputs are empty
      if (!username) {
        document.getElementById("username-error").textContent = "Username is required.";
        return;
      }
      
      if (!password) {
        document.getElementById("password-error").textContent = "Password is required.";
        return;
      }

      // Check if the username and password match in localStorage
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const matchedUser = users.find(user => user.username === username && user.password === password);

      if (matchedUser) {
        localStorage.setItem("currentUser", JSON.stringify(matchedUser));
        alert("Login successful!");
        window.location.href = "https://ricksmer.github.io/CSIT210-Website/Admin/html-adminhome.html"; // Redirect to desired page
      } else {
        document.getElementById("username-error").textContent = "Username or password does not match.";
      }
    });
  }
});
