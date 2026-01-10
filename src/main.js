import { initHomePage } from './js/home.js';
import { initFavoritesPage } from './js/favorites.js';
import { subscribe } from './js/api.js';
import './js/nav.js';

// Hash-based routing
function getCurrentRoute() {
  const hash = window.location.hash.slice(1); // Remove #
  return hash || 'home'; // Default to home
}

// Navigate to page based on hash
function navigateToRoute(route) {
  const homePage = document.getElementById('home-page');
  const favoritesPage = document.getElementById('favorites-page');

  if (route === 'home') {
    homePage?.classList.remove('hidden');
    favoritesPage?.classList.add('hidden');
    initHomePage();
  } else if (route === 'favorites') {
    homePage?.classList.add('hidden');
    favoritesPage?.classList.remove('hidden');
    initFavoritesPage();
  }

  setActiveNav(route);
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

// Handle hash changes (browser back/forward buttons)
function handleHashChange() {
  const route = getCurrentRoute();
  navigateToRoute(route);
}

// Setup navigation handlers
function setupNavigation() {
  // Listen for hash changes
  window.addEventListener('hashchange', handleHashChange);

  // Handle initial route
  handleHashChange();
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
});
