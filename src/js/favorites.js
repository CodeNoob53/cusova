const FAVORITES_KEY = 'favoriteExercises';

// Get all favorites from localStorage
export function getFavorites() {
  try {
    const favorites = localStorage.getItem(FAVORITES_KEY);
    return favorites ? JSON.parse(favorites) : [];
  } catch (err) {
    console.error('Failed to get favorites:', err);
    return [];
  }
}

// Add exercise to favorites
export function addFavorite(exercise) {
  try {
    const favorites = getFavorites();

    // Check if already exists
    if (favorites.some(fav => fav._id === exercise._id)) {
      return false;
    }

    favorites.push(exercise);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    return true;
  } catch (err) {
    console.error('Failed to add favorite:', err);
    return false;
  }
}

// Remove exercise from favorites
export function removeFavorite(exerciseId) {
  try {
    const favorites = getFavorites();
    const filtered = favorites.filter(fav => fav._id !== exerciseId);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(filtered));
    return true;
  } catch (err) {
    console.error('Failed to remove favorite:', err);
    return false;
  }
}

// Check if exercise is in favorites
export function isFavorite(exerciseId) {
  const favorites = getFavorites();
  return favorites.some(fav => fav._id === exerciseId);
}

// Toggle favorite status
export function toggleFavorite(exercise) {
  if (isFavorite(exercise._id)) {
    return removeFavorite(exercise._id);
  } else {
    return addFavorite(exercise);
  }
}

// --- View / Initialization Logic (migrated from init-favorites.js) ---

import { getExerciseById, updateRating } from './api.js';
import { loadTemplate, replacePlaceholders } from './dom.js';
import {
  openModal,
  closeModal,
  renderExerciseModal,
  showRatingModal,
  hideRatingModal,
  getCurrentRating,
} from './modal.js';
import { initQuote } from './quote.js';

// Render empty state
async function renderEmptyState() {
  const container = document.getElementById('favorites-container');
  if (!container) return;

  const template = await loadTemplate('favorites-empty');
  container.innerHTML = template;
}

// Render favorites list
async function renderFavorites() {
  const container = document.getElementById('favorites-container');
  if (!container) return;

  const favorites = getFavorites();

  if (favorites.length === 0) {
    await renderEmptyState();
    return;
  }

  const cardTemplate = await loadTemplate('favorite-card');

  const cardsHtml = favorites
    .map(exercise => {
      return replacePlaceholders(cardTemplate, {
        id: exercise._id,
        name: exercise.name,
        burnedCalories: exercise.burnedCalories || 0,
        bodyPart: exercise.bodyPart || 'N/A',
        target: exercise.target || 'N/A',
      });
    })
    .join('');

  container.innerHTML = `<ul class="favorites-grid">${cardsHtml}</ul>`;

  // Event delegation is already set up in initFavoritesPage
}

// Setup exercise modal
function setupExerciseModal(exerciseId) {
  const closeBtn = document.getElementById('modal-close-btn');
  if (closeBtn) {
    closeBtn.onclick = () => closeModal('exercise-modal');
  }

  const giveRatingBtn = document.getElementById('give-rating-btn');
  if (giveRatingBtn) {
    giveRatingBtn.onclick = () => {
      showRatingModal();
      setupRatingModal(exerciseId);
    };
  }

  const addToFavoritesBtn = document.getElementById('add-to-favorites-btn');
  if (addToFavoritesBtn) {
    addToFavoritesBtn.onclick = async () => {
      if (isFavorite(exerciseId)) {
        removeFavorite(exerciseId);
        closeModal('exercise-modal');
        await renderFavorites();
      }
    };

    if (isFavorite(exerciseId)) {
      addToFavoritesBtn.textContent = 'Remove from favorites';
    }
  }

  const exerciseModal = document.getElementById('exercise-modal');
  if (exerciseModal) {
    exerciseModal.onclick = e => {
      if (e.target === exerciseModal) closeModal('exercise-modal');
    };
  }

  const handleEscape = e => {
    if (e.key === 'Escape') {
      closeModal('exercise-modal');
      document.removeEventListener('keydown', handleEscape);
    }
  };
  document.addEventListener('keydown', handleEscape);
}

// Setup rating modal
function setupRatingModal(exerciseId) {
  const closeBtn = document.getElementById('rating-modal-close-btn');
  if (closeBtn) {
    closeBtn.onclick = () => hideRatingModal();
  }

  const ratingForm = document.getElementById('rating-form');
  if (ratingForm) {
    ratingForm.onsubmit = async e => {
      e.preventDefault();

      const rating = getCurrentRating();
      const emailInput = document.getElementById('rating-email');
      const reviewInput = document.getElementById('rating-review');
      const email = emailInput?.value.trim();
      const review = reviewInput?.value.trim() || '';

      if (rating <= 0) {
        alert('Please select a rating');
        return;
      }

      if (!email) {
        alert('Please enter your email');
        emailInput?.focus();
        return;
      }

      try {
        await updateRating(exerciseId, rating, email, review);
        alert('Rating submitted successfully!');
        hideRatingModal();
      } catch (err) {
        console.error('Failed to submit rating:', err);
        if (err.message?.includes('409')) {
          alert('This email has already been used to rate this exercise');
        } else {
          alert('Failed to submit rating. Please try again.');
        }
      }
    };
  }

  const ratingModal = document.getElementById('rating-modal');
  if (ratingModal) {
    ratingModal.onclick = e => {
      if (e.target === ratingModal) hideRatingModal();
    };
  }

  const handleEscape = e => {
    if (e.key === 'Escape') {
      hideRatingModal();
      document.removeEventListener('keydown', handleEscape);
    }
  };
  document.addEventListener('keydown', handleEscape);
}

// Initialize favorites page
export async function initFavoritesPage() {
  const favoritesPage = document.querySelector('.favorites-page');

  try {
    // Initialize Quote
    await initQuote();

    await renderFavorites();

    // Setup event delegation for favorites
    setupFavoritesEventDelegation();
  } catch (err) {
    console.error('Error initializing favorites page:', err);
  } finally {
    if (favoritesPage) favoritesPage.classList.add('loaded');
  }
}

// Setup event delegation for favorites container
function setupFavoritesEventDelegation() {
  const container = document.getElementById('favorites-container');
  if (!container) return;

  // Check if already has listener to prevent duplicates
  if (container.dataset.listenerAttached === 'true') return;
  container.dataset.listenerAttached = 'true';

  container.addEventListener('click', async (e) => {
    // Handle delete button clicks
    const deleteBtn = e.target.closest('.favorite-delete-btn');
    if (deleteBtn) {
      e.stopPropagation();
      const exerciseId = deleteBtn.dataset.id;
      if (exerciseId) {
        removeFavorite(exerciseId);
        try {
          await renderFavorites();
        } catch (err) {
          console.error('Failed to render favorites:', err);
        }
      }
      return;
    }

    // Handle start button clicks
    const startBtn = e.target.closest('.favorite-start-btn');
    if (startBtn) {
      e.stopPropagation();
      const exerciseId = startBtn.dataset.id;
      if (!exerciseId) return;

      try {
        const exercise = await getExerciseById(exerciseId);
        renderExerciseModal(exercise);
        openModal('exercise-modal');
        setupExerciseModal(exerciseId);
      } catch (err) {
        console.error('Failed to fetch exercise details:', err);
        alert('Failed to load exercise details.');
      }
    }
  });
}
