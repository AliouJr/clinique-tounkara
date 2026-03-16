/* ============================================================
   CLINIQUE TOUNKARA — animations.js
   Animations au scroll via IntersectionObserver
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // Éléments à animer
  const targets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  if (!targets.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // On arrête d'observer une fois l'animation jouée
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  targets.forEach(el => observer.observe(el));

});
