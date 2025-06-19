// Navegación SPA sencilla
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav ul li a');
  const pages = document.querySelectorAll('.page');

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      //e.preventDefault();

      // Quitar active a todos li
      navLinks.forEach(a => a.parentElement.classList.remove('active'));

      // Poner active al padre li del link clickeado
      link.parentElement.classList.add('active');

      const sectionToShow = link.getAttribute('data-section');

      pages.forEach(page => {
        if (page.id === sectionToShow) {
          page.style.display = 'block';
        } else {
          page.style.display = 'none';
        }
      });
    });
  });
});
