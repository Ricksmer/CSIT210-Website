function toggleMenu() { 
  let menu = document.getElementById("menuDropdown");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById('guestServiceChart').getContext('2d');
  const guestServiceChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
      datasets: [{
        label: 'Guest Service Ratings',
        data: [5, 10, 20, 30, 35], // Example data
        backgroundColor: [
          '#ff4d4d',
          '#ff9933',
          '#ffff66',
          '#99cc66',
          '#339966'
        ],
        borderColor: '#fff',
        borderWidth: 2
      }]
    },
    options: {
      responsive: false, // Turn off responsiveness if you want to control px
      plugins: {
        legend: {
          position: 'bottom',
        },
        title: {
          display: true,
          text: 'Guest Service Ratings'
        }
      }
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem("guestSurveySection1");
  if (!saved) return;

  const results = JSON.parse(saved);

  // Count ratings: how many 1s, 2s, 3s, etc.
  const ratingCounts = [0, 0, 0, 0, 0]; // Index 0 = 1 star, 4 = 5 stars
  for (const question in results) {
    if (question === "submittedAt") continue;
    const value = results[question];
    if (value && value >= 1 && value <= 5) {
      ratingCounts[value - 1]++;
    }
  }

  const ctx = document.getElementById('guestServiceChart').getContext('2d');
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
      datasets: [{
        label: 'Guest Service Ratings',
        data: ratingCounts,
        backgroundColor: [
          '#ff4d4d',
          '#ff944d',
          '#ffd11a',
          '#b3e633',
          '#33cc33'
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
          text: 'Guest Service Rating Distribution'
        }
      }
    }
  });
});

