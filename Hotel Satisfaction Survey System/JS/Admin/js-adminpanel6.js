function toggleMenu() { 
    let menu = document.getElementById("menuDropdown");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('feedbackList');
    container.innerHTML = "";

    const suggestions = JSON.parse(localStorage.getItem('suggestions')) || [];

    if (suggestions.length === 0) {
        container.innerHTML = "<p>No suggestions submitted yet.</p>";
        return;
    }

    suggestions.forEach((suggestion, index) => {
        const suggestionDiv = document.createElement('div');
        suggestionDiv.classList.add('suggestion');

        const suggestionText = document.createElement('p');
        suggestionText.textContent = suggestion.text;
        suggestionText.style.fontWeight = 'bold';

        const suggestionDate = document.createElement('p');
        suggestionDate.textContent = `Submitted on: ${suggestion.date}`;
        suggestionDate.style.fontSize = '0.8vw';
        suggestionDate.style.margin = 'none';
        suggestionDate.style.marginTop = '1.5vh';
        suggestionDate.style.color = 'gray';
        
        const resolveButton = document.createElement('button');
        resolveButton.style.margin = 'none';
        resolveButton.textContent = "Remove";
        resolveButton.style.fontSize = '0.8vw';
        resolveButton.classList.add('resolve-btn');

        let isResolved = false;

        resolveButton.addEventListener('click', () => {
            isResolved = !isResolved;

            if (isResolved) {
                suggestionText.style.textDecoration = "line-through";
                resolveButton.textContent = "Removed";
                resolveButton.style.backgroundColor = "gray";
                suggestionDiv.classList.add('resolved');
            } else {
                suggestionText.style.textDecoration = "none";
                resolveButton.textContent = "Remove";
                resolveButton.style.backgroundColor = "#991717";
                suggestionDiv.classList.remove('resolved');
            }
        });

        suggestionDiv.appendChild(suggestionText);
        suggestionDiv.appendChild(suggestionDate);
        suggestionDiv.appendChild(resolveButton);

        container.appendChild(suggestionDiv);
    });
});
