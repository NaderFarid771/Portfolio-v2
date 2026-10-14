// Highlight the navigation link for the section the visitor selects.
const navLinks = document.querySelectorAll('.nav-item');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((item) => item.classList.remove('active'));
    link.classList.add('active');
  });
});

// Keep the copyright year up to date.
const yearElement = document.querySelector('#current-year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
