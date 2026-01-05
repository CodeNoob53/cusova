import { router } from './router.js';

// Set active navigation based on current route
export function setActiveNav(route) {
  const navHome = document.getElementById('nav-home');
  const navFavorites = document.getElementById('nav-favorites');

  if (!navHome || !navFavorites) return;

  // Remove all active classes
  navHome.classList.remove('active');
  navFavorites.classList.remove('active');

  // Add active class based on current route
  if (route === '/favorites') {
    navFavorites.classList.add('active');
  } else {
    navHome.classList.add('active');
  }
}

// Setup navigation click handlers for SPA routing using event delegation
function setupNavigation() {
  // Desktop navigation
  const nav = document.querySelector('.nav');
  if (nav) {
    nav.addEventListener('click', e => {
      const link = e.target.closest('.nav-link');
      if (!link) return;

      e.preventDefault();
      const route = link.dataset.route;
      if (route) {
        router.navigate(route);
        setActiveNav(route);
      }
    });
  }

  // Mobile navigation
  const mobileNav = document.querySelector('.mobile-nav');
  if (mobileNav) {
    mobileNav.addEventListener('click', e => {
      const link = e.target.closest('.mobile-nav-link');
      if (!link) return;

      e.preventDefault();
      const route = link.dataset.route;
      if (route) {
        router.navigate(route);
        setActiveNav(route);
        closeMobileMenu();
      }
    });
  }
}

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
  setupNavigation();
  setupBurgerMenu();
});
