import { initHomePage } from './js/home.js';
import { initFavoritesPage } from './js/favorites.js';
import { subscribe } from './js/api.js';
import './js/nav.js';

// Simple page navigation
function showPage(pageName) {
  const homePage = document.getElementById('home-page');
  const favoritesPage = document.getElementById('favorites-page');

  if (pageName === 'home') {
    homePage?.classList.remove('hidden');
    favoritesPage?.classList.add('hidden');
    initHomePage();
  } else if (pageName === 'favorites') {
    homePage?.classList.add('hidden');
    favoritesPage?.classList.remove('hidden');
    initFavoritesPage();
  }
}

// Set active navigation link
function setActiveNav(route) {
  const navHome = document.getElementById('nav-home');
  const navFavorites = document.getElementById('nav-favorites');

  if (!navHome || !navFavorites) return;

  navHome.classList.remove('active');
  navFavorites.classList.remove('active');

  if (route === 'favorites') {
    navFavorites.classList.add('active');
  } else {
    navHome.classList.add('active');
  }
}

// Setup navigation handlers
function setupNavigation() {
  // Desktop navigation
  document.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const page = link.dataset.page;
      showPage(page);
      setActiveNav(page);
    });
  });
}

// Setup subscription form
function setupSubscription() {
  const subForm = document.getElementById('subscription-form');
  if (subForm) {
    subForm.addEventListener('submit', async e => {
      e.preventDefault();
      const email = subForm.email.value;
      try {
        await subscribe(email);
        alert('Successfully subscribed!');
        subForm.reset();
      } catch (err) {
        alert('Subscription failed. Please check your email or try again later.');
      }
    });
  }
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupSubscription();
  showPage('home'); // Show home page by default
});
