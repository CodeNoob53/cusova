# CSS Architecture

Стилі проєкту розділені на модульні компоненти для кращої підтримки та читабельності.

## Структура файлів

### Основні файли
- **main.css** - головний файл з імпортами всіх стилів
- **fonts.css** - підключення шрифтів
- **variables.css** - CSS змінні (кольори, відступи, шрифти)

### Базові стилі
- **base.css** - reset стилів, базові елементи (body, img, a, button), container, utility classes

### Компоненти
- **header.css** - шапка сайту, навігація, соціальні мережі
- **hero.css** - hero секція на головній сторінці
- **filters.css** - фільтри категорій
- **categories.css** - картки категорій та вправ
- **quote.css** - картка цитати дня
- **info-card.css** - інформаційна картка
- **sidebar.css** - сайдбар і картка зображення
- **pagination.css** - пагінація
- **footer.css** - футер сайту

### Сторінки
- **exercises.css** - стилі для списку вправ
- **favorites.css** - стилі для сторінки улюблених
- **modal.css** - модальні вікна (вправа, рейтинг)

### Layout
- **layout.css** - grid layout для main-content і sidebar

## Порядок імпортів в main.css

```css
1. fonts.css           - шрифти
2. variables.css       - змінні
3. base.css           - базові стилі
4. header.css         - хедер
5. hero.css           - hero
6. filters.css        - фільтри
7. layout.css         - лейаут
8. quote.css          - цитата
9. info-card.css      - інфо картка
10. sidebar.css       - сайдбар
11. categories.css    - категорії
12. exercises.css     - вправи
13. pagination.css    - пагінація
14. footer.css        - футер
15. favorites.css     - улюблені
16. modal.css         - модальні вікна
```

## Принципи організації

1. **Модульність** - кожен компонент в окремому файлі
2. **Один компонент = один файл** - легше знайти і змінити
3. **Логічне групування** - споріднені стилі разом
4. **Responsive** - media queries в тому ж файлі, де і основні стилі
5. **BEM naming** - де можливо, використовуємо BEM методологію

## Підтримка

Для перевірки стилів:
```bash
yarn lint:css          # перевірка
yarn lint:css:fix      # автовиправлення
yarn format            # форматування prettier
```
