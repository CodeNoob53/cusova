import {
  getFilters,
  getExercises,
  getExerciseById,
  updateRating,
} from './api.js';
import {
  renderCategories,
  renderExercises,
} from './dom.js';
import {
  renderPagination,
  setupPagination as setupPaginationListeners,
  scrollToTop,
} from './pagination.js';
import {
  openModal,
  closeModal,
  renderExerciseModal,
  showRatingModal,
  hideRatingModal,
  getCurrentRating,
} from './modal.js';
import { addFavorite, isFavorite } from './favorites.js';
import { initQuote } from './quote.js';

// Email validation helper
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// State object
const appState = {
  view: 'categories', // 'categories' or 'exercises'
  filter: 'Muscles',  // Active tab
  category: null,     // Selected category name
  categoryFilter: null, // The filter type of the selected category (e.g. 'Muscles')
  keyword: '',
  page: 1,
  limit: 12
};

// Initialize home page
export async function initHomePage() {
  const mainContent = document.querySelector('.main-content');

  try {
    // 1. Initialize Quote
    await initQuote();

    // 2. Initial Categories
    await fetchAndRender();

  } catch (err) {
    console.error('Error initializing home page:', err);
  } finally {
    if (mainContent) {
      mainContent.classList.add('loaded');
    }
  }

  // Setup event listeners
  setupFilterTabs();
  setupExerciseCards();
  setupPaginationListeners(handlePageChange);

  // Note: setupExerciseSearch is called dynamically when entering exercises view
}

// Fetch and render based on current state
async function fetchAndRender() {
  const container = document.getElementById('exercises-container');

  // Clear container / show loader could go here

  try {
    if (appState.view === 'categories') {
      // Fetch Categories
      const filters = await getFilters({
        filter: appState.filter,
        page: appState.page,
        limit: 12
      });
      renderCategories(filters.results, 'exercises-container');
      renderPagination(filters.page ? Number(filters.page) : 1, filters.totalPages || 1);
    } else {
      // Fetch Exercises
      const params = {
        limit: 10,
        page: appState.page
      };

      if (appState.categoryFilter === 'Muscles') params.muscles = appState.category.toLowerCase();
      else if (appState.categoryFilter === 'Body parts') params.bodypart = appState.category.toLowerCase();
      else if (appState.categoryFilter === 'Equipment') params.equipment = appState.category.toLowerCase();

      if (appState.keyword) params.keyword = appState.keyword;

      const exercises = await getExercises(params);
      renderExercises(exercises.results, 'exercises-container');
      renderPagination(exercises.page ? Number(exercises.page) : 1, exercises.totalPages || 1);
    }
  } catch (err) {
    console.error('Fetch error:', err);
    if (container) container.innerHTML = '<p class="error-message">Failed to load data. Please try again.</p>';
  }
}

// Handle page change from pagination
function handlePageChange(newPage) {
  if (newPage && newPage !== appState.page) {
    appState.page = newPage;
    fetchAndRender();
    scrollToTop();
  }
}

// Setup filter tabs
function setupFilterTabs() {
  const filterTabs = document.getElementById('filter-tabs');
  if (!filterTabs) return;

  // Check if already has listener to prevent duplicates
  if (filterTabs.dataset.listenerAttached === 'true') return;
  filterTabs.dataset.listenerAttached = 'true';

  filterTabs.addEventListener('click', async e => {
    const btn = e.target.closest('.filter-tab');
    if (!btn) return;

    document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');

    // Update state
    appState.filter = btn.dataset.filter;
    appState.view = 'categories';
    appState.page = 1;
    appState.keyword = '';
    appState.category = null;

    hideExercisesHeader();

    try {
      await fetchAndRender();
    } catch (err) {
      console.error('Failed to fetch data:', err);
    }
  });
}

