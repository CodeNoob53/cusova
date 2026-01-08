import{N as J,a as K}from"./assets/vendor-BFQQak21.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();const Z=`<load src="partials/hero.html" />\r
\r
<div>\r
  <load src="partials/filters.html" />\r
\r
  <div class="main-content">\r
    <aside class="sidebar">\r
      <load src="partials/quote.html" />\r
      <load src="partials/sidebar-image.html" />\r
      <load src="partials/info-card.html" />\r
    </aside>\r
\r
    <section class="content-area">\r
      <section id="exercises-container" aria-live="polite" aria-busy="false">\r
        <ul class="categories-grid">\r
          <li class="category-skeleton skeleton-shimmer"></li>\r
          <li class="category-skeleton skeleton-shimmer"></li>\r
          <li class="category-skeleton skeleton-shimmer"></li>\r
          <li class="category-skeleton skeleton-shimmer"></li>\r
          <li class="category-skeleton skeleton-shimmer"></li>\r
          <li class="category-skeleton skeleton-shimmer"></li>\r
          <li class="category-skeleton skeleton-shimmer"></li>\r
          <li class="category-skeleton skeleton-shimmer"></li>\r
          <li class="category-skeleton skeleton-shimmer"></li>\r
          <li class="category-skeleton skeleton-shimmer"></li>\r
          <li class="category-skeleton skeleton-shimmer"></li>\r
          <li class="category-skeleton skeleton-shimmer"></li>\r
        </ul>\r
      </section>\r
      <nav id="pagination-container" aria-label="Pagination" role="navigation">\r
        <!-- Pagination will be injected here -->\r
      </nav>\r
    </section>\r
  </div>\r
</div>\r
`,G=`<section class="favorites-page section">\r
  <div class="container favorites-container-wrapper">\r
    \r
    <div class="favorites-content-wrapper">\r
      <!-- Left side: Quote + Info + Image -->\r
      <aside class="favorites-aside">\r
         <load src="partials/quote.html" />\r
         \r
         <div class="favorites-aside-bottom">\r
            <!-- Simplified inline Info Card for Favorites -->\r
            <div class="info-card favorites-info-card">\r
              <div class="info-header">\r
                <span class="info-icon">\r
                  <svg width="20" height="20" aria-hidden="true">\r
                    <use href="#icon-info"></use>\r
                  </svg>\r
                </span>\r
                <div class="info-content">\r
                  <div class="info-time">\r
                    <div class="info-time-value">110 min</div>\r
                    <div class="info-time-label">Daily norm of sports</div>\r
                  </div>\r
                  <!-- No text paragraph here for favorites -->\r
                </div>\r
              </div>\r
            </div>\r
            <!-- Sidebar Image (Inline for Favorites specific styles) -->\r
            <div class="favorites-sidebar-image">\r
              <picture>\r
                <!-- Mobile: до 767px -->\r
                <source\r
                  media="(max-width: 767px)"\r
                  type="image/avif"\r
                  srcset="\r
                    ./img/avif/mobile_fav_sitebar_img.avif 1x,\r
                    ./img/avif/mobile_fav_sitebar_img@2x.avif 2x,\r
                    ./img/avif/mobile_fav_sitebar_img@3x.avif 3x\r
                  "\r
                />\r
                <source\r
                  media="(max-width: 767px)"\r
                  type="image/jpeg"\r
                  srcset="\r
                    ./img/mobile_fav_sitebar_img.jpg 1x,\r
                    ./img/mobile_fav_sitebar_img@2x.jpg 2x,\r
                    ./img/mobile_fav_sitebar_img@3x.jpg 3x\r
                  "\r
                />\r
\r
                <!-- Tablet: 768px - 1279px -->\r
                <source\r
                  media="(min-width: 768px) and (max-width: 1279px)"\r
                  type="image/avif"\r
                  srcset="\r
                    ./img/avif/tab_fav_sitebar_img.avif 1x,\r
                    ./img/avif/tab_fav_sitebar_img@2x.avif 2x,\r
                    ./img/avif/tab_fav_sitebar_img@3x.avif 3x\r
                  "\r
                />\r
                <source\r
                  media="(min-width: 768px) and (max-width: 1279px)"\r
                  type="image/jpeg"\r
                  srcset="\r
                    ./img/tab_fav_sitebar_img.jpg 1x,\r
                    ./img/tab_fav_sitebar_img@2x.jpg 2x,\r
                    ./img/tab_fav_sitebar_img@3x.jpg 3x\r
                  "\r
                />\r
\r
                <!-- Desktop: від 1280px -->\r
                <source\r
                  media="(min-width: 1280px)"\r
                  type="image/avif"\r
                  srcset="\r
                    ./img/avif/desc_fav_sitebar_img.avif 1x,\r
                    ./img/avif/desc_fav_sitebar_img@2x.avif 2x,\r
                    ./img/avif/desc_fav_sitebar_img@3x.avif 3x\r
                  "\r
                />\r
                <source\r
                  media="(min-width: 1280px)"\r
                  type="image/jpeg"\r
                  srcset="\r
                    ./img/desc_fav_sitebar_img.jpg 1x,\r
                    ./img/desc_fav_sitebar_img@2x.jpg 2x,\r
                    ./img/desc_fav_sitebar_img@3x.jpg 3x\r
                  "\r
                />\r
\r
                <img src="./img/desc_fav_sitebar_img.jpg" alt="Women doing sports" class="sidebar-image" width="335" height="571" loading="lazy" />\r
              </picture>\r
            </div>\r
         </div>\r
      </aside>\r
