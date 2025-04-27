document.addEventListener("DOMContentLoaded", function () {
    const feedbackList = document.getElementById("feedbackList");

    const feedbacks = JSON.parse(localStorage.getItem("allFeedbacks")) || [];

    if (feedbacks.length === 0) {
        feedbackList.innerHTML = "<p>No feedbacks submitted yet.</p>";
    } else {
        feedbacks.forEach((feedback, index) => {
            const feedbackItem = document.createElement("div");
            feedbackItem.className = "feedback-item";
            feedbackItem.innerHTML = `<p><strong>Feedback #${index + 1}:</strong> ${feedback}</p>`;
            feedbackList.appendChild(feedbackItem);
        });
    }
});

function toggleMenu() { 
    let menu = document.getElementById("menuDropdown");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}
window.onload = function() {
    const comments = document.querySelectorAll('.comments p'); // Ensure this matches your HTML structure
    if (comments.length > 0) {
        comments[1].remove(); // Remove the second comment (change the index to the one you want to remove)
    } else {
        console.log('No comments found!');
    }
};