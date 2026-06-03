(function () {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add('visible');
    }),
    { threshold: 0.12 }
  );
  reveals.forEach((el) => observer.observe(el));

  const sections = document.querySelectorAll('section[id]');
  const navAs = document.querySelectorAll('.nav-links a');

  const nav = document.querySelector('nav');

  window.addEventListener('scroll', () => {
    if (nav) nav.classList.toggle('nav-scrolled', window.scrollY > 48);

    let current = '';
    sections.forEach((s) => {
      if (window.scrollY >= s.offsetTop - 160) current = s.id;
    });
    navAs.forEach((a) => {
      a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--dorado)' : '';
    });
  });

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal').forEach((el, i) => {
      const delay = el.classList.contains('reveal-delay-1') ? 0.1
        : el.classList.contains('reveal-delay-2') ? 0.2
        : el.classList.contains('reveal-delay-3') ? 0.3
        : el.classList.contains('reveal-delay-4') ? 0.4
        : 0;
      el.style.transitionDelay = `${delay}s`;
    });
  }
})();
