(function () {
  'use strict';

  // Current year in footer
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Mobile menu toggle
  var burger = document.querySelector('.header__burger');
  var nav = document.querySelector('.header__nav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      var expanded = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', !expanded);
      nav.classList.toggle('is-open');
    });
  }

  // Contact form submit (placeholder – replace with Bitrix24 webhook or your backend)
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // In Bitrix24 constructor, form will post to Bitrix24; here we only prevent default and show feedback
      var btn = form.querySelector('[type="submit"]');
      var originalText = btn ? btn.textContent : '';
      if (btn) {
        btn.disabled = true;
        btn.textContent = 'Sending…';
      }
      setTimeout(function () {
        if (btn) {
          btn.disabled = false;
          btn.textContent = originalText;
        }
        alert('Thank you. Your request has been sent. We will contact you soon.');
        form.reset();
      }, 800);
    });
  }

  // Optional: track CTA clicks for analytics (when GA is configured)
  document.querySelectorAll('a[href="#contact"]').forEach(function (link) {
    link.addEventListener('click', function () {
      if (typeof gtag === 'function') {
        gtag('event', 'click', { event_category: 'CTA', event_label: 'Contact' });
      }
    });
  });

  // Sticky CTA bar
  var stickyCta = document.getElementById('sticky-cta');
  var stickyCtaClose = document.getElementById('sticky-cta-close');
  var stickyCtaHidden = false;

  if (stickyCta) {
    // Check if user has dismissed the CTA (stored in sessionStorage)
    if (sessionStorage.getItem('stickyCtaDismissed') === 'true') {
      stickyCtaHidden = true;
    }

    // Show sticky CTA after scrolling past hero section
    function checkStickyCta() {
      if (stickyCtaHidden) return;

      var hero = document.querySelector('.hero');
      if (hero) {
        var heroBottom = hero.offsetTop + hero.offsetHeight;
        var scrollY = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollY > heroBottom) {
          stickyCta.classList.add('is-visible');
          stickyCta.classList.remove('is-hidden');
        } else {
          stickyCta.classList.remove('is-visible');
          stickyCta.classList.add('is-hidden');
        }
      }
    }

    // Initial check
    checkStickyCta();

    // Check on scroll
    var scrollTimeout;
    window.addEventListener('scroll', function () {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(checkStickyCta, 100);
    });

    // Close button handler
    if (stickyCtaClose) {
      stickyCtaClose.addEventListener('click', function () {
        stickyCta.classList.remove('is-visible');
        stickyCta.classList.add('is-hidden');
        stickyCtaHidden = true;
        sessionStorage.setItem('stickyCtaDismissed', 'true');
      });
    }

    // Hide when user reaches contact form
    var contactSection = document.getElementById('contact');
    if (contactSection) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            stickyCta.classList.remove('is-visible');
            stickyCta.classList.add('is-hidden');
          } else {
            checkStickyCta();
          }
        });
      }, { threshold: 0.1 });

      observer.observe(contactSection);
    }
  }
})();
