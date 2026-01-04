# JavaScript Architecture

Проєкт використовує одну точку входу (`main.js`) для всіх сторінок з динамічним завантаженням модулів.

## Структура файлів

### Точка входу
- **main.js** - єдина точка входу для всіх сторінок
  - Визначає поточну сторінку (home або favorites)
  - Динамічно завантажує відповідну логіку
  - Містить логіку для home сторінки
  - Спільні функції для модальних вікон

### Модулі ініціалізації
- **init-favorites.js** - ініціалізація сторінки favorites
  - Template loading & rendering
  - Favorites management
  - Modal setup для favorites сторінки

### Утиліти та API
- **api.js** - всі HTTP запити до backend
  - `getQuote()` - цитата дня
  - `getFilters()` - фільтри категорій
  - `getExercises()` - список вправ
  - `getExerciseById()` - деталі вправи
  - `updateRating()` - оцінка вправи
  - `subscribe()` - підписка на розсилку

- **dom.js** - рендеринг компонентів
  - `renderQuote()` - відображення цитати
  - `renderCategories()` - відображення категорій
  - `renderExercises()` - відображення вправ
  - `renderSidebarImage()` - відображення зображення в сайдбарі
  - `renderInfoCard()` - відображення інфо картки
  - `renderPagination()` - відображення пагінації

- **favorites.js** - управління улюбленими вправами (localStorage)
  - `getFavorites()` - отримати всі улюблені
  - `addFavorite()` - додати до улюблених
  - `removeFavorite()` - видалити з улюблених
  - `isFavorite()` - перевірити чи є в улюблених
  - `toggleFavorite()` - toggle статус

- **modal.js** - управління модальними вікнами
  - `openModal()` - відкрити модальне вікно
  - `closeModal()` - закрити модальне вікно
  - `renderExerciseModal()` - рендер модального вікна вправи
  - `showRatingModal()` - показати форму оцінки
  - `hideRatingModal()` - сховати форму оцінки
  - `getCurrentRating()` - отримати поточну оцінку
  - `validateEmail()` - валідація email
  - `initRatingStars()` - ініціалізація зірок рейтингу

- **nav.js** - активна навігація (підсвічування поточної сторінки)

## Принципи організації

### 1. Єдина точка входу
Всі HTML файли використовують `main.js` як точку входу:
\`\`\`html
<script type="module" src="./main.js"></script>
\`\`\`

### 2. Динамічне завантаження
`main.js` визначає сторінку та завантажує відповідний модуль:
\`\`\`javascript
const isFavoritesPage = document.querySelector('.favorites-page');
if (isFavoritesPage) {
  const { initFavoritesPage } = await import('./js/init-favorites.js');
  await initFavoritesPage();
} else {
  await initApp(); // home page
}
\`\`\`

### 3. Модульність
- Кожен модуль має чітку відповідальність
- Використання ES6 modules (import/export)
- Lazy loading для оптимізації

### 4. Розділення відповідальності
- **API** - тільки HTTP запити
- **DOM** - тільки рендеринг
- **Modal** - тільки модальні вікна
- **Favorites** - тільки localStorage операції
- **Init modules** - тільки ініціалізація сторінок

## Потік даних

\`\`\`
main.js
  ├─> index.html (home)
  │     └─> initApp()
  │           ├─> api.js (fetch data)
  │           ├─> dom.js (render)
  │           └─> modal.js (interactions)
  │
  └─> favorites.html
        └─> init-favorites.js
              ├─> favorites.js (localStorage)
              ├─> api.js (fetch data)
              ├─> dom.js (render)
              └─> modal.js (interactions)
\`\`\`

## Додавання нової сторінки

1. Створіть HTML файл з унікальним класом (напр. `.new-page`)
2. Додайте `<script type="module" src="./main.js"></script>`
3. Створіть `src/js/init-new-page.js` з експортом `initNewPage()`
4. Оновіть `initPage()` в `main.js`:
\`\`\`javascript
const isNewPage = document.querySelector('.new-page');
if (isNewPage) {
  const { initNewPage } = await import('./js/init-new-page.js');
  await initNewPage();
}
\`\`\`

## Переваги структури

✅ Одна точка входу для всіх сторінок
✅ Lazy loading - завантаження тільки потрібного коду
✅ Модульність - легко підтримувати
✅ Переиспользуваність - спільні утиліти
✅ Чіткі відповідальності - легко знайти код
