// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Typing animation
  const heroText = document.getElementById('heroText');
  if (heroText) {
    const texts = ["Discover AI Tools", "Boost Productivity", "Future of Work"];
    let count = 0, index = 0, currentText = '', letter = '';
    
    (function type() {
      currentText = texts[count];
      letter = currentText.slice(0, ++index);
      
      heroText.innerHTML = letter;
      if (letter.length === currentText.length) {
        setTimeout(() => {
          count = (count + 1) % texts.length;
          index = 0;
          setTimeout(type, 500);
        }, 2000);
      } else {
        setTimeout(type, 150);
      }
    })();
  }

  // Initialize tool grid
  if (typeof renderTools === 'function') renderTools();

  // Scroll animations
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
});
