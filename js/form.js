/* ============================================================
   CLINIQUE TOUNKARA — form.js
   Validation des formulaires RDV et Contact
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ── UTILITAIRES ──

  function showError(input, message) {
    input.classList.add('error');
    input.classList.remove('success');
    let err = input.parentElement.querySelector('.form-error');
    if (!err) {
      err = document.createElement('span');
      err.className = 'form-error';
      input.parentElement.appendChild(err);
    }
    err.innerHTML = '⚠ ' + message;
  }

  function showSuccess(input) {
    input.classList.remove('error');
    input.classList.add('success');
    const err = input.parentElement.querySelector('.form-error');
    if (err) err.remove();
  }

  function clearState(input) {
    input.classList.remove('error', 'success');
    const err = input.parentElement.querySelector('.form-error');
    if (err) err.remove();
  }

  function validateName(input) {
    const val = input.value.trim();
    if (!val) { showError(input, 'Ce champ est requis'); return false; }
    if (val.length < 2) { showError(input, 'Minimum 2 caractères'); return false; }
    showSuccess(input); return true;
  }

  function validatePhone(input) {
    const val = input.value.trim().replace(/\s/g, '');
    const re = /^(\+221|00221)?[0-9]{8,9}$/;
    if (!val) { showError(input, 'Ce champ est requis'); return false; }
    if (!re.test(val)) { showError(input, 'Numéro invalide (ex: +221 77 000 00 00)'); return false; }
    showSuccess(input); return true;
  }

  function validateEmail(input) {
    const val = input.value.trim();
    if (!val) return true; // optionnel
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(val)) { showError(input, 'Adresse email invalide'); return false; }
    showSuccess(input); return true;
  }

  function validateRequired(input, label) {
    const val = input.value.trim();
    if (!val || val === '') {
      showError(input, (label || 'Ce champ') + ' est requis');
      return false;
    }
    showSuccess(input); return true;
  }

  // ── VALIDATION EN TEMPS RÉEL ──
  document.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(input => {
    input.addEventListener('blur', function () {
      const type = this.dataset.validate;
      if (!type) return;
      if (type === 'name') validateName(this);
      if (type === 'phone') validatePhone(this);
      if (type === 'email') validateEmail(this);
      if (type === 'required') validateRequired(this, this.dataset.label);
    });

    input.addEventListener('input', function () {
      if (this.classList.contains('error')) clearState(this);
    });
  });

  // ── FORMULAIRE RDV ──
  const rdvForm = document.getElementById('rdv-form');
  if (rdvForm) {
    rdvForm.addEventListener('submit', function (e) {
      e.preventDefault();

      let valid = true;
      const nom     = rdvForm.querySelector('[data-validate="name"]');
      const tel     = rdvForm.querySelector('[data-validate="phone"]');
      const service = rdvForm.querySelector('[data-validate="required"]');
      const email   = rdvForm.querySelector('[data-validate="email"]');

      if (nom    && !validateName(nom))              valid = false;
      if (tel    && !validatePhone(tel))             valid = false;
      if (service && !validateRequired(service, 'Le service')) valid = false;
      if (email  && !validateEmail(email))           valid = false;

      if (!valid) return;

      // Simuler l'envoi
      const btn = rdvForm.querySelector('[type="submit"]');
      const originalText = btn.innerHTML;
      btn.innerHTML = '⏳ Envoi en cours…';
      btn.disabled = true;

      setTimeout(() => {
        rdvForm.style.display = 'none';
        const success = document.getElementById('rdv-success');
        if (success) success.classList.add('show');
        window.showToast && window.showToast('✅ Votre demande a été envoyée !');
      }, 1400);
    });
  }

  // ── FORMULAIRE CONTACT ──
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      let valid = true;
      const fields = contactForm.querySelectorAll('[data-validate]');
      fields.forEach(f => {
        const type = f.dataset.validate;
        if (type === 'name') { if (!validateName(f)) valid = false; }
        if (type === 'phone') { if (!validatePhone(f)) valid = false; }
        if (type === 'email') { if (!validateEmail(f)) valid = false; }
        if (type === 'required') { if (!validateRequired(f, f.dataset.label)) valid = false; }
      });

      if (!valid) return;

      const btn = contactForm.querySelector('[type="submit"]');
      const originalText = btn.innerHTML;
      btn.innerHTML = '⏳ Envoi en cours…';
      btn.disabled = true;

      setTimeout(() => {
        contactForm.style.display = 'none';
        const success = document.getElementById('contact-success');
        if (success) success.classList.add('show');
        window.showToast && window.showToast('✅ Message envoyé avec succès !');
      }, 1400);
    });
  }

});