\r
      <!-- Right side: Favorites List -->\r
      <div class="favorites-list-container">\r
        <!-- Title "Favorites" is now part of the structure or can be outside? \r
             Design shows "Favorites" above the list? No, "Favorites" title is top left of the PAGE.\r
             Wait, looking at Screenshot 2:\r
             Row 1: Title "Favorites"\r
             Row 2: Left Col (Quote...), Right Col (List)\r
             So Title should be OUTSIDE the wrapper if it spans width, OR inside the wrapper if it aligns with something.\r
             Let's put Title above the wrapper.\r
        -->\r
         <h2 class="section-title">Favorites</h2>\r
         \r
        <section id="favorites-container" class="favorites-list" aria-live="polite" aria-busy="false">\r
          <!-- Favorite cards will be rendered here -->\r
        </section>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
`,Y=`<section class="hero-wrapper">\r
  <div class="hero">\r
    <div class="hero-content">\r
      <div class="hero-title-wrapper">\r
        <img src="./img/star-icon.svg" alt="" class="hero-star-icon" />\r
        <h1 class="hero-title">Get <span class="accent-text">Body</span> in shape, Stay healthy</h1>\r
      </div>\r
      <p class="hero-description">\r
        Transform your physique and embrace a healthier lifestyle with our comprehensive fitness and\r
        nutrition support.\r
      </p>\r
    </div>\r
    <div class="hero-right">\r
      <picture>\r
        <!-- Desktop: від 1280px (на mobile та tablet hero-right не відображається) -->\r
        <source\r
          type="image/avif"\r
          srcset="\r
            ./img/avif/desc_hero_on_tag.avif 1x,\r
            ./img/avif/desc_hero_on_tag@2x.avif 2x,\r
            ./img/avif/desc_hero_on_tag@3x.avif 3x\r
          "\r
        />\r
        <source\r
          type="image/jpeg"\r
          srcset="\r
            ./img/desc_hero_on_tag.jpg 1x,\r
            ./img/desc_hero_on_tag@2x.jpg 2x,\r
            ./img/desc_hero_on_tag@3x.jpg 3x\r
          "\r
        />\r
\r
        <img\r
          src="./img/desc_hero_on_tag.jpg"\r
          alt="Workout"\r
          class="hero-img-small"\r
          width="168"\r
          height="100"\r
          loading="lazy"\r
        />\r
      </picture>\r
      <div class="hero-tags">\r
        <div class="hero-tag-line">\r
          <span class="tag">#Sport</span>\r
          <span class="tag">#Healthy</span>\r
        </div>\r
        <div class="hero-tag-line">\r
          <span class="tag">#Workout</span>\r
          <span class="tag">#Diet</span>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
  <div class="hero-image-wrapper">\r
    <picture>\r
      <!-- Mobile: до 767px -->\r
      <source\r
        media="(max-width: 767px)"\r
        type="image/avif"\r
        srcset="\r
          ./img/avif/mobile_hero_main.avif 1x,\r
          ./img/avif/mobile_hero_main@2x.avif 2x,\r
          ./img/avif/mobile_hero_main@3x.avif 3x\r
        "\r
      />\r
      <source\r
        media="(max-width: 767px)"\r
        type="image/jpeg"\r
        srcset="\r
          ./img/mobile_hero_main.jpg 1x,\r
          ./img/mobile_hero_main@2x.jpg 2x,\r
          ./img/mobile_hero_main@3x.jpg 3x\r
        "\r
      />\r
\r
      <!-- Tablet: 768px - 1279px -->\r
      <source\r
        media="(min-width: 768px) and (max-width: 1279px)"\r
        type="image/avif"\r
        srcset="\r
          ./img/avif/tab_hero_main.avif 1x,\r
          ./img/avif/tab_hero_main@2x.avif 2x,\r
          ./img/avif/tab_hero_main@3x.avif 3x\r
        "\r
      />\r
      <source\r
        media="(min-width: 768px) and (max-width: 1279px)"\r
        type="image/jpeg"\r
        srcset="\r
          ./img/tab_hero_main.jpg 1x,\r
          ./img/tab_hero_main@2x.jpg 2x,\r
          ./img/tab_hero_main@3x.jpg 3x\r
        "\r
      />\r
\r
      <!-- Desktop: від 1280px -->\r
      <source\r
        media="(min-width: 1280px)"\r
        type="image/avif"\r
        srcset="\r
          ./img/avif/desc_hero_main.avif 1x,\r
          ./img/avif/desc_hero_main@2x.avif 2x,\r
          ./img/avif/desc_hero_main@3x.avif 3x\r
        "\r
      />\r
      <source\r
        media="(min-width: 1280px)"\r
        type="image/jpeg"\r
        srcset="\r
          ./img/desc_hero_main.jpg 1x,\r
          ./img/desc_hero_main@2x.jpg 2x,\r
          ./img/desc_hero_main@3x.jpg 3x\r
        "\r
      />\r
\r
      <img\r
        src="./img/desc_hero_main.jpg"\r
        alt="Working out together"\r
        class="hero-img-large"\r
        width="1376"\r
        height="574"\r
        loading="eager"\r
        fetchpriority="high"\r
      />\r
    </picture>\r
  </div>\r
