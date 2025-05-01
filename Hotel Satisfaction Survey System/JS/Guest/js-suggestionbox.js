function toggleMenu() { 
    let menu = document.getElementById("menuDropdown");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submitButton');
    const suggestionInput = document.getElementById('suggestionInput');

    submitButton.addEventListener('click', () => {
        const suggestion = suggestionInput.value.trim();
        if (suggestion === "") {
            alert("Please enter a suggestion before submitting.");
            return;
        }

        // Load existing suggestions or create a new array
        let suggestions = JSON.parse(localStorage.getItem('suggestions')) || [];

        // Add the new suggestion with the current date/time
        suggestions.push({
            text: suggestion,
            date: new Date().toLocaleString()
        });

        // Save the updated suggestions array to localStorage
        localStorage.setItem('suggestions', JSON.stringify(suggestions));

        alert("Your suggestion has been submitted!");

        // Clear the input field
        suggestionInput.value = "";
    });
});
