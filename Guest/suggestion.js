document.addEventListener("DOMContentLoaded", function () {
    const textarea = document.querySelector(".feedback-section textarea");
    const submitButton = document.querySelector("#submit-button");

    // Load saved feedback from localStorage
    const savedFeedback = localStorage.getItem("customerFeedback");
    if (savedFeedback) {
        textarea.value = savedFeedback;
    }

    // Save feedback every time the user types (with debounce)
    let debounceTimer;
    textarea.addEventListener("input", function () {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            localStorage.setItem("customerFeedback", textarea.value);
            console.log("Feedback saved!");
        }, 500); // saves 0.5s after typing stops
    });

    // Handle Submit Button Click
    submitButton.addEventListener("click", function () {
        const feedback = textarea.value;
        if (feedback.trim() === "") {
            alert("Please write some feedback before submitting.");
        } else {
            console.log("Feedback submitted:", feedback);
            localStorage.removeItem("customerFeedback");
            textarea.value = "";
            alert("Thank you for your suggestion!");
        }
    });
});
function toggleMenu() { 
    let menu = document.getElementById("menuDropdown");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
  }