</section>\r
`,X=`<section class="filters-section">
  <div class="filters-header">
    <h2 class="section-title" id="section-title">Exercises</h2>
    <div class="filters-controls">
      <form id="exercise-search-form" class="exercise-search-form hidden">
        <input
          type="text"
          id="exercise-search-input"
          class="exercise-search-input"
          placeholder="Search"
          aria-label="Search exercises"
        />
        <button type="button" class="exercise-clear-btn hidden" id="exercise-clear-btn" aria-label="Clear search">
          <svg width="18" height="18" aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use href="#icon-close"></use>
          </svg>
        </button>
        <button type="submit" class="exercise-search-btn" aria-label="Search">
          <svg width="18" height="18" aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use href="#icon-search"></use>
          </svg>
        </button>
      </form>
      <div id="filter-tabs" class="filter-tabs">
        <button class="filter-tab active" data-filter="Muscles">Muscles</button>
        <button class="filter-tab" data-filter="Body parts">Body parts</button>
        <button class="filter-tab" data-filter="Equipment">Equipment</button>
      </div>
    </div>
  </div>
</section>
`,ee=`<div class="quote-card">
  <div class="quote-header">
    <span class="quote-icon">
      <svg width="20" height="20" aria-hidden="true">
        <use href="#icon-quote"></use>
      </svg>
    </span>
    <div class="quote-content">
      <h3 class="quote-title">Quote of the day</h3>
      <p id="quote-text" class="quote-text">
        A lot of times I find that people who are blessed with the most talent don't ever develop
        that attitude, and the ones who aren't blessed in that way are the most competitive and have
        the biggest heart.
      </p>
    </div>
  </div>
  <p id="quote-author" class="quote-author">Tom Brady</p>
</div>
`,te=`<div class="sidebar-image-card">\r
  <picture>\r
    <!-- Mobile: до 767px -->\r
    <source\r
      media="(max-width: 767px)"\r
      type="image/avif"\r
      srcset="\r
        ./img/avif/mobile_sitebar_img.avif 1x,\r
        ./img/avif/mobile_sitebar_img@2x.avif 2x,\r
        ./img/avif/mobile_sitebar_img@3x.avif 3x\r
      "\r
    />\r
    <source\r
      media="(max-width: 767px)"\r
      type="image/jpeg"\r
      srcset="\r
        ./img/mobile_sitebar_img.jpg 1x,\r
        ./img/mobile_sitebar_img@2x.jpg 2x,\r
        ./img/mobile_sitebar_img@3x.jpg 3x\r
      "\r
    />\r
\r
    <!-- Tablet: 768px - 1279px -->\r
    <source\r
      media="(min-width: 768px) and (max-width: 1279px)"\r
      type="image/avif"\r
      srcset="\r
        ./img/avif/tab_sitebar_img.avif 1x,\r
        ./img/avif/tab_sitebar_img@2x.avif 2x,\r
        ./img/avif/tab_sitebar_img@3x.avif 3x\r
      "\r
    />\r
    <source\r
      media="(min-width: 768px) and (max-width: 1279px)"\r
      type="image/jpeg"\r
      srcset="\r
        ./img/tab_sitebar_img.jpg 1x,\r
        ./img/tab_sitebar_img@2x.jpg 2x,\r
        ./img/tab_sitebar_img@3x.jpg 3x\r
      "\r
    />\r
\r
    <!-- Desktop: від 1280px -->\r
    <source\r
      media="(min-width: 1280px)"\r
      type="image/avif"\r
      srcset="\r
        ./img/avif/desc_sitebar_img.avif 1x,\r
        ./img/avif/desc_sitebar_img@2x.avif 2x,\r
        ./img/avif/desc_sitebar_img@3x.avif 3x\r
      "\r
    />\r
    <source\r
      media="(min-width: 1280px)"\r
      type="image/jpeg"\r
      srcset="\r
        ./img/desc_sitebar_img.jpg 1x,\r
        ./img/desc_sitebar_img@2x.jpg 2x,\r
        ./img/desc_sitebar_img@3x.jpg 3x\r
      "\r
    />\r
\r
    <img src="./img/desc_sitebar_img.jpg" alt="Women doing sports" class="sidebar-image" width="335" height="571" loading="lazy" />\r
  </picture>\r
</div>\r
`,ne=`<div class="info-card">
  <div class="info-header">
    <span class="info-icon">
      <svg width="20" height="20" aria-hidden="true">
        <use href="#icon-info"></use>
      </svg>
    </span>
    <div class="info-content">
      <div class="info-time">
        <div class="info-time-value">110 min</div>
        <div class="info-time-label">Daily norm of sports</div>
      </div>
      <p class="info-text">
        The World Health Organization recommends at least 150 minutes of moderate-intensity aerobic
        physical activity throughout the week for adults aged 18-64. However, what happens if we
        adjust that number to 110 minutes every day? While it might seem like a high number to hit,
        dedicating 110 minutes daily to sporting activities may offer unparalleled benefits to
        physical health, mental well-being, and overall quality of life.
      </p>
    </div>
  </div>
</div>
`,x=new J("/",{hash:!1}),re={home:Z,favorites:G},q={"partials/hero.html":Y,"partials/filters.html":X,"partials/quote.html":ee,"partials/sidebar-image.html":te,"partials/info-card.html":ne};function ie(e){const t=/<load\s+src="([^"]+)"\s*\/>/g;return e.replace(t,(n,r)=>q[r]?q[r]:(console.warn(`Partial not found: ${r}`),`<!-- Failed to load ${r} -->`))}async function k(e){const t=document.getElementById("app");if(!t)return;const n=re[e];if(!n){t.innerHTML="<h1>Page not found</h1>";return}const r=ie(n);t.innerHTML=r}const ae="https://your-energy.b.goit.study/api",p=K.create({baseURL:ae}),se=async()=>{const{data:e}=await p.get("/quote");return e},oe=async({filter:e,page:t=1,limit:n=12})=>{const{data:r}=await p.get("/filters",{params:{filter:e,page:t,limit:n}});return r},ce=async({bodypart:e,muscles:t,equipment:n,keyword:r,page:i=1,limit:a=10})=>{const s={page:i,limit:a};e&&(s.bodypart=e),t&&(s.muscles=t),n&&(s.equipment=n),r&&(s.keyword=r);const{data:c}=await p.get("/exercises",{params:s});return c},E=async e=>{const{data:t}=await p.get(`/exercises/${e}`);return t},N=async(e,t,n,r="")=>{const i={rate:t,email:n};r&&(i.review=r);const{data:a}=await p.patch(`/exercises/${e}/rating`,i);return a},le=async e=>{const{data:t}=await p.post("/subscription",{email:e});return t},de=`<li class="exercise-card" data-id="{{id}}">\r
  <div class="exercise-card-header">\r
    <div class="exercise-card-left">\r
      <span class="exercise-workout-badge">WORKOUT</span>\r
      <button class="exercise-rating-btn" data-rating="{{rating}}" aria-label="Rating: {{rating}} out of 5">\r
        {{ratingFormatted}}\r
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" aria-hidden="true">\r
          <path\r
            d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z"\r
            fill="#EEA10C"\r
          />\r
        </svg>\r
      </button>\r
    </div>\r
    <button class="exercise-start-btn" data-id="{{id}}" aria-label="Start exercise {{name}}">\r
      Start\r
      <svg width="16" height="16" aria-hidden="true">\r
        <use href="#icon-arrow"></use>\r
      </svg>\r
    </button>\r
  </div>\r
\r
  <div class="exercise-card-body">\r
    <span class="exercise-icon">\r
      <svg width="16px" height="16px" aria-hidden="true">\r
        <use href="#icon-quote"></use>\r
      </svg>\r
    </span>\r
    <h3 class="exercise-card-title">{{name}}</h3>\r
  </div>\r
\r
  <ul class="exercise-card-meta">\r
    <li class="meta-item">\r
      <span class="meta-label">Burned calories:</span>\r
      <span class="meta-value">{{burnedCalories}} / {{time}} min</span>\r
    </li>\r
    <li class="meta-item">\r
      <span class="meta-label">Body part:</span>\r
      <span class="meta-value">{{bodyPart}}</span>\r
    </li>\r
    <li class="meta-item">\r
      <span class="meta-label">Target:</span>\r
      <span class="meta-value">{{target}}</span>\r
    </li>\r
  </ul>\r
</li>\r
`,me=`<li class="category-card" data-filter="{{filter}}" data-name="{{name}}">\r
  <img src="{{imgURL}}" alt="{{name}}" class="category-card-bg" loading="lazy" />\r
  <div class="category-card-overlay"></div>\r
  <div class="category-card-content">\r
    <h3 class="category-name">{{name}}</h3>\r
    <p class="category-filter">{{filter}}</p>\r
  </div>\r
</li>\r
`,ge=`<li class="favorite-card" data-id="{{id}}">\r
  <div class="favorite-card-header">\r
    <span class="favorite-workout-badge">WORKOUT</span>\r
    <button class="favorite-delete-btn" data-id="{{id}}" title="Remove from favorites" aria-label="Remove {{name}} from favorites">\r
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">\r
        <path\r
          d="M4.5 4.5L13.5 13.5M4.5 13.5L13.5 4.5"\r
          stroke="currentColor"\r
          stroke-width="1.5"\r
          stroke-linecap="round"\r
        />\r
      </svg>\r
    </button>\r
  </div>\r
\r
  <div class="favorite-card-body">\r
    <div class="favorite-card-icon" aria-hidden="true">\r
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">\r
        <path\r
          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"\r
          fill="#EEA10C"\r
        />\r
      </svg>\r
    </div>\r
    <button class="favorite-start-btn" data-id="{{id}}" aria-label="Start exercise {{name}}">\r
      Start\r
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">\r
        <path\r
          d="M5 12L10 7L5 2"\r
          stroke="currentColor"\r
          stroke-width="1.5"\r
          stroke-linecap="round"\r
          stroke-linejoin="round"\r
        />\r
      </svg>\r
    </button>\r
  </div>\r
\r
  <div class="favorite-card-content">\r
    <h3 class="favorite-card-title">{{name}}</h3>\r
\r
    <ul class="favorite-card-meta">\r
      <li class="meta-row">\r
        <span class="meta-label">Burned calories:</span>\r
        <span class="meta-value">{{burnedCalories}} / 3 min</span>\r
      </li>\r
      <li class="meta-row">\r
        <span class="meta-label">Body part:</span>\r
        <span class="meta-value">{{bodyPart}}</span>\r
      </li>\r
      <li class="meta-row">\r
        <span class="meta-label">Target:</span>\r
        <span class="meta-value">{{target}}</span>\r
      </li>\r
    </ul>\r
  </div>\r
</li>\r
`,ue=`<div class="favorites-empty">
  <p class="favorites-empty-text">
    It appears that you haven't added any exercises to your favorites yet. To get started, you can
    add exercises that you like to your favorites for easier access in the future.
  </p>
