import Navigo from 'navigo';

// Initialize router
const router = new Navigo('/', { hash: false });

// Process <load> tags in HTML
async function processLoadTags(html) {
  const loadRegex = /<load\s+src="([^"]+)"\s*\/>/g;
  let match;
  const promises = [];
  const replacements = [];

  while ((match = loadRegex.exec(html)) !== null) {
    const fullMatch = match[0];
    const src = match[1];

    promises.push(
      fetch(`/${src}`)
        .then(res => res.text())
        .then(content => ({ fullMatch, content }))
        .catch(err => {
          console.error(`Failed to load ${src}:`, err);
          return { fullMatch, content: `<!-- Failed to load ${src} -->` };
        })
    );
  }

  const results = await Promise.all(promises);

  let processedHtml = html;
  for (const { fullMatch, content } of results) {
    processedHtml = processedHtml.replace(fullMatch, content);
  }

  return processedHtml;
}

// Load view HTML into #app
async function loadView(viewName) {
  const app = document.getElementById('app');
  if (!app) return;

  try {
    const response = await fetch(`/partials/${viewName}-page.html`);
    let html = await response.text();

    // Process <load> tags
    html = await processLoadTags(html);

    app.innerHTML = html;
  } catch (error) {
    console.error(`Failed to load view: ${viewName}`, error);
    app.innerHTML = '<h1>Page not found</h1>';
  }
}

// Export router instance
export { router, loadView };
