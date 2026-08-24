(function () {
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.querySelector('.nav__menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('nav__menu--open');
      const expanded = menu.classList.contains('nav__menu--open');
      toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => menu.classList.remove('nav__menu--open'));
    });
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  const form = document.getElementById('contact-form');
  const success = document.getElementById('form-success');
  if (form && success) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      success.classList.add('is-visible');
      setTimeout(() => success.classList.remove('is-visible'), 6000);
      form.reset();
    });
  }

  const tabs = document.querySelectorAll('.tab');
  if (tabs.length) {
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.target;
        tabs.forEach(t => t.classList.toggle('is-active', t === tab));
        document.querySelectorAll('.tab-panel').forEach(p => {
          p.style.display = (p.id === target) ? '' : 'none';
        });
      });
    });
  }

  const yearEls = document.querySelectorAll('[data-year]');
  if (yearEls.length) {
    const y = new Date().getFullYear();
    yearEls.forEach(el => el.textContent = y);
  }
})();
