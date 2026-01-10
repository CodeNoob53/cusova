// Burger menu functionality
function setupBurgerMenu() {
  const burgerBtn = document.getElementById('burger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileCloseBtn = document.getElementById('mobile-close-btn');

  if (!burgerBtn || !mobileMenu || !mobileCloseBtn) return;

  burgerBtn.addEventListener('click', openMobileMenu);
  mobileCloseBtn.addEventListener('click', closeMobileMenu);

  // Close on backdrop click
  mobileMenu.addEventListener('click', e => {
    if (e.target === mobileMenu) {
      closeMobileMenu();
    }
  });

  // Close on navigation link click
  const mobileNavLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
      closeMobileMenu();
    }
  });
}

function openMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const burgerBtn = document.getElementById('burger-btn');

  if (mobileMenu) {
    mobileMenu.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  if (burgerBtn) {
    burgerBtn.setAttribute('aria-expanded', 'true');
  }
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const burgerBtn = document.getElementById('burger-btn');

  if (mobileMenu) {
    mobileMenu.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (burgerBtn) {
    burgerBtn.setAttribute('aria-expanded', 'false');
  }
}

// Initialize navigation
document.addEventListener('DOMContentLoaded', () => {
  setupBurgerMenu();
});
