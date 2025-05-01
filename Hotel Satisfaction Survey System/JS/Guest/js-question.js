function toggleMenu() { 
  let menu = document.getElementById("menuDropdown");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

document.querySelectorAll('.grid-row').forEach(row => {
  row.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('click', () => {
      const clicked = item.querySelector('.grid-item-inner');
      const isToggled = clicked.classList.contains('toggled');

      row.querySelectorAll('.grid-item-inner').forEach(inner => {
        inner.classList.remove('toggled');
      });

      if (!isToggled) {
        clicked.classList.add('toggled');
      }
    });
  });
});
