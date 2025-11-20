// assets/js/intro.js
(function () {
  const intro = document.getElementById('intro-hero');
  const enter = document.getElementById('intro-enter');
  const content = document.getElementById('site-content');
  if (!intro || !enter || !content) return;

  // Only show once per session
  const KEY = 'introDismissed';
  if (sessionStorage.getItem(KEY)) {
    intro.style.display = 'none';
    content.classList.remove('is-hidden');
    content.classList.add('is-visible');
    revealSections();
    return;
  }

  // Show button after hover/touch
  let shown = false;
  const showCTA = () => {
    if (shown) return;
    shown = true;
    intro.classList.add('show-cta');
  };
  window.addEventListener('mousemove', showCTA, { once: true });
  window.addEventListener('touchstart', showCTA, { once: true });

  // Click or keypress to enter
  const dismiss = () => {
    try { sessionStorage.setItem(KEY, String(Date.now())); } catch (_) {}
    intro.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 450, easing: 'ease' })
         .addEventListener('finish', () => { intro.style.display = 'none'; });
    content.classList.remove('is-hidden');
    content.classList.add('is-visible');
    revealSections();
  };

  enter.addEventListener('click', dismiss);
  enter.addEventListener('keyup', (e) => { if (e.key === 'Enter' || e.key === ' ') dismiss(); });
  intro.addEventListener('keyup', (e) => { if (e.key === 'Enter') dismiss(); });

  // Parallax effect
  if (window.matchMedia('(pointer: fine)').matches) {
    const bg = intro.querySelector('.intro-bg');
    window.addEventListener('mousemove', (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      bg.style.transform = `scale(1.08) translate(${x * 10}px, ${y * 8}px)`;
    });
  }

  // Reveal on scroll
  function revealSections() {
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
