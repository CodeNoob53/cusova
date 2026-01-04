import { router, loadView } from './js/router.js';
import { initHomePage } from './js/home.js';
import { initFavoritesPage } from './js/favorites.js';
import { subscribe } from './js/api.js';
import { setActiveNav } from './js/nav.js';
import './js/nav.js';

// Define routes
router
  .on('/', async () => {
    await loadView('home');
    await initHomePage();
    setupSubscription();
    setActiveNav('/');
  })
  .on('/favorites', async () => {
    await loadView('favorites');
    await initFavoritesPage();
    setupSubscription();
    setActiveNav('/favorites');
  })
  .notFound(async () => {
    await loadView('home');
    await initHomePage();
    setupSubscription();
    setActiveNav('/');
  });

// Setup subscription form (available on all pages)
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

// Initialize router when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  router.resolve();
});
