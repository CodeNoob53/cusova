// Modal management functions
export const openModal = modalId => {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  }
};

export const closeModal = modalId => {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }
};

// Render exercise details in modal
export const renderExerciseModal = exercise => {
  if (!exercise) return;

  // Update GIF
  const gifElement = document.getElementById('modal-exercise-gif');
  if (gifElement) {
    gifElement.src = exercise.gifUrl || '';
    gifElement.alt = exercise.name || 'Exercise';
  }

  // Update title
  const titleElement = document.getElementById('modal-exercise-title');
  if (titleElement) {
    titleElement.textContent = exercise.name || 'Exercise';
  }

  // Update rating
  const ratingElement = document.getElementById('modal-exercise-rating');
  if (ratingElement) {
    const rating = exercise.rating || 0;
    const fullStars = Math.floor(rating);

    ratingElement.innerHTML = `
      <span class="rating-value">${rating.toFixed(1)}</span>
      <div class="rating-stars">
        ${Array.from({ length: 5 }, (_, i) => {
          const filled = i < fullStars ? 'filled' : '';
          const fillColor = filled ? '#EEA10C' : 'rgba(244, 244, 244, 0.2)';
          return `<svg class="star ${filled}" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 1.5L11.3175 6.195L16.5 6.9525L12.75 10.605L13.635 15.765L9 13.3275L4.365 15.765L5.25 10.605L1.5 6.9525L6.6825 6.195L9 1.5Z" fill="${fillColor}"/>
          </svg>`;
        }).join('')}
      </div>
    `;
  }

  // Update details
  const targetElement = document.getElementById('modal-target');
  if (targetElement) targetElement.textContent = exercise.target || 'N/A';

  const bodyPartElement = document.getElementById('modal-bodypart');
  if (bodyPartElement) bodyPartElement.textContent = exercise.bodyPart || 'N/A';

  const equipmentElement = document.getElementById('modal-equipment');
  if (equipmentElement) equipmentElement.textContent = exercise.equipment || 'N/A';

  const popularElement = document.getElementById('modal-popular');
  if (popularElement) popularElement.textContent = exercise.popularity || '0';

  const caloriesElement = document.getElementById('modal-calories');
  if (caloriesElement) {
    caloriesElement.textContent = `${exercise.burnedCalories || 0}/${exercise.time || 0} min`;
  }

  // Update description
  const descriptionElement = document.getElementById('modal-description');
  if (descriptionElement) {
    descriptionElement.textContent = exercise.description || 'No description available.';
  }

  // Store exercise ID for later use (favorites, rating)
  const modal = document.getElementById('exercise-modal');
  if (modal) {
    modal.dataset.exerciseId = exercise._id;
  }
};

// Show rating modal
export const showRatingModal = () => {
  closeModal('exercise-modal');
  openModal('rating-modal');
  resetRatingForm();
  initRatingStars();
};

// Hide rating modal and reopen exercise modal
export const hideRatingModal = () => {
  closeModal('rating-modal');
  openModal('exercise-modal');
  resetRatingForm();
};

// Reset rating form
const resetRatingForm = () => {
  const stars = document.querySelectorAll('#rating-modal .rating-star');
  const ratingValue = document.getElementById('rating-display-value');
  const emailInput = document.getElementById('rating-email');
  const reviewInput = document.getElementById('rating-review');

  stars.forEach(star => star.classList.remove('active'));
  if (ratingValue) ratingValue.textContent = '0.0';
  if (emailInput) {
    emailInput.value = '';
    emailInput.classList.remove('error');
  }
  if (reviewInput) reviewInput.value = '';
};

// Initialize rating stars interaction
export const initRatingStars = () => {
  const stars = document.querySelectorAll('#rating-modal .rating-star');
  const ratingValue = document.getElementById('rating-display-value');
  let selectedRating = 0;

  // Remove old event listeners by cloning elements
  stars.forEach((star, index) => {
    const newStar = star.cloneNode(true);
    star.parentNode.replaceChild(newStar, star);
  });

  // Get fresh references after cloning
  const freshStars = document.querySelectorAll('#rating-modal .rating-star');

  freshStars.forEach((star, index) => {
    star.addEventListener('click', () => {
      selectedRating = parseFloat(star.dataset.rating);

      // Update visual feedback
      freshStars.forEach((s, i) => {
        if (i <= index) {
          s.classList.add('active');
        } else {
          s.classList.remove('active');
        }
      });

      // Update rating value display
      if (ratingValue) {
        ratingValue.textContent = selectedRating.toFixed(1);
      }
    });

    // Hover effect
    star.addEventListener('mouseenter', () => {
      freshStars.forEach((s, i) => {
        if (i <= index) {
          s.classList.add('hover');
        } else {
          s.classList.remove('hover');
        }
      });
    });
  });

  // Reset hover effect on mouse leave
  const starsContainer = document.getElementById('rating-stars');
  if (starsContainer) {
    // Remove old listener
    const newContainer = starsContainer.cloneNode(true);
    starsContainer.parentNode.replaceChild(newContainer, starsContainer);

    const freshContainer = document.getElementById('rating-stars');
    freshContainer.addEventListener('mouseleave', () => {
      const stars = document.querySelectorAll('#rating-modal .rating-star');
      stars.forEach(star => star.classList.remove('hover'));
    });
  }

  return () => selectedRating;
};

// Get current rating value
export const getCurrentRating = () => {
  const ratingValue = document.getElementById('rating-display-value');
  return ratingValue ? parseFloat(ratingValue.textContent) : 0;
};

// Validate email using pattern from specification
// Imported from utils.js
