document.addEventListener("DOMContentLoaded", function () {
    const textarea = document.querySelector(".feedback-section textarea");
    const submitButton = document.querySelector("#submit-button");

    // Save feedbacks array if not exist
    if (!localStorage.getItem("allFeedbacks")) {
        localStorage.setItem("allFeedbacks", JSON.stringify([]));
    }

    // Handle Submit Button Click
    submitButton.addEventListener("click", function () {
        const feedback = textarea.value.trim();
        if (feedback === "") {
            alert("Please write some feedback before submitting.");
        } else {
            let feedbacks = JSON.parse(localStorage.getItem("allFeedbacks"));
            feedbacks.push(feedback);
            localStorage.setItem("allFeedbacks", JSON.stringify(feedbacks));
            textarea.value = "";
            alert("Thank you for your suggestion!");
        }
    });
});

function toggleMenu() { 
    let menu = document.getElementById("menuDropdown");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}