// Setup exercise cards (and category clicks)
function setupExerciseCards() {
  const exercisesContainer = document.getElementById('exercises-container');
  if (!exercisesContainer) return;

  // Check if already has listener to prevent duplicates
  if (exercisesContainer.dataset.listenerAttached === 'true') return;
  exercisesContainer.dataset.listenerAttached = 'true';

  exercisesContainer.addEventListener('click', async e => {
    // Handle category card clicks
    const categoryCard = e.target.closest('.category-card');
    if (categoryCard) {
      const categoryName = categoryCard.dataset.name;
      const categoryFilter = categoryCard.dataset.filter;

      if (!categoryName) return;

      // Update state
      appState.view = 'exercises';
      appState.category = categoryName;
      appState.categoryFilter = categoryFilter; // Use the filter from the card!
      appState.page = 1;
      appState.keyword = '';

      showExercisesHeader(categoryName);
      setupExerciseSearch(); // Re-init search

      try {
        await fetchAndRender();
      } catch (err) {
        console.error('Failed to fetch exercises:', err);
      }
      return;
    }

    // Handle Start button clicks
    const startBtn = e.target.closest('.exercise-start-btn');
    if (startBtn) {
      const exerciseId = startBtn.dataset.id;
      if (!exerciseId) return;

      try {
        const exercise = await getExerciseById(exerciseId);
        renderExerciseModal(exercise);
        openModal('exercise-modal');
        setupExerciseModal(exerciseId);
      } catch (err) {
        console.error(`Failed to fetch exercise details for ${exerciseId}:`, err);
        alert('Failed to load exercise details. Please try again.');
      }
    }
  });
}


// Show exercises header with breadcrumb
function showExercisesHeader(categoryName) {
  const sectionTitle = document.getElementById('section-title');
  const searchForm = document.getElementById('exercise-search-form');
  
  if (sectionTitle) {
    sectionTitle.innerHTML = `Exercises / <span class="category-name">${categoryName}</span>`;
  }
  
  if (searchForm) {
    searchForm.classList.remove('hidden');
  }
}

// Hide exercises header
function hideExercisesHeader() {
  const sectionTitle = document.getElementById('section-title');
  const searchForm = document.getElementById('exercise-search-form');
  const searchInput = document.getElementById('exercise-search-input');
  const clearBtn = document.getElementById('exercise-clear-btn');
  
  if (sectionTitle) {
    sectionTitle.textContent = 'Exercises';
  }
  
  if (searchForm) {
    searchForm.classList.add('hidden');
  }
  
  // Clear search input and hide clear button
  if (searchInput) {
    searchInput.value = '';
  }
  
  if (clearBtn) {
    clearBtn.classList.add('hidden');
  }
}

// Setup exercise search
function setupExerciseSearch() {
  const searchForm = document.getElementById('exercise-search-form');
  const searchInput = document.getElementById('exercise-search-input');
  const clearBtn = document.getElementById('exercise-clear-btn');

  if (!searchForm || !searchInput) return;

  // Check if already has listener to prevent duplicates
  if (searchForm.dataset.listenerAttached === 'true') return;
  searchForm.dataset.listenerAttached = 'true';

  // Show/hide clear button based on input
  searchInput.addEventListener('input', () => {
    if (searchInput.value.trim()) {
      clearBtn.classList.remove('hidden');
    } else {
      clearBtn.classList.add('hidden');
    }
  });

  // Clear button click
  clearBtn.addEventListener('click', async () => {
    searchInput.value = '';
    clearBtn.classList.add('hidden');
    searchInput.focus();

    // Update state and re-fetch
    appState.keyword = '';
    appState.page = 1;

    try {
      await fetchAndRender();
    } catch (err) {
      console.error('Failed to fetch exercises:', err);
    }
  });

  // Search form submit
  searchForm.addEventListener('submit', async e => {
    e.preventDefault();

    const keyword = searchInput.value.trim();

    // Update state and re-fetch
    appState.keyword = keyword;
    appState.page = 1;

    try {
      await fetchAndRender();
    } catch (err) {
      console.error('Failed to search exercises:', err);
    }
  });
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
        alert('This exercise is already in your favorites');
      } else {
        const exercise = await getExerciseById(exerciseId);
        addFavorite(exercise);
        addToFavoritesBtn.innerHTML = `
          Added to favorites
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 3.5C10 3.5 6.5 1 3.5 3.5C0.5 6 2 10 10 16.5C18 10 19.5 6 16.5 3.5C13.5 1 10 3.5 10 3.5Z" fill="#242424" stroke="#242424" stroke-width="1.5"/>
          </svg>
        `;
        setTimeout(() => {
          addToFavoritesBtn.textContent = 'Add to favorites';
        }, 2000);
      }
    };

    if (isFavorite(exerciseId)) {
      addToFavoritesBtn.textContent = 'Already in favorites';
      addToFavoritesBtn.disabled = true;
      addToFavoritesBtn.style.opacity = '0.6';
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

      if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        emailInput?.classList.add('error');
        emailInput?.focus();
        return;
      }

      emailInput?.classList.remove('error');

      try {
        await updateRating(exerciseId, rating, email, review);
        alert('Rating submitted successfully!');
        hideRatingModal();

        const exercise = await getExerciseById(exerciseId);
        renderExerciseModal(exercise);
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
