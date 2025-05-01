document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('report-container');
  container.innerHTML = "";

  const reports = JSON.parse(localStorage.getItem('reports')) || [];

  if (reports.length === 0) {
      container.innerHTML = "<p>No reports submitted yet.</p>";
      return;
  }

  reports.forEach((report, index) => {
      const reportDiv = document.createElement('div');
      reportDiv.classList.add('report');

      const reportText = document.createElement('p');
      reportText.textContent = report.text;
      reportText.style.fontWeight = 'bold';

      const reportDate = document.createElement('p');
      reportDate.textContent = `Submitted on: ${report.date}`;
      reportDate.style.fontSize = '0.9em';
      reportDate.style.color = 'gray';

      const resolveButton = document.createElement('button');
      resolveButton.textContent = "Mark Resolved";
      resolveButton.classList.add('resolve-btn');

      let isResolved = false; // Track status

      resolveButton.addEventListener('click', () => {
          isResolved = !isResolved; // Toggle status

          if (isResolved) {
              reportText.style.textDecoration = "line-through";
              resolveButton.textContent = "Mark Unresolved";
              resolveButton.style.backgroundColor = "gray";
          } else {
              reportText.style.textDecoration = "none";
              resolveButton.textContent = "Mark Resolved";
              resolveButton.style.backgroundColor = "#4CAF50";
          }
      });

      reportDiv.appendChild(reportText);
      reportDiv.appendChild(reportDate);
      reportDiv.appendChild(resolveButton);

      container.appendChild(reportDiv);
  });
});
