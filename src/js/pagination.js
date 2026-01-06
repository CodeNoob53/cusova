/**
 * Pagination module
 * Handles pagination UI rendering and user interactions
 */

import { loadTemplate } from './dom.js';

/**
 * Render pagination controls
 * @param {number} currentPage - Current page number
 * @param {number} totalPages - Total number of pages
 * @param {string} containerId - ID of container element
 */
export const renderPagination = async (currentPage, totalPages, containerId = 'pagination-container') => {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (totalPages <= 1) {
    container.innerHTML = '';
    return;
  }

  // Load template if not exists
  if (!container.querySelector('.pagination')) {
    const template = await loadTemplate('pagination');
    container.innerHTML = template;
  }

  // Get navigation buttons from markup
  const firstBtn = container.querySelector('.pagination-first');
  const prevBtn = container.querySelector('.pagination-prev');
  const nextBtn = container.querySelector('.pagination-next');
  const lastBtn = container.querySelector('.pagination-last');
  const pagesContainer = container.querySelector('.pagination-nbrs');

  // Update navigation buttons state
  firstBtn.disabled = currentPage === 1;
  prevBtn.disabled = currentPage === 1;
  prevBtn.dataset.page = currentPage - 1;

  nextBtn.disabled = currentPage === totalPages;
  nextBtn.dataset.page = currentPage + 1;
  lastBtn.disabled = currentPage === totalPages;
  lastBtn.dataset.page = totalPages;

  // Generate pages array with ellipsis logic
  const pages = generatePageNumbers(currentPage, totalPages);

  // Build pages HTML
  const pagesHtml = pages
    .map(page => {
      if (page === '...') {
        return `<span class="pagination-dots">...</span>`;
      }
      return `<button class="pagination-number ${page === currentPage ? 'pagination-number--active' : ''}" data-page="${page}" ${page === currentPage ? 'disabled' : ''}>${page}</button>`;
    })
    .join('');

  pagesContainer.innerHTML = pagesHtml;
};

/**
 * Generate array of page numbers with ellipsis
 * Shows only 3 numbers: previous, current, next (without first and last)
 * @param {number} currentPage - Current page number
 * @param {number} totalPages - Total number of pages
 * @returns {Array} Array of page numbers and ellipsis
 */
function generatePageNumbers(currentPage, totalPages) {
  const pages = [];

  // If 3 or fewer pages, show all
  if (totalPages <= 3) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  // Determine which 3 numbers to show
  let start, end;

  if (currentPage === 1) {
    // Current is first: show 1, 2, 3
    start = 1;
    end = 3;
  } else if (currentPage === totalPages) {
    // Current is last: show (last-2), (last-1), last
    start = totalPages - 2;
    end = totalPages;
  } else {
    // Current in middle: show prev, current, next
    start = currentPage - 1;
    end = currentPage + 1;
  }

  // Add ellipsis before if needed
  if (start > 1) {
    pages.push('...');
  }

  // Add the 3 page numbers
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  // Add ellipsis after if needed
  if (end < totalPages) {
    pages.push('...');
  }

  return pages;
}

/**
 * Setup pagination event listeners
 * @param {Function} onPageChange - Callback function when page changes
 * @param {string} containerId - ID of container element
 */
export function setupPagination(onPageChange, containerId = 'pagination-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Check if already has listener to prevent duplicates
  if (container.dataset.listenerAttached === 'true') return;
  container.dataset.listenerAttached = 'true';

  container.addEventListener('click', e => {
    // Check for both pagination number buttons and navigation buttons
    const btn = e.target.closest('.pagination-number, .pagination-btn');

    // Verify target element is a button
    if (!btn) return;
    if (btn.nodeName !== 'BUTTON' && !btn.classList.contains('pagination-number')) return;
    if (btn.disabled || btn.classList.contains('pagination-dots')) return;

    const newPage = Number(btn.dataset.page);
    if (newPage && !isNaN(newPage)) {
      onPageChange(newPage);
    }
  });
}

/**
 * Scroll to top of content area
 * @param {string} targetId - ID of element to scroll to
 */
export function scrollToTop(targetId = 'exercises-header') {
  const target = document.getElementById(targetId);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  } else {
    document.querySelector('.exercises-section')?.scrollIntoView({ behavior: 'smooth' });
  }
}
