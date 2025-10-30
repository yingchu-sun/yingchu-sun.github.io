// assets/js/intro.js
(function () {
  const intro = document.getElementById('intro-hero');
  const enter = document.getElementById('intro-enter');
  const content = document.getElementById('site-content');
  if (!intro || !enter || !content) return;

  // Show once per browser session (use localStorage for once-per-day, see note below)
  const KEY = 'introDismissed';
  if (sessionStorage.getItem(KEY)) {
    intro.style.display = 'none';
    content.classList.remove('is-hidden');
    content.classList.add('is-visible');
    enhanceScrolling();
    return;
  }

  // Desktop: reveal CTA on first pointer move
  let ctaShown = false;
  const showCTA = () => {
    if (ctaShown) return;
    ctaShown = true;
    intro.classList.add('show-cta');
    window.removeEventListener('mousemove', showCTA);
    window.removeEventListener('touchstart', showCTA);
  };
  window.addEventListener('mousemove', showCTA, { once: true });
  window.addEventListener('touchstart', showCTA, { once: true });

  // Dismiss overlay => fade out, show content
  const dismiss = () => {
    try { sessionStorage.setItem(KEY, String(Date.now())); } catch (_) {}
    intro.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 450, easing: 'ease' })
         .addEventListener('finish', () => {
           intro.style.display = 'none';
           intro.setAttribute('aria-hidden', 'true');
           content.setAttribute('aria-hidden', 'false');
           content.focus({ preventScroll: true });
         });
    content.classList.remove('is-hidden');
    content.classList.add('is-visible');
    enhanceScrolling();
  };

  enter.addEventListener('click', dismiss);
  enter.addEventListener('keyup', (e) => { if (e.key === 'Enter' || e.key === ' ') dismiss(); });
  intro.addEventListener('keyup', (e) => { if (e.key === 'Enter') dismiss(); });

  // Subtle parallax on desktop
  if (window.matchMedia('(pointer: fine)').matches) {
    const bg = intro.querySelector('.intro-bg');
    window.addEventListener('mousemove', (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      bg.style.transform = `scale(1.08) translate(${x * 10}px, ${y * 8}px)`;
    });
  }

  // Optional: reveal-on-scroll
  function enhanceScrolling() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('is-revealed');
          observer.unobserve(en.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  }
})();
