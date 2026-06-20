/* ==========================================================================
   GUAMA TECH - Main JavaScript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* --- HEADER SCROLL EFFECT --- */
  const header = document.getElementById('header');

  const onScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* --- MOBILE MENU --- */
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
  });

  // Cerrar menú al hacer clic en un enlace
  const navLinks = nav.querySelectorAll('.nav__link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      nav.classList.remove('active');
    });
  });

  /* --- REVEAL ON SCROLL --- */
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  revealElements.forEach(el => revealObserver.observe(el));

  /* --- CONTACT FORM --- */
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;

      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.7';
      submitBtn.style.cursor = 'not-allowed';

      setTimeout(() => {
        submitBtn.textContent = 'Mensaje Enviado';
        submitBtn.style.background = 'var(--lime)';
        submitBtn.style.borderColor = 'var(--lime)';
        submitBtn.style.color = 'var(--navy)';
        submitBtn.style.opacity = '1';
        submitBtn.style.cursor = 'default';
        submitBtn.disabled = false;
        contactForm.reset();

        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.style.background = '';
          submitBtn.style.borderColor = '';
          submitBtn.style.color = '';
        }, 3000);
      }, 1200);
    });
  }

});
