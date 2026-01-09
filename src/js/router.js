import Navigo from 'navigo';

// Import pages and partials as raw strings
import homePageHtml from '../partials/home-page.html?raw';
import favoritesPageHtml from '../partials/favorites-page.html?raw';

import heroHtml from '../partials/hero.html?raw';
import filtersHtml from '../partials/filters.html?raw';
import quoteHtml from '../partials/quote.html?raw';
import sidebarImageHtml from '../partials/sidebar-image.html?raw';
import infoCardHtml from '../partials/info-card.html?raw';

// Initialize router with base path for GitHub Pages
// In production (GitHub Pages), the base is '/cusova/', in dev it's '/'
const basePath = import.meta.env.BASE_URL || '/';
const router = new Navigo(basePath, { hash: false });

// Map of view names to their raw HTML content
const routes = {
  home: homePageHtml,
  favorites: favoritesPageHtml,
};

// Map of partial paths (as used in <load src="...">) to their raw HTML content
const partials = {
  'partials/hero.html': heroHtml,
  'partials/filters.html': filtersHtml,
  'partials/quote.html': quoteHtml,
  'partials/sidebar-image.html': sidebarImageHtml,
  'partials/info-card.html': infoCardHtml,
};

// Process <load> tags in HTML synchronously
function processLoadTags(html) {
  const loadRegex = /<load\s+src="([^"]+)"\s*\/>/g;
  return html.replace(loadRegex, (match, src) => {
    if (partials[src]) {
      return partials[src];
    }
    console.warn(`Partial not found: ${src}`);
    return `<!-- Failed to load ${src} -->`;
  });
}

// Fix image paths to include base path for production
function fixImagePaths(html) {
  // Only fix paths in production (when basePath is not '/')
  if (basePath === '/') return html;

  // Fix src="/img/..." to src="/cusova/img/..."
  html = html.replace(/src="\/img\//g, `src="${basePath}img/`);

  // Fix srcset="/img/..." to srcset="/cusova/img/..."
  html = html.replace(/srcset="\s*\/img\//g, `srcset="${basePath}img/`);

  // Fix srcset with multiple sources like: /img/avif/mobile.avif 1x, /img/avif/mobile@2x.avif 2x
  html = html.replace(/srcset="([^"]*)"/g, (match, content) => {
    const fixed = content.replace(/\/img\//g, `${basePath}img/`);
    return `srcset="${fixed}"`;
  });

  return html;
}

// Load view HTML into #app
async function loadView(viewName) {
  const app = document.getElementById('app');
  if (!app) return;

  const html = routes[viewName];
  if (!html) {
    app.innerHTML = '<h1>Page not found</h1>';
    return;
  }

  // Process <load> tags synchronously
  let processedHtml = processLoadTags(html);

  // Fix image paths for production
  processedHtml = fixImagePaths(processedHtml);

  app.innerHTML = processedHtml;
}

// Export router instance
export { router, loadView };
