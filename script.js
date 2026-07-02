document.addEventListener('DOMContentLoaded', () => {
  const cta = document.getElementById('cta');
  cta?.addEventListener('click', () => {
    alert('Thanks! Let\u2019s start your project. We\u2019ll be in touch soon.');
  });

  document.querySelectorAll('.pill').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pill').forEach((b) => b.classList.remove('pill-primary'));
      btn.classList.add('pill-primary');
    });
  });

  // subtle entrance animation
  document.querySelectorAll('.card').forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(12px)';
    setTimeout(() => {
      card.style.transition = 'opacity .5s ease, transform .5s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 120 * i);
  });
});