</div>
`,fe=`<div class="pagination">
  <div class="pagination-btns">
    <button class="pagination-btn pagination-first" data-page="1" aria-label="First page">
      <svg width="13" height="12" class="pagination-icon flip">
        <use href="#icon-double-arrow-right"></use>
      </svg>
    </button>
    <button class="pagination-btn pagination-prev" aria-label="Previous page">
      <svg width="20" height="20" class="pagination-icon flip">
        <use href="#icon-arrow-right"></use>
      </svg>
    </button>
  </div>
  <div class="pagination-nbrs"></div>
  <div class="pagination-btns">
    <button class="pagination-btn pagination-next" aria-label="Next page">
      <svg width="20" height="20" class="pagination-icon">
        <use href="#icon-arrow-right"></use>
      </svg>
    </button>
    <button class="pagination-btn pagination-last" aria-label="Last page">
      <svg width="13" height="12" class="pagination-icon">
        <use href="#icon-double-arrow-right"></use>
      </svg>
    </button>
  </div>
</div>
`,ve={"exercise-card":de,"category-card":me,"favorite-card":ge,"favorites-empty":ue,pagination:fe},A={...ve},y=async e=>A[e]?A[e]:(console.warn(`Template not found in bundle: ${e}`),""),T=(e,t)=>e.replace(/\{\{(\w+)\}\}/g,(n,r)=>t[r]!==void 0?t[r]:""),pe=e=>{const t=document.getElementById("quote-text"),n=document.getElementById("quote-author");t&&e.quote&&(t.textContent=e.quote),n&&e.author&&(n.textContent=e.author)},he=async(e,t)=>{const n=document.getElementById(t);if(!n)return;if(e.length===0){n.innerHTML='<p class="no-results">No exercises found. Try another filter.</p>';return}const r=await y("exercise-card"),i=e.map(a=>T(r,{id:a._id,rating:a.rating||0,ratingFormatted:a.rating?a.rating.toFixed(1):"0.0",name:a.name,burnedCalories:a.burnedCalories||0,time:a.time||0,bodyPart:a.bodyPart||"N/A",target:a.target||"N/A"})).join("");n.innerHTML=`<ul class="exercises-grid">${i}</ul>`},ye=async(e,t)=>{const n=document.getElementById(t);if(!n)return;if(e.length===0){n.innerHTML='<p class="no-results">No categories found.</p>';return}const r=await y("category-card"),i=e.map(a=>T(r,{filter:a.filter,name:a.name,imgURL:a.imgURL||""})).join("");n.innerHTML=`<ul class="categories-grid">${i}</ul>`},O=(e,t,n=9)=>{const r=document.getElementById(t);if(!r)return;let i="";e==="categories"?(i=Array(n).fill('<li class="category-skeleton skeleton-shimmer"></li>').join(""),r.innerHTML=`<ul class="categories-grid">${i}</ul>`):(i=Array(n).fill(`
      <li class="exercise-skeleton">
        <div class="shimmer-header">
           <div class="shimmer-badge skeleton-shimmer"></div>
           <div class="shimmer-badge skeleton-shimmer"></div>
        </div>
        <div class="shimmer-title skeleton-shimmer"></div>
        <div class="shimmer-line skeleton-shimmer"></div>
        <div class="shimmer-line skeleton-shimmer"></div>
      </li>
    `).join(""),r.innerHTML=`<ul class="exercises-grid">${i}</ul>`)},H=async(e,t,n="pagination-container")=>{const r=document.getElementById(n);if(!r)return;if(t<=1){r.innerHTML="";return}if(!r.querySelector(".pagination")){const l=await y("pagination");r.innerHTML=l}const i=r.querySelector(".pagination-first"),a=r.querySelector(".pagination-prev"),s=r.querySelector(".pagination-next"),c=r.querySelector(".pagination-last"),d=r.querySelector(".pagination-nbrs");i.disabled=e===1,a.disabled=e===1,a.dataset.page=e-1,s.disabled=e===t,s.dataset.page=e+1,c.disabled=e===t,c.dataset.page=t;const u=be(e,t).map(l=>l==="..."?'<span class="pagination-dots">...</span>':`<button class="pagination-number ${l===e?"pagination-number--active":""}" data-page="${l}" ${l===e?"disabled":""}>${l}</button>`).join("");d.innerHTML=u};function be(e,t){const n=[];if(t<=3){for(let a=1;a<=t;a++)n.push(a);return n}let r,i;e===1?(r=1,i=3):e===t?(r=t-2,i=t):(r=e-1,i=e+1),r>1&&n.push("...");for(let a=r;a<=i;a++)n.push(a);return i<t&&n.push("..."),n}function xe(e,t="pagination-container"){const n=document.getElementById(t);n&&n.dataset.listenerAttached!=="true"&&(n.dataset.listenerAttached="true",n.addEventListener("click",r=>{const i=r.target.closest(".pagination-number, .pagination-btn");if(!i||i.nodeName!=="BUTTON"&&!i.classList.contains("pagination-number")||i.disabled||i.classList.contains("pagination-dots"))return;const a=Number(i.dataset.page);a&&!isNaN(a)&&e(a)}))}function we(e="exercises-header"){const t=document.getElementById(e);t?t.scrollIntoView({behavior:"smooth"}):document.querySelector(".exercises-section")?.scrollIntoView({behavior:"smooth"})}const L=e=>{const t=document.getElementById(e);t&&(t.classList.add("active"),t.setAttribute("aria-hidden","false"),document.body.classList.add("modal-open"))},g=e=>{const t=document.getElementById(e);t&&(t.classList.remove("active"),t.setAttribute("aria-hidden","true"),document.body.classList.remove("modal-open"))},C=e=>{if(!e)return;const t=document.getElementById("modal-exercise-gif");t&&(t.src=e.gifUrl||"",t.alt=e.name||"Exercise");const n=document.getElementById("modal-exercise-title");n&&(n.textContent=e.name||"Exercise");const r=document.getElementById("modal-exercise-rating");if(r){const l=e.rating||0,Q=Math.floor(l);r.innerHTML=`
      <span class="rating-value">${l.toFixed(1)}</span>
      <div class="rating-stars">
        ${Array.from({length:5},(We,V)=>{const j=V<Q?"filled":"";return`<svg class="star ${j}" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 1.5L11.3175 6.195L16.5 6.9525L12.75 10.605L13.635 15.765L9 13.3275L4.365 15.765L5.25 10.605L1.5 6.9525L6.6825 6.195L9 1.5Z" fill="${j?"#EEA10C":"rgba(244, 244, 244, 0.2)"}"/>
          </svg>`}).join("")}
      </div>
    `}const i=document.getElementById("modal-target");i&&(i.textContent=e.target||"N/A");const a=document.getElementById("modal-bodypart");a&&(a.textContent=e.bodyPart||"N/A");const s=document.getElementById("modal-equipment");s&&(s.textContent=e.equipment||"N/A");const c=document.getElementById("modal-popular");c&&(c.textContent=e.popularity||"0");const d=document.getElementById("modal-calories");d&&(d.textContent=`${e.burnedCalories||0}/${e.time||0} min`);const m=document.getElementById("modal-description");m&&(m.textContent=e.description||"No description available.");const u=document.getElementById("exercise-modal");u&&(u.dataset.exerciseId=e._id)},$=()=>{g("exercise-modal"),L("rating-modal"),P(),_e()},f=()=>{g("rating-modal"),L("exercise-modal"),P()},P=()=>{const e=document.querySelectorAll("#rating-modal .rating-star"),t=document.getElementById("rating-display-value"),n=document.getElementById("rating-email"),r=document.getElementById("rating-review");e.forEach(i=>i.classList.remove("active")),t&&(t.textContent="0.0"),n&&(n.value="",n.classList.remove("error")),r&&(r.value="")},_e=()=>{const e=document.getElementById("rating-stars"),t=document.getElementById("rating-display-value");e&&e.dataset.listenerAttached!=="true"&&(e.dataset.listenerAttached="true",e.addEventListener("click",n=>{const r=n.target.closest(".rating-star");if(!r)return;const i=parseFloat(r.dataset.rating),a=e.querySelectorAll(".rating-star"),s=Array.from(a).indexOf(r);a.forEach((c,d)=>{d<=s?c.classList.add("active"):c.classList.remove("active")}),t&&(t.textContent=i.toFixed(1))}),e.addEventListener("mouseover",n=>{const r=n.target.closest(".rating-star");if(!r)return;const i=e.querySelectorAll(".rating-star"),a=Array.from(i).indexOf(r);i.forEach((s,c)=>{c<=a?s.classList.add("hover"):s.classList.remove("hover")})}),e.addEventListener("mouseleave",()=>{e.querySelectorAll(".rating-star").forEach(r=>r.classList.remove("hover"))}))},D=()=>{const e=document.getElementById("rating-display-value");return e?parseFloat(e.textContent):0},F="quote-of-the-day";function U(){return new Date().toISOString().split("T")[0]}function Ee(){try{const e=localStorage.getItem(F);if(!e)return null;const{quote:t,author:n,date:r}=JSON.parse(e),i=U();return r===i?{quote:t,author:n}:(localStorage.removeItem(F),null)}catch(e){return console.error("Error reading cached quote:",e),null}}function Le(e,t){try{const n={quote:e,author:t,date:U()};localStorage.setItem(F,JSON.stringify(n))}catch(n){console.error("Error caching quote:",n)}}async function W(){try{let e=Ee();e||(e=await se(),Le(e.quote,e.author)),pe(e)}catch(e){console.error("Failed to initialize quote:",e)}}const M="favoriteExercises";function B(){try{const e=localStorage.getItem(M);return e?JSON.parse(e):[]}catch(e){return console.error("Failed to get favorites:",e),[]}}function Be(e){try{const t=B();return t.some(n=>n._id===e._id)?!1:(t.push(e),localStorage.setItem(M,JSON.stringify(t)),!0)}catch(t){return console.error("Failed to add favorite:",t),!1}}function z(e){try{const n=B().filter(r=>r._id!==e);return localStorage.setItem(M,JSON.stringify(n)),!0}catch(t){return console.error("Failed to remove favorite:",t),!1}}function w(e){return B().some(n=>n._id===e)}async function ke(){const e=document.getElementById("favorites-container");if(!e)return;const t=await y("favorites-empty");e.innerHTML=t}async function S(){const e=document.getElementById("favorites-container");if(!e)return;const t=B();if(t.length===0){await ke();return}const n=await y("favorite-card"),r=t.map(i=>T(n,{id:i._id,name:i.name,burnedCalories:i.burnedCalories||0,bodyPart:i.bodyPart||"N/A",target:i.target||"N/A"})).join("");e.innerHTML=`<ul class="favorites-grid">${r}</ul>`}function Ie(e){const t=document.getElementById("modal-close-btn");t&&(t.onclick=()=>g("exercise-modal"));const n=document.getElementById("give-rating-btn");n&&(n.onclick=()=>{$(),Fe(e)});const r=document.getElementById("add-to-favorites-btn");r&&(r.onclick=async()=>{w(e)&&(z(e),g("exercise-modal"),await S())},w(e)&&(r.textContent="Remove from favorites"));const i=document.getElementById("exercise-modal");i&&(i.onclick=s=>{s.target===i&&g("exercise-modal")});const a=s=>{s.key==="Escape"&&(g("exercise-modal"),document.removeEventListener("keydown",a))};document.addEventListener("keydown",a)}function Fe(e){const t=document.getElementById("rating-modal-close-btn");t&&(t.onclick=()=>f());const n=document.getElementById("rating-form");n&&(n.onsubmit=async a=>{a.preventDefault();const s=D(),c=document.getElementById("rating-email"),d=document.getElementById("rating-review"),m=c?.value.trim(),u=d?.value.trim()||"";if(s<=0){alert("Please select a rating");return}if(!m){alert("Please enter your email"),c?.focus();return}try{await N(e,s,m,u),alert("Rating submitted successfully!"),f()}catch(l){console.error("Failed to submit rating:",l),l.message?.includes("409")?alert("This email has already been used to rate this exercise"):alert("Failed to submit rating. Please try again.")}});const r=document.getElementById("rating-modal");r&&(r.onclick=a=>{a.target===r&&f()});const i=a=>{a.key==="Escape"&&(f(),document.removeEventListener("keydown",i))};document.addEventListener("keydown",i)}async function Te(){const e=document.querySelector(".favorites-page");try{await W(),await S(),Ce()}catch(t){console.error("Error initializing favorites page:",t)}finally{e&&e.classList.add("loaded")}}function Ce(){const e=document.getElementById("favorites-container");e&&e.dataset.listenerAttached!=="true"&&(e.dataset.listenerAttached="true",e.addEventListener("click",async t=>{const n=t.target.closest(".favorite-delete-btn");if(n){t.stopPropagation();const i=n.dataset.id;if(i){z(i);try{await S()}catch(a){console.error("Failed to render favorites:",a)}}return}const r=t.target.closest(".favorite-start-btn");if(r){t.stopPropagation();const i=r.dataset.id;if(!i)return;try{const a=await E(i);C(a),L("exercise-modal"),Ie(i)}catch(a){console.error("Failed to fetch exercise details:",a),alert("Failed to load exercise details.")}}}))}function Me(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}const o={view:"categories",filter:"Muscles",category:null,categoryFilter:null,keyword:"",page:1},_=()=>window.innerWidth<768?9:o.view==="categories"?12:10;async function R(){const e=document.querySelector(".main-content"),t=_();O(o.view,"exercises-container",t);try{await W(),await v()}catch(n){console.error("Error initializing home page:",n)}finally{e&&e.classList.add("loaded")}qe(),Ae(),xe(je),Se()}function Se(){let e,t=_();window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(()=>{const n=_();n!==t&&(t=n,o.page=1,v())},300)})}async function v(){const e=document.getElementById("exercises-container");try{const t=_();if(O(o.view,"exercises-container",t),o.view==="categories"){const n=await oe({filter:o.filter,page:o.page,limit:t});ye(n.results,"exercises-container"),H(n.page?Number(n.page):1,n.totalPages||1)}else{const n={limit:t,page:o.page};o.categoryFilter==="Muscles"?n.muscles=o.category.toLowerCase():o.categoryFilter==="Body parts"?n.bodypart=o.category.toLowerCase():o.categoryFilter==="Equipment"&&(n.equipment=o.category.toLowerCase()),o.keyword&&(n.keyword=o.keyword);const r=await ce(n);he(r.results,"exercises-container"),H(r.page?Number(r.page):1,r.totalPages||1)}}catch(t){console.error("Fetch error:",t),e&&(e.innerHTML='<p class="error-message">Failed to load data. Please try again.</p>')}}function je(e){e&&e!==o.page&&(o.page=e,v(),we())}function qe(){const e=document.getElementById("filter-tabs");e&&e.dataset.listenerAttached!=="true"&&(e.dataset.listenerAttached="true",e.addEventListener("click",async t=>{const n=t.target.closest(".filter-tab");if(n){document.querySelectorAll(".filter-tab").forEach(r=>r.classList.remove("active")),n.classList.add("active"),o.filter=n.dataset.filter,o.view="categories",o.page=1,o.keyword="",o.category=null,Re();try{await v()}catch(r){console.error("Failed to fetch data:",r)}}}))}function Ae(){const e=document.getElementById("exercises-container");e&&e.dataset.listenerAttached!=="true"&&(e.dataset.listenerAttached="true",e.addEventListener("click",async t=>{const n=t.target.closest(".category-card");if(n){const i=n.dataset.name,a=n.dataset.filter;if(!i)return;o.view="exercises",o.category=i,o.categoryFilter=a,o.page=1,o.keyword="",He(i),Ne();try{await v()}catch(s){console.error("Failed to fetch exercises:",s)}return}const r=t.target.closest(".exercise-start-btn");if(r){const i=r.dataset.id;if(!i)return;try{const a=await E(i);C(a),L("exercise-modal"),Oe(i)}catch(a){console.error(`Failed to fetch exercise details for ${i}:`,a),alert("Failed to load exercise details. Please try again.")}}}))}function He(e){const t=document.getElementById("section-title"),n=document.getElementById("exercise-search-form");t&&(t.innerHTML=`Exercises / <span class="category-name">${e}</span>`),n&&n.classList.remove("hidden")}function Re(){const e=document.getElementById("section-title"),t=document.getElementById("exercise-search-form"),n=document.getElementById("exercise-search-input"),r=document.getElementById("exercise-clear-btn");e&&(e.textContent="Exercises"),t&&t.classList.add("hidden"),n&&(n.value=""),r&&r.classList.add("hidden")}function Ne(){const e=document.getElementById("exercise-search-form"),t=document.getElementById("exercise-search-input"),n=document.getElementById("exercise-clear-btn");!e||!t||e.dataset.listenerAttached!=="true"&&(e.dataset.listenerAttached="true",t.addEventListener("input",()=>{t.value.trim()?n.classList.remove("hidden"):n.classList.add("hidden")}),n.addEventListener("click",async()=>{t.value="",n.classList.add("hidden"),t.focus(),o.keyword="",o.page=1;try{await v()}catch(r){console.error("Failed to fetch exercises:",r)}}),e.addEventListener("submit",async r=>{r.preventDefault();const i=t.value.trim();o.keyword=i,o.page=1;try{await v()}catch(a){console.error("Failed to search exercises:",a)}}))}function Oe(e){const t=document.getElementById("modal-close-btn");t&&(t.onclick=()=>g("exercise-modal"));const n=document.getElementById("give-rating-btn");n&&(n.onclick=()=>{$(),$e(e)});const r=document.getElementById("add-to-favorites-btn");r&&(r.onclick=async()=>{if(w(e))alert("This exercise is already in your favorites");else{const s=await E(e);Be(s),r.innerHTML=`
          Added to favorites
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 3.5C10 3.5 6.5 1 3.5 3.5C0.5 6 2 10 10 16.5C18 10 19.5 6 16.5 3.5C13.5 1 10 3.5 10 3.5Z" fill="#242424" stroke="#242424" stroke-width="1.5"/>
          </svg>
        `,setTimeout(()=>{r.textContent="Add to favorites"},2e3)}},w(e)&&(r.textContent="Already in favorites",r.disabled=!0,r.style.opacity="0.6"));const i=document.getElementById("exercise-modal");i&&(i.onclick=s=>{s.target===i&&g("exercise-modal")});const a=s=>{s.key==="Escape"&&(g("exercise-modal"),document.removeEventListener("keydown",a))};document.addEventListener("keydown",a)}function $e(e){const t=document.getElementById("rating-modal-close-btn");t&&(t.onclick=()=>f());const n=document.getElementById("rating-form");n&&(n.onsubmit=async a=>{a.preventDefault();const s=D(),c=document.getElementById("rating-email"),d=document.getElementById("rating-review"),m=c?.value.trim(),u=d?.value.trim()||"";if(s<=0){alert("Please select a rating");return}if(!m){alert("Please enter your email"),c?.focus();return}if(!Me(m)){alert("Please enter a valid email address"),c?.classList.add("error"),c?.focus();return}c?.classList.remove("error");try{await N(e,s,m,u),alert("Rating submitted successfully!"),f();const l=await E(e);C(l)}catch(l){console.error("Failed to submit rating:",l),l.message?.includes("409")?alert("This email has already been used to rate this exercise"):alert("Failed to submit rating. Please try again.")}});const r=document.getElementById("rating-modal");r&&(r.onclick=a=>{a.target===r&&f()});const i=a=>{a.key==="Escape"&&(f(),document.removeEventListener("keydown",i))};document.addEventListener("keydown",i)}function h(e){const t=document.getElementById("nav-home"),n=document.getElementById("nav-favorites");!t||!n||(t.classList.remove("active"),n.classList.remove("active"),e==="/favorites"?n.classList.add("active"):t.classList.add("active"))}function Pe(){const e=document.querySelector(".nav");e&&e.addEventListener("click",n=>{const r=n.target.closest(".nav-link");if(!r)return;n.preventDefault();const i=r.dataset.route;i&&(x.navigate(i),h(i))});const t=document.querySelector(".mobile-nav");t&&t.addEventListener("click",n=>{const r=n.target.closest(".mobile-nav-link");if(!r)return;n.preventDefault();const i=r.dataset.route;i&&(x.navigate(i),h(i),b())})}function De(){const e=document.getElementById("burger-btn"),t=document.getElementById("mobile-menu"),n=document.getElementById("mobile-close-btn");!e||!t||!n||(e.addEventListener("click",Ue),n.addEventListener("click",b),t.addEventListener("click",r=>{r.target===t&&b()}),document.addEventListener("keydown",r=>{r.key==="Escape"&&t.classList.contains("is-open")&&b()}))}function Ue(){const e=document.getElementById("mobile-menu"),t=document.getElementById("burger-btn");e&&(e.classList.add("is-open"),document.body.style.overflow="hidden"),t&&t.setAttribute("aria-expanded","true")}function b(){const e=document.getElementById("mobile-menu"),t=document.getElementById("burger-btn");e&&(e.classList.remove("is-open"),document.body.style.overflow=""),t&&t.setAttribute("aria-expanded","false")}document.addEventListener("DOMContentLoaded",()=>{Pe(),De()});x.on("/",async()=>{await k("home"),await R(),I(),h("/")}).on("/favorites",async()=>{await k("favorites"),await Te(),I(),h("/favorites")}).notFound(async()=>{await k("home"),await R(),I(),h("/")});function I(){const e=document.getElementById("subscription-form");e&&e.addEventListener("submit",async t=>{t.preventDefault();const n=e.email.value;try{await le(n),alert("Successfully subscribed!"),e.reset()}catch{alert("Subscription failed. Please check your email or try again later.")}})}document.addEventListener("DOMContentLoaded",()=>{x.resolve()});
//# sourceMappingURL=index.js.map
