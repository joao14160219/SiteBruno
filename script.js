// ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// menu mobile
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

toggle?.addEventListener('click', () => {
  const opened = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', opened ? 'true' : 'false');
});

// rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (!id || id === '#') return;
    const el = document.querySelector(id);
    if (el){
      e.preventDefault();
      nav?.classList.remove('is-open');
      toggle?.setAttribute('aria-expanded', 'false');
      el.scrollIntoView({ behavior:'smooth', block:'start' });
    }
  });
});

// formulário -> WhatsApp
const form = document.getElementById('contactForm');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());

  const nome = (data.nome || '').toString().trim();
  const whats = (data.whats || '').toString().trim();
  const msg = (data.mensagem || '').toString().trim();

  const text = `Olá! Meu nome é ${nome}. WhatsApp: ${whats}. ${msg}`;
  const encoded = encodeURIComponent(text);

  // Troque o número aqui também (somente números com DDI)
  const phone = "55SEUNUMERO";
  window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank', 'noopener');
  form.reset();
});
