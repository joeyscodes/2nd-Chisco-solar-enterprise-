/* =========================================
   CHISCO SOLAR ENTERPRISE – JAVASCRIPT
   ========================================= */

document.addEventListener('DOMContentLoaded', function () {

  // ---------- LOADER (ONLY ON HOMEPAGE) ----------
  const loader = document.getElementById('loader');
  if (loader) {
    window.addEventListener('load', function () {
      setTimeout(() => {
        loader.classList.add('hide');
        setTimeout(() => {
          if (loader.parentNode) {
            loader.parentNode.removeChild(loader);
          }
        }, 500);
      }, 600);
    });
  }

  // ---------- NAVBAR SCROLL EFFECT (via IntersectionObserver) ----------
  const navbar = document.querySelector('.navbar');
  const sentinel = document.getElementById('scroll-sentinel');

  if (navbar && sentinel) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navbar.classList.remove('scrolled');
        } else {
          navbar.classList.add('scrolled');
        }
      });
    }, { threshold: 0 });
    navObserver.observe(sentinel);
  }

  // ---------- MOBILE HAMBURGER MENU ----------
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });

    const navItems = navLinks.querySelectorAll('a');
    navItems.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // ---------- REVEAL ANIMATIONS (IntersectionObserver) ----------
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealElements.forEach(el => revealObserver.observe(el));
  }

  // ---------- FORM HANDLING (AJAX SIMULATION) ----------
  const forms = document.querySelectorAll('.ajax-form');
  forms.forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // Hide form, show confirmation
      const confirmation = form.nextElementSibling;
      if (confirmation && confirmation.classList.contains('confirmation')) {
        form.style.display = 'none';
        confirmation.classList.add('show');
      } else {
        const confirmDiv = document.getElementById('confirmation-message');
        if (confirmDiv) {
          form.style.display = 'none';
          confirmDiv.classList.add('show');
        }
      }
    });
  });

});
