// Quote caching utilities

const QUOTE_STORAGE_KEY = 'quote-of-the-day';

/**
 * Get today's date in YYYY-MM-DD format
 */
function getTodayDate() {
  const today = new Date();
  return today.toISOString().split('T')[0];
}

/**
 * Get cached quote from localStorage
 * Returns null if no cache or cache is outdated
 */
export function getCachedQuote() {
  try {
    const cached = localStorage.getItem(QUOTE_STORAGE_KEY);
    if (!cached) return null;

    const { quote, author, date } = JSON.parse(cached);
    const today = getTodayDate();

    // Check if cache is from today
    if (date === today) {
      return { quote, author };
    }

    // Cache is outdated, remove it
    localStorage.removeItem(QUOTE_STORAGE_KEY);
    return null;
  } catch (error) {
    console.error('Error reading cached quote:', error);
    return null;
  }
}

/**
 * Save quote to localStorage with current date
 */
export function cacheQuote(quote, author) {
  try {
    const data = {
      quote,
      author,
      date: getTodayDate(),
    };
    localStorage.setItem(QUOTE_STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error caching quote:', error);
  }
}
