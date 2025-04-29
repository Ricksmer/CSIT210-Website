document.addEventListener('DOMContentLoaded', function () {
    const saved = localStorage.getItem("roomSurveySection2"); // <-- use correct key for Room Quality

    const ratingCounts = [0, 0, 0, 0, 0]; // [1 star, 2 stars, ..., 5 stars]

    if (saved) {
        const results = JSON.parse(saved);
        for (const question in results) {
            if (question === "submittedAt") continue;
            const value = results[question];
            if (value && value >= 1 && value <= 5) {
                ratingCounts[value - 1]++;
            }
        }
    } else {
        // Example default data if no Room Quality survey found
        ratingCounts.splice(0, ratingCounts.length, 8, 12, 18, 28, 34); 
    }

    const canvas = document.getElementById('roomQualityChart'); // <-- canvas id must be roomQualityChart
    if (!canvas) {
        console.error('Canvas element with id "roomQualityChart" not found.');
        return;
    }

    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
            datasets: [{
                label: 'Room Quality Ratings',
                data: ratingCounts,
                backgroundColor: [
                    '#ff4d4d',
                    '#ff9933',
                    '#ffff66',
                    '#99cc66',
                    '#339966'
                  ],
                borderColor: '#ffffff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                title: {
                    display: true,
                    text: 'Room Quality Rating Distribution'
                }
            }
        }
    });
});
