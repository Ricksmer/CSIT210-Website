function toggleMenu() {
  let menu = document.getElementById("menuDropdown");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

document.addEventListener("DOMContentLoaded", () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  
  if (currentUser && currentUser.firstName) {
    const greeting = document.getElementById("admin-greeting");
    greeting.textContent = `Hello ${currentUser.firstName}!`;
  }
});

document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("logoutButton").addEventListener("click", () => {
    localStorage.removeItem("currentUser");

    alert("You have successfully logged out!");
    window.location.href = "html-adminlogin.html"; 
  });
});
