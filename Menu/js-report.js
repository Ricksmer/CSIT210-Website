function toggleMenu() { 
  let menu = document.getElementById("menuDropdown");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.getElementById('submit-button');
  const reportBox = document.getElementById('report-box');

  submitButton.addEventListener('click', () => {
      const reportText = reportBox.value.trim();
      if (reportText === "") {
          alert("Please enter something before submitting.");
          return;
      }

      // Load existing reports or create new array
      let reports = JSON.parse(localStorage.getItem('reports')) || [];

      // Add new report with current date/time
      reports.push({
          text: reportText,
          date: new Date().toLocaleString()
      });

      // Save updated reports array
      localStorage.setItem('reports', JSON.stringify(reports));

      alert("Your report has been submitted!");

      // Clear the textarea
      reportBox.value = "";
  });
});
