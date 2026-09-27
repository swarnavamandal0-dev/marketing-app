const header = document.querySelector('.site-header');
const toggle = document.querySelector('.nav-toggle');

if (toggle) {
  toggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const signupForm = document.querySelector('.signup-form');
if (signupForm) {
  signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = signupForm.querySelector('button');
    const input = signupForm.querySelector('input');

    if (input && input.value.trim()) {
      button.textContent = 'Request sent';
      button.disabled = true;
      input.value = '';
    }
  });
}

const navLinks = document.querySelectorAll('.main-nav a, .footer-wrap a');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('nav-open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);

    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 720) {
    header.classList.remove('nav-open');
    toggle?.setAttribute('aria-expanded', 'false');
  }
});

// Lightweight interaction to make dashboard cards feel alive.
const chartBars = document.querySelectorAll('.chart-bars span');
chartBars.forEach((bar, index) => {
  bar.style.animationDelay = `${index * 120}ms`;
  bar.style.animation = 'rise 0.8s ease forwards';
  bar.style.opacity = '0';
  bar.style.transform = 'translateY(12px)';
});

const style = document.createElement('style');
style.textContent = `
  @keyframes rise {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);

// Set current year if needed in footer text
const currentYear = new Date().getFullYear();
const footerText = document.querySelector('.footer-wrap span:last-child');
if (footerText && footerText.textContent.includes('2026')) {
  footerText.textContent = `© ${currentYear} NovaFlow`;
}



























































































































































































































































































































































































































































































































'};
