/* ============================================================
   CLINIQUE TOUNKARA — menu.js
   Gestion du menu hamburger mobile
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  const hamburger = document.querySelector('.navbar-hamburger');
  const mobileMenu = document.querySelector('.navbar-mobile');

  if (!hamburger || !mobileMenu) return;

  // Toggle menu
  hamburger.addEventListener('click', function () {
    const isOpen = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    this.setAttribute('aria-expanded', isOpen);
  });

  // Fermer au clic sur un lien
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Fermer au clic hors du menu
  document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  // Fermer à l'Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

});
