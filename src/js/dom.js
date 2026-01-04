// Cache for loaded templates
const templateCache = {};

/**
 * Load template from partials folder
 * @param {string} templateName
 * @returns {Promise<string>}
 */
export const loadTemplate = async templateName => {
  if (templateCache[templateName]) {
    return templateCache[templateName];
  }

  try {
    const response = await fetch(`./partials/${templateName}.html`);
    const template = await response.text();
    templateCache[templateName] = template;
    return template;
  } catch (error) {
    console.error(`Error loading template ${templateName}:`, error);
    return '';
  }
};

/**
 * Replace placeholders in template with data
 * @param {string} template
 * @param {object} data
 * @returns {string}
 */
export const replacePlaceholders = (template, data) => {
  return template.replace(/\{\{(\w+)\}\}/g, (_match, key) => {
    return data[key] !== undefined ? data[key] : '';
  });
};

export const renderQuote = quoteData => {
  const quoteText = document.getElementById('quote-text');
  const quoteAuthor = document.getElementById('quote-author');

  if (quoteText && quoteData.quote) {
    quoteText.textContent = quoteData.quote;
  }
  if (quoteAuthor && quoteData.author) {
    quoteAuthor.textContent = quoteData.author;
  }
};

export const renderExercises = async (exercises, containerId) => {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (exercises.length === 0) {
    container.innerHTML = '<p class="no-results">No exercises found. Try another filter.</p>';
    return;
  }

  const template = await loadTemplate('exercise-card');

  const exercisesHtml = exercises
    .map(exercise => {
      return replacePlaceholders(template, {
        id: exercise._id,
        rating: exercise.rating || 0,
        ratingFormatted: exercise.rating ? exercise.rating.toFixed(1) : '0.0',
        name: exercise.name,
        burnedCalories: exercise.burnedCalories || 0,
        time: exercise.time || 0,
        bodyPart: exercise.bodyPart || 'N/A',
        target: exercise.target || 'N/A',
      });
    })
    .join('');

  container.innerHTML = `<div class="exercises-grid">${exercisesHtml}</div>`;
};

export const renderCategories = async (categories, containerId) => {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (categories.length === 0) {
    container.innerHTML = '<p class="no-results">No categories found.</p>';
    return;
  }

  const template = await loadTemplate('category-card');

  const categoriesHtml = categories
    .map(cat => {
      return replacePlaceholders(template, {
        filter: cat.filter,
        name: cat.name,
        imgURL: cat.imgURL || '',
      });
    })
    .join('');

  container.innerHTML = `<div class="categories-grid">${categoriesHtml}</div>`;
};

export const renderPagination = async (currentPage, totalPages) => {
  const container = document.getElementById('pagination-container');
  if (!container || totalPages <= 1) {
    container.innerHTML = '';
    return;
  }

  // Generate pages array with ellipsis logic
  let pages = [];

  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    // Always add 1
    pages.push(1);

    if (currentPage > 3) {
      pages.push('...');
    }

    // Neighbors
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      if (i > 1 && i < totalPages) pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push('...');
    }

    // Always add last
    if (totalPages > 1) {
      pages.push(totalPages);
    }
  }

  // Remove duplicates
  pages = [...new Set(pages)];

  // Build navigation buttons
  const firstBtn = `<button class="pagination__nav-btn" data-page="1" ${currentPage === 1 ? 'disabled' : ''} aria-label="Перша сторінка">««</button>`;
  const prevBtn = `<button class="pagination__nav-btn" data-page="${currentPage - 1}" ${currentPage === 1 ? 'disabled' : ''} aria-label="Попередня сторінка">‹</button>`;

  const pagesHtml = pages
    .map(page => {
      if (page === '...') {
        return `<span class="page-number dots">...</span>`;
      }
      return `<button class="page-number ${page === currentPage ? 'active' : ''}" data-page="${page}" ${page === currentPage ? 'disabled' : ''}>${page}</button>`;
    })
    .join('');

  const nextBtn = `<button class="pagination__nav-btn" data-page="${currentPage + 1}" ${currentPage === totalPages ? 'disabled' : ''} aria-label="Наступна сторінка">›</button>`;
  const lastBtn = `<button class="pagination__nav-btn" data-page="${totalPages}" ${currentPage === totalPages ? 'disabled' : ''} aria-label="Остання сторінка">»»</button>`;

  const template = await loadTemplate('pagination');
  const html = replacePlaceholders(template, { pages: `${firstBtn}${prevBtn}${pagesHtml}${nextBtn}${lastBtn}` });

  container.innerHTML = html;
};
