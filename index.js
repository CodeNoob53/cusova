import{N as K,a as Z}from"./assets/vendor-BFQQak21.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();const G=`<load src="partials/hero.html" />

<div>
  <load src="partials/filters.html" />

  <div class="main-content">
    <aside class="sidebar">
      <load src="partials/quote.html" />
      <load src="partials/sidebar-image.html" />
      <load src="partials/info-card.html" />
    </aside>

    <section class="content-area">
      <section id="exercises-container" aria-live="polite" aria-busy="false">
        <ul class="categories-grid">
          <li class="category-skeleton skeleton-shimmer"></li>
          <li class="category-skeleton skeleton-shimmer"></li>
          <li class="category-skeleton skeleton-shimmer"></li>
          <li class="category-skeleton skeleton-shimmer"></li>
          <li class="category-skeleton skeleton-shimmer"></li>
          <li class="category-skeleton skeleton-shimmer"></li>
          <li class="category-skeleton skeleton-shimmer"></li>
          <li class="category-skeleton skeleton-shimmer"></li>
          <li class="category-skeleton skeleton-shimmer"></li>
          <li class="category-skeleton skeleton-shimmer"></li>
          <li class="category-skeleton skeleton-shimmer"></li>
          <li class="category-skeleton skeleton-shimmer"></li>
        </ul>
      </section>
      <nav id="pagination-container" aria-label="Pagination" role="navigation">
        <!-- Pagination will be injected here -->
      </nav>
    </section>
  </div>
</div>
`,Y=`<section class="favorites-page section">
  <div class="container favorites-container-wrapper">
    
    <div class="favorites-content-wrapper">
      <!-- Left side: Quote + Info + Image -->
      <aside class="favorites-aside">
         <load src="partials/quote.html" />
         
         <div class="favorites-aside-bottom">
            <!-- Simplified inline Info Card for Favorites -->
            <div class="info-card favorites-info-card">
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
                  <!-- No text paragraph here for favorites -->
                </div>
              </div>
            </div>
            <!-- Sidebar Image (Inline for Favorites specific styles) -->
            <div class="favorites-sidebar-image">
              <picture>
                <!-- Mobile: до 767px -->
                <source
                  media="(max-width: 767px)"
                  type="image/avif"
                  srcset="
                    /img/avif/mobile_fav_sitebar_img.avif 1x,
                    /img/avif/mobile_fav_sitebar_img@2x.avif 2x,
                    /img/avif/mobile_fav_sitebar_img@3x.avif 3x
                  "
                />
                <source
                  media="(max-width: 767px)"
                  type="image/jpeg"
                  srcset="
                    /img/mobile_fav_sitebar_img.jpg 1x,
                    /img/mobile_fav_sitebar_img@2x.jpg 2x,
                    /img/mobile_fav_sitebar_img@3x.jpg 3x
                  "
                />

                <!-- Tablet: 768px - 1279px -->
                <source
                  media="(min-width: 768px) and (max-width: 1279px)"
                  type="image/avif"
                  srcset="
                    /img/avif/tab_fav_sitebar_img.avif 1x,
                    /img/avif/tab_fav_sitebar_img@2x.avif 2x,
                    /img/avif/tab_fav_sitebar_img@3x.avif 3x
                  "
                />
                <source
                  media="(min-width: 768px) and (max-width: 1279px)"
                  type="image/jpeg"
                  srcset="
                    /img/tab_fav_sitebar_img.jpg 1x,
                    /img/tab_fav_sitebar_img@2x.jpg 2x,
                    /img/tab_fav_sitebar_img@3x.jpg 3x
                  "
                />

                <!-- Desktop: від 1280px -->
                <source
                  media="(min-width: 1280px)"
                  type="image/avif"
                  srcset="
                    /img/avif/desc_fav_sitebar_img.avif 1x,
                    /img/avif/desc_fav_sitebar_img@2x.avif 2x,
                    /img/avif/desc_fav_sitebar_img@3x.avif 3x
                  "
                />
                <source
                  media="(min-width: 1280px)"
                  type="image/jpeg"
                  srcset="
                    /img/desc_fav_sitebar_img.jpg 1x,
                    /img/desc_fav_sitebar_img@2x.jpg 2x,
                    /img/desc_fav_sitebar_img@3x.jpg 3x
                  "
                />

                <img src="/img/desc_fav_sitebar_img.jpg" alt="Women doing sports" class="sidebar-image" width="335" height="571" loading="lazy" />
              </picture>
            </div>
         </div>
      </aside>

      <!-- Right side: Favorites List -->
      <div class="favorites-list-container">
        <!-- Title "Favorites" is now part of the structure or can be outside? 
             Design shows "Favorites" above the list? No, "Favorites" title is top left of the PAGE.
             Wait, looking at Screenshot 2:
             Row 1: Title "Favorites"
             Row 2: Left Col (Quote...), Right Col (List)
             So Title should be OUTSIDE the wrapper if it spans width, OR inside the wrapper if it aligns with something.
             Let's put Title above the wrapper.
        -->
         <h2 class="section-title">Favorites</h2>
         
        <section id="favorites-container" class="favorites-list" aria-live="polite" aria-busy="false">
          <!-- Favorite cards will be rendered here -->
        </section>
      </div>
    </div>
  </div>
</section>
`,X=`<section class="hero-wrapper">
  <div class="hero">
    <div class="hero-content">
      <div class="hero-title-wrapper">
        <img src="/img/star-icon.svg" alt="" class="hero-star-icon" />
        <h1 class="hero-title">Get <span class="accent-text">Body</span> in shape, Stay healthy</h1>
      </div>
      <p class="hero-description">
        Transform your physique and embrace a healthier lifestyle with our comprehensive fitness and
        nutrition support.
      </p>
    </div>
    <div class="hero-right">
      <picture>
        <!-- Desktop: від 1280px (на mobile та tablet hero-right не відображається) -->
        <source
          type="image/avif"
          srcset="
            /img/avif/desc_hero_on_tag.avif 1x,
            /img/avif/desc_hero_on_tag@2x.avif 2x,
            /img/avif/desc_hero_on_tag@3x.avif 3x
          "
        />
        <source
          type="image/jpeg"
          srcset="
            /img/desc_hero_on_tag.jpg 1x,
            /img/desc_hero_on_tag@2x.jpg 2x,
            /img/desc_hero_on_tag@3x.jpg 3x
          "
        />

        <img
          src="/img/desc_hero_on_tag.jpg"
          alt="Workout"
          class="hero-img-small"
          width="168"
          height="100"
          loading="lazy"
        />
      </picture>
      <div class="hero-tags">
        <div class="hero-tag-line">
          <span class="tag">#Sport</span>
          <span class="tag">#Healthy</span>
        </div>
        <div class="hero-tag-line">
          <span class="tag">#Workout</span>
          <span class="tag">#Diet</span>
        </div>
      </div>
    </div>
  </div>
  <div class="hero-image-wrapper">
    <picture>
      <!-- Mobile: до 767px -->
      <source
        media="(max-width: 767px)"
        type="image/avif"
        srcset="
          /img/avif/mobile_hero_main.avif 1x,
          /img/avif/mobile_hero_main@2x.avif 2x,
          /img/avif/mobile_hero_main@3x.avif 3x
        "
      />
      <source
        media="(max-width: 767px)"
        type="image/jpeg"
        srcset="
          /img/mobile_hero_main.jpg 1x,
          /img/mobile_hero_main@2x.jpg 2x,
          /img/mobile_hero_main@3x.jpg 3x
        "
      />

      <!-- Tablet: 768px - 1279px -->
      <source
        media="(min-width: 768px) and (max-width: 1279px)"
        type="image/avif"
        srcset="
          /img/avif/tab_hero_main.avif 1x,
          /img/avif/tab_hero_main@2x.avif 2x,
          /img/avif/tab_hero_main@3x.avif 3x
        "
      />
      <source
        media="(min-width: 768px) and (max-width: 1279px)"
        type="image/jpeg"
        srcset="
          /img/tab_hero_main.jpg 1x,
          /img/tab_hero_main@2x.jpg 2x,
          /img/tab_hero_main@3x.jpg 3x
        "
      />

      <!-- Desktop: від 1280px -->
      <source
        media="(min-width: 1280px)"
        type="image/avif"
        srcset="
          /img/avif/desc_hero_main.avif 1x,
          /img/avif/desc_hero_main@2x.avif 2x,
          /img/avif/desc_hero_main@3x.avif 3x
        "
      />
      <source
        media="(min-width: 1280px)"
        type="image/jpeg"
        srcset="
          /img/desc_hero_main.jpg 1x,
          /img/desc_hero_main@2x.jpg 2x,
          /img/desc_hero_main@3x.jpg 3x
        "
      />

      <img
        src="/img/desc_hero_main.jpg"
        alt="Working out together"
        class="hero-img-large"
        width="1376"
        height="574"
        loading="eager"
        fetchpriority="high"
      />
    </picture>
  </div>
</section>
`,ee=`<section class="filters-section">
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
`,te=`<div class="quote-card">
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
`,ne=`<div class="sidebar-image-card">
  <picture>
    <!-- Mobile: до 767px -->
    <source
      media="(max-width: 767px)"
      type="image/avif"
      srcset="
        /img/avif/mobile_sitebar_img.avif 1x,
        /img/avif/mobile_sitebar_img@2x.avif 2x,
        /img/avif/mobile_sitebar_img@3x.avif 3x
      "
    />
    <source
      media="(max-width: 767px)"
      type="image/jpeg"
      srcset="
        /img/mobile_sitebar_img.jpg 1x,
        /img/mobile_sitebar_img@2x.jpg 2x,
        /img/mobile_sitebar_img@3x.jpg 3x
      "
    />

    <!-- Tablet: 768px - 1279px -->
    <source
      media="(min-width: 768px) and (max-width: 1279px)"
      type="image/avif"
      srcset="
        /img/avif/tab_sitebar_img.avif 1x,
        /img/avif/tab_sitebar_img@2x.avif 2x,
        /img/avif/tab_sitebar_img@3x.avif 3x
      "
    />
    <source
      media="(min-width: 768px) and (max-width: 1279px)"
      type="image/jpeg"
      srcset="
        /img/tab_sitebar_img.jpg 1x,
        /img/tab_sitebar_img@2x.jpg 2x,
        /img/tab_sitebar_img@3x.jpg 3x
      "
    />

    <!-- Desktop: від 1280px -->
    <source
      media="(min-width: 1280px)"
      type="image/avif"
      srcset="
        /img/avif/desc_sitebar_img.avif 1x,
        /img/avif/desc_sitebar_img@2x.avif 2x,
        /img/avif/desc_sitebar_img@3x.avif 3x
      "
    />
    <source
      media="(min-width: 1280px)"
      type="image/jpeg"
      srcset="
        /img/desc_sitebar_img.jpg 1x,
        /img/desc_sitebar_img@2x.jpg 2x,
        /img/desc_sitebar_img@3x.jpg 3x
      "
    />

    <img src="/img/desc_sitebar_img.jpg" alt="Women doing sports" class="sidebar-image" width="335" height="571" loading="lazy" />
  </picture>
</div>
`,ie=`<div class="info-card">
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
`,ae="/cusova/",b=String(ae),w=new K(b,{hash:!1}),se={home:G,favorites:Y},A={"partials/hero.html":X,"partials/filters.html":ee,"partials/quote.html":te,"partials/sidebar-image.html":ne,"partials/info-card.html":ie};function re(e){const t=/<load\s+src="([^"]+)"\s*\/>/g;return e.replace(t,(n,i)=>A[i]?A[i]:(console.warn(`Partial not found: ${i}`),`<!-- Failed to load ${i} -->`))}function oe(e){return b==="/"||(e=e.replace(/src="\/img\//g,`src="${b}img/`),e=e.replace(/srcset="([^"]*)"/gs,(t,n)=>`srcset="${n.replace(/\/img\//g,`${b}img/`)}"`)),e}async function I(e){const t=document.getElementById("app");if(!t)return;const n=se[e];if(!n){t.innerHTML="<h1>Page not found</h1>";return}let i=re(n);i=oe(i),t.innerHTML=i}const ce="https://your-energy.b.goit.study/api",p=Z.create({baseURL:ce}),le=async()=>{const{data:e}=await p.get("/quote");return e},de=async({filter:e,page:t=1,limit:n=12})=>{const{data:i}=await p.get("/filters",{params:{filter:e,page:t,limit:n}});return i},me=async({bodypart:e,muscles:t,equipment:n,keyword:i,page:a=1,limit:s=10})=>{const r={page:a,limit:s};e&&(r.bodypart=e),t&&(r.muscles=t),n&&(r.equipment=n),i&&(r.keyword=i);const{data:c}=await p.get("/exercises",{params:r});return c},L=async e=>{const{data:t}=await p.get(`/exercises/${e}`);return t},$=async(e,t,n,i="")=>{const a={rate:t,email:n};i&&(a.review=i);const{data:s}=await p.patch(`/exercises/${e}/rating`,a);return s},ge=async e=>{const{data:t}=await p.post("/subscription",{email:e});return t},ue=`<li class="exercise-card" data-id="{{id}}">
  <div class="exercise-card-header">
    <div class="exercise-card-left">
      <span class="exercise-workout-badge">WORKOUT</span>
      <button class="exercise-rating-btn" data-rating="{{rating}}" aria-label="Rating: {{rating}} out of 5">
        {{ratingFormatted}}
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" aria-hidden="true">
          <path
            d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z"
            fill="#EEA10C"
          />
        </svg>
      </button>
    </div>
    <button class="exercise-start-btn" data-id="{{id}}" aria-label="Start exercise {{name}}">
      Start
      <svg width="16" height="16" aria-hidden="true">
        <use href="#icon-arrow"></use>
      </svg>
    </button>
  </div>

  <div class="exercise-card-body">
    <span class="exercise-icon">
      <svg width="16px" height="16px" aria-hidden="true">
        <use href="#icon-quote"></use>
      </svg>
    </span>
    <h3 class="exercise-card-title">{{name}}</h3>
  </div>

  <ul class="exercise-card-meta">
    <li class="meta-item">
      <span class="meta-label">Burned calories:</span>
      <span class="meta-value">{{burnedCalories}} / {{time}} min</span>
    </li>
    <li class="meta-item">
      <span class="meta-label">Body part:</span>
      <span class="meta-value">{{bodyPart}}</span>
    </li>
    <li class="meta-item">
      <span class="meta-label">Target:</span>
      <span class="meta-value">{{target}}</span>
    </li>
  </ul>
</li>
`,fe=`<li class="category-card" data-filter="{{filter}}" data-name="{{name}}">
  <img src="{{imgURL}}" alt="{{name}}" class="category-card-bg" loading="lazy" />
  <div class="category-card-overlay"></div>
  <div class="category-card-content">
    <h3 class="category-name">{{name}}</h3>
    <p class="category-filter">{{filter}}</p>
  </div>
</li>
`,ve=`<li class="favorite-card" data-id="{{id}}">
  <div class="favorite-card-header">
    <span class="favorite-workout-badge">WORKOUT</span>
    <button class="favorite-delete-btn" data-id="{{id}}" title="Remove from favorites" aria-label="Remove {{name}} from favorites">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path
          d="M4.5 4.5L13.5 13.5M4.5 13.5L13.5 4.5"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </button>
  </div>

  <div class="favorite-card-body">
    <div class="favorite-card-icon" aria-hidden="true">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
          fill="#EEA10C"
        />
      </svg>
    </div>
    <button class="favorite-start-btn" data-id="{{id}}" aria-label="Start exercise {{name}}">
      Start
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M5 12L10 7L5 2"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>

  <div class="favorite-card-content">
    <h3 class="favorite-card-title">{{name}}</h3>

    <ul class="favorite-card-meta">
      <li class="meta-row">
        <span class="meta-label">Burned calories:</span>
        <span class="meta-value">{{burnedCalories}} / 3 min</span>
      </li>
      <li class="meta-row">
        <span class="meta-label">Body part:</span>
        <span class="meta-value">{{bodyPart}}</span>
      </li>
      <li class="meta-row">
        <span class="meta-label">Target:</span>
        <span class="meta-value">{{target}}</span>
      </li>
    </ul>
  </div>
</li>
`,pe=`<div class="favorites-empty">
  <p class="favorites-empty-text">
    It appears that you haven't added any exercises to your favorites yet. To get started, you can
    add exercises that you like to your favorites for easier access in the future.
  </p>
</div>
`,he=`<div class="pagination">
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
`,ye={"exercise-card":ue,"category-card":fe,"favorite-card":ve,"favorites-empty":pe,pagination:he},H={...ye},y=async e=>H[e]?H[e]:(console.warn(`Template not found in bundle: ${e}`),""),C=(e,t)=>e.replace(/\{\{(\w+)\}\}/g,(n,i)=>t[i]!==void 0?t[i]:""),be=e=>{const t=document.getElementById("quote-text"),n=document.getElementById("quote-author");t&&e.quote&&(t.textContent=e.quote),n&&e.author&&(n.textContent=e.author)},xe=async(e,t)=>{const n=document.getElementById(t);if(!n)return;if(e.length===0){n.innerHTML='<p class="no-results">No exercises found. Try another filter.</p>';return}const i=await y("exercise-card"),a=e.map(s=>C(i,{id:s._id,rating:s.rating||0,ratingFormatted:s.rating?s.rating.toFixed(1):"0.0",name:s.name,burnedCalories:s.burnedCalories||0,time:s.time||0,bodyPart:s.bodyPart||"N/A",target:s.target||"N/A"})).join("");n.innerHTML=`<ul class="exercises-grid">${a}</ul>`},we=async(e,t)=>{const n=document.getElementById(t);if(!n)return;if(e.length===0){n.innerHTML='<p class="no-results">No categories found.</p>';return}const i=await y("category-card"),a=e.map(s=>C(i,{filter:s.filter,name:s.name,imgURL:s.imgURL||""})).join("");n.innerHTML=`<ul class="categories-grid">${a}</ul>`},O=(e,t,n=9)=>{const i=document.getElementById(t);if(!i)return;let a="";e==="categories"?(a=Array(n).fill('<li class="category-skeleton skeleton-shimmer"></li>').join(""),i.innerHTML=`<ul class="categories-grid">${a}</ul>`):(a=Array(n).fill(`
      <li class="exercise-skeleton">
        <div class="shimmer-header">
           <div class="shimmer-badge skeleton-shimmer"></div>
           <div class="shimmer-badge skeleton-shimmer"></div>
        </div>
        <div class="shimmer-title skeleton-shimmer"></div>
        <div class="shimmer-line skeleton-shimmer"></div>
        <div class="shimmer-line skeleton-shimmer"></div>
      </li>
    `).join(""),i.innerHTML=`<ul class="exercises-grid">${a}</ul>`)},R=async(e,t,n="pagination-container")=>{const i=document.getElementById(n);if(!i)return;if(t<=1){i.innerHTML="";return}if(!i.querySelector(".pagination")){const l=await y("pagination");i.innerHTML=l}const a=i.querySelector(".pagination-first"),s=i.querySelector(".pagination-prev"),r=i.querySelector(".pagination-next"),c=i.querySelector(".pagination-last"),d=i.querySelector(".pagination-nbrs");a.disabled=e===1,s.disabled=e===1,s.dataset.page=e-1,r.disabled=e===t,r.dataset.page=e+1,c.disabled=e===t,c.dataset.page=t;const u=_e(e,t).map(l=>l==="..."?'<span class="pagination-dots">...</span>':`<button class="pagination-number ${l===e?"pagination-number--active":""}" data-page="${l}" ${l===e?"disabled":""}>${l}</button>`).join("");d.innerHTML=u};function _e(e,t){const n=[];if(t<=3){for(let s=1;s<=t;s++)n.push(s);return n}let i,a;e===1?(i=1,a=3):e===t?(i=t-2,a=t):(i=e-1,a=e+1),i>1&&n.push("...");for(let s=i;s<=a;s++)n.push(s);return a<t&&n.push("..."),n}function Ee(e,t="pagination-container"){const n=document.getElementById(t);n&&n.dataset.listenerAttached!=="true"&&(n.dataset.listenerAttached="true",n.addEventListener("click",i=>{const a=i.target.closest(".pagination-number, .pagination-btn");if(!a||a.nodeName!=="BUTTON"&&!a.classList.contains("pagination-number")||a.disabled||a.classList.contains("pagination-dots"))return;const s=Number(a.dataset.page);s&&!isNaN(s)&&e(s)}))}function Le(e="exercises-header"){const t=document.getElementById(e);t?t.scrollIntoView({behavior:"smooth"}):document.querySelector(".exercises-section")?.scrollIntoView({behavior:"smooth"})}const B=e=>{const t=document.getElementById(e);t&&(t.classList.add("active"),t.setAttribute("aria-hidden","false"),document.body.classList.add("modal-open"))},g=e=>{const t=document.getElementById(e);t&&(t.classList.remove("active"),t.setAttribute("aria-hidden","true"),document.body.classList.remove("modal-open"))},S=e=>{if(!e)return;const t=document.getElementById("modal-exercise-gif");t&&(t.src=e.gifUrl||"",t.alt=e.name||"Exercise");const n=document.getElementById("modal-exercise-title");n&&(n.textContent=e.name||"Exercise");const i=document.getElementById("modal-exercise-rating");if(i){const l=e.rating||0,V=Math.floor(l);i.innerHTML=`
      <span class="rating-value">${l.toFixed(1)}</span>
      <div class="rating-stars">
        ${Array.from({length:5},(Ve,J)=>{const q=J<V?"filled":"";return`<svg class="star ${q}" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 1.5L11.3175 6.195L16.5 6.9525L12.75 10.605L13.635 15.765L9 13.3275L4.365 15.765L5.25 10.605L1.5 6.9525L6.6825 6.195L9 1.5Z" fill="${q?"#EEA10C":"rgba(244, 244, 244, 0.2)"}"/>
          </svg>`}).join("")}
      </div>
    `}const a=document.getElementById("modal-target");a&&(a.textContent=e.target||"N/A");const s=document.getElementById("modal-bodypart");s&&(s.textContent=e.bodyPart||"N/A");const r=document.getElementById("modal-equipment");r&&(r.textContent=e.equipment||"N/A");const c=document.getElementById("modal-popular");c&&(c.textContent=e.popularity||"0");const d=document.getElementById("modal-calories");d&&(d.textContent=`${e.burnedCalories||0}/${e.time||0} min`);const m=document.getElementById("modal-description");m&&(m.textContent=e.description||"No description available.");const u=document.getElementById("exercise-modal");u&&(u.dataset.exerciseId=e._id)},P=()=>{g("exercise-modal"),B("rating-modal"),D(),Be()},f=()=>{g("rating-modal"),B("exercise-modal"),D()},D=()=>{const e=document.querySelectorAll("#rating-modal .rating-star"),t=document.getElementById("rating-display-value"),n=document.getElementById("rating-email"),i=document.getElementById("rating-review");e.forEach(a=>a.classList.remove("active")),t&&(t.textContent="0.0"),n&&(n.value="",n.classList.remove("error")),i&&(i.value="")},Be=()=>{const e=document.getElementById("rating-stars"),t=document.getElementById("rating-display-value");e&&e.dataset.listenerAttached!=="true"&&(e.dataset.listenerAttached="true",e.addEventListener("click",n=>{const i=n.target.closest(".rating-star");if(!i)return;const a=parseFloat(i.dataset.rating),s=e.querySelectorAll(".rating-star"),r=Array.from(s).indexOf(i);s.forEach((c,d)=>{d<=r?c.classList.add("active"):c.classList.remove("active")}),t&&(t.textContent=a.toFixed(1))}),e.addEventListener("mouseover",n=>{const i=n.target.closest(".rating-star");if(!i)return;const a=e.querySelectorAll(".rating-star"),s=Array.from(a).indexOf(i);a.forEach((r,c)=>{c<=s?r.classList.add("hover"):r.classList.remove("hover")})}),e.addEventListener("mouseleave",()=>{e.querySelectorAll(".rating-star").forEach(i=>i.classList.remove("hover"))}))},U=()=>{const e=document.getElementById("rating-display-value");return e?parseFloat(e.textContent):0},T="quote-of-the-day";function W(){return new Date().toISOString().split("T")[0]}function ke(){try{const e=localStorage.getItem(T);if(!e)return null;const{quote:t,author:n,date:i}=JSON.parse(e),a=W();return i===a?{quote:t,author:n}:(localStorage.removeItem(T),null)}catch(e){return console.error("Error reading cached quote:",e),null}}function Ie(e,t){try{const n={quote:e,author:t,date:W()};localStorage.setItem(T,JSON.stringify(n))}catch(n){console.error("Error caching quote:",n)}}async function z(){try{let e=ke();e||(e=await le(),Ie(e.quote,e.author)),be(e)}catch(e){console.error("Failed to initialize quote:",e)}}const M="favoriteExercises";function k(){try{const e=localStorage.getItem(M);return e?JSON.parse(e):[]}catch(e){return console.error("Failed to get favorites:",e),[]}}function Fe(e){try{const t=k();return t.some(n=>n._id===e._id)?!1:(t.push(e),localStorage.setItem(M,JSON.stringify(t)),!0)}catch(t){return console.error("Failed to add favorite:",t),!1}}function Q(e){try{const n=k().filter(i=>i._id!==e);return localStorage.setItem(M,JSON.stringify(n)),!0}catch(t){return console.error("Failed to remove favorite:",t),!1}}function _(e){return k().some(n=>n._id===e)}async function Te(){const e=document.getElementById("favorites-container");if(!e)return;const t=await y("favorites-empty");e.innerHTML=t}async function j(){const e=document.getElementById("favorites-container");if(!e)return;const t=k();if(t.length===0){await Te();return}const n=await y("favorite-card"),i=t.map(a=>C(n,{id:a._id,name:a.name,burnedCalories:a.burnedCalories||0,bodyPart:a.bodyPart||"N/A",target:a.target||"N/A"})).join("");e.innerHTML=`<ul class="favorites-grid">${i}</ul>`}function Ce(e){const t=document.getElementById("modal-close-btn");t&&(t.onclick=()=>g("exercise-modal"));const n=document.getElementById("give-rating-btn");n&&(n.onclick=()=>{P(),Se(e)});const i=document.getElementById("add-to-favorites-btn");i&&(i.onclick=async()=>{_(e)&&(Q(e),g("exercise-modal"),await j())},_(e)&&(i.textContent="Remove from favorites"));const a=document.getElementById("exercise-modal");a&&(a.onclick=r=>{r.target===a&&g("exercise-modal")});const s=r=>{r.key==="Escape"&&(g("exercise-modal"),document.removeEventListener("keydown",s))};document.addEventListener("keydown",s)}function Se(e){const t=document.getElementById("rating-modal-close-btn");t&&(t.onclick=()=>f());const n=document.getElementById("rating-form");n&&(n.onsubmit=async s=>{s.preventDefault();const r=U(),c=document.getElementById("rating-email"),d=document.getElementById("rating-review"),m=c?.value.trim(),u=d?.value.trim()||"";if(r<=0){alert("Please select a rating");return}if(!m){alert("Please enter your email"),c?.focus();return}try{await $(e,r,m,u),alert("Rating submitted successfully!"),f()}catch(l){console.error("Failed to submit rating:",l),l.message?.includes("409")?alert("This email has already been used to rate this exercise"):alert("Failed to submit rating. Please try again.")}});const i=document.getElementById("rating-modal");i&&(i.onclick=s=>{s.target===i&&f()});const a=s=>{s.key==="Escape"&&(f(),document.removeEventListener("keydown",a))};document.addEventListener("keydown",a)}async function Me(){const e=document.querySelector(".favorites-page");try{await z(),await j(),je()}catch(t){console.error("Error initializing favorites page:",t)}finally{e&&e.classList.add("loaded")}}function je(){const e=document.getElementById("favorites-container");e&&e.dataset.listenerAttached!=="true"&&(e.dataset.listenerAttached="true",e.addEventListener("click",async t=>{const n=t.target.closest(".favorite-delete-btn");if(n){t.stopPropagation();const a=n.dataset.id;if(a){Q(a);try{await j()}catch(s){console.error("Failed to render favorites:",s)}}return}const i=t.target.closest(".favorite-start-btn");if(i){t.stopPropagation();const a=i.dataset.id;if(!a)return;try{const s=await L(a);S(s),B("exercise-modal"),Ce(a)}catch(s){console.error("Failed to fetch exercise details:",s),alert("Failed to load exercise details.")}}}))}function qe(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}const o={view:"categories",filter:"Muscles",category:null,categoryFilter:null,keyword:"",page:1},E=()=>window.innerWidth<768?9:o.view==="categories"?12:10;async function N(){const e=document.querySelector(".main-content"),t=E();O(o.view,"exercises-container",t);try{await z(),await v()}catch(n){console.error("Error initializing home page:",n)}finally{e&&e.classList.add("loaded")}Re(),Ne(),Ee(He),Ae()}function Ae(){let e,t=E();window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(()=>{const n=E();n!==t&&(t=n,o.page=1,v())},300)})}async function v(){const e=document.getElementById("exercises-container");try{const t=E();if(O(o.view,"exercises-container",t),o.view==="categories"){const n=await de({filter:o.filter,page:o.page,limit:t});we(n.results,"exercises-container"),R(n.page?Number(n.page):1,n.totalPages||1)}else{const n={limit:t,page:o.page};o.categoryFilter==="Muscles"?n.muscles=o.category.toLowerCase():o.categoryFilter==="Body parts"?n.bodypart=o.category.toLowerCase():o.categoryFilter==="Equipment"&&(n.equipment=o.category.toLowerCase()),o.keyword&&(n.keyword=o.keyword);const i=await me(n);xe(i.results,"exercises-container"),R(i.page?Number(i.page):1,i.totalPages||1)}}catch(t){console.error("Fetch error:",t),e&&(e.innerHTML='<p class="error-message">Failed to load data. Please try again.</p>')}}function He(e){e&&e!==o.page&&(o.page=e,v(),Le())}function Re(){const e=document.getElementById("filter-tabs");e&&e.dataset.listenerAttached!=="true"&&(e.dataset.listenerAttached="true",e.addEventListener("click",async t=>{const n=t.target.closest(".filter-tab");if(n){document.querySelectorAll(".filter-tab").forEach(i=>i.classList.remove("active")),n.classList.add("active"),o.filter=n.dataset.filter,o.view="categories",o.page=1,o.keyword="",o.category=null,Oe();try{await v()}catch(i){console.error("Failed to fetch data:",i)}}}))}function Ne(){const e=document.getElementById("exercises-container");e&&e.dataset.listenerAttached!=="true"&&(e.dataset.listenerAttached="true",e.addEventListener("click",async t=>{const n=t.target.closest(".category-card");if(n){const a=n.dataset.name,s=n.dataset.filter;if(!a)return;o.view="exercises",o.category=a,o.categoryFilter=s,o.page=1,o.keyword="",$e(a),Pe();try{await v()}catch(r){console.error("Failed to fetch exercises:",r)}return}const i=t.target.closest(".exercise-start-btn");if(i){const a=i.dataset.id;if(!a)return;try{const s=await L(a);S(s),B("exercise-modal"),De(a)}catch(s){console.error(`Failed to fetch exercise details for ${a}:`,s),alert("Failed to load exercise details. Please try again.")}}}))}function $e(e){const t=document.getElementById("section-title"),n=document.getElementById("exercise-search-form");t&&(t.innerHTML=`Exercises / <span class="category-name">${e}</span>`),n&&n.classList.remove("hidden")}function Oe(){const e=document.getElementById("section-title"),t=document.getElementById("exercise-search-form"),n=document.getElementById("exercise-search-input"),i=document.getElementById("exercise-clear-btn");e&&(e.textContent="Exercises"),t&&t.classList.add("hidden"),n&&(n.value=""),i&&i.classList.add("hidden")}function Pe(){const e=document.getElementById("exercise-search-form"),t=document.getElementById("exercise-search-input"),n=document.getElementById("exercise-clear-btn");!e||!t||e.dataset.listenerAttached!=="true"&&(e.dataset.listenerAttached="true",t.addEventListener("input",()=>{t.value.trim()?n.classList.remove("hidden"):n.classList.add("hidden")}),n.addEventListener("click",async()=>{t.value="",n.classList.add("hidden"),t.focus(),o.keyword="",o.page=1;try{await v()}catch(i){console.error("Failed to fetch exercises:",i)}}),e.addEventListener("submit",async i=>{i.preventDefault();const a=t.value.trim();o.keyword=a,o.page=1;try{await v()}catch(s){console.error("Failed to search exercises:",s)}}))}function De(e){const t=document.getElementById("modal-close-btn");t&&(t.onclick=()=>g("exercise-modal"));const n=document.getElementById("give-rating-btn");n&&(n.onclick=()=>{P(),Ue(e)});const i=document.getElementById("add-to-favorites-btn");i&&(i.onclick=async()=>{if(_(e))alert("This exercise is already in your favorites");else{const r=await L(e);Fe(r),i.innerHTML=`
          Added to favorites
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 3.5C10 3.5 6.5 1 3.5 3.5C0.5 6 2 10 10 16.5C18 10 19.5 6 16.5 3.5C13.5 1 10 3.5 10 3.5Z" fill="#242424" stroke="#242424" stroke-width="1.5"/>
          </svg>
        `,setTimeout(()=>{i.textContent="Add to favorites"},2e3)}},_(e)&&(i.textContent="Already in favorites",i.disabled=!0,i.style.opacity="0.6"));const a=document.getElementById("exercise-modal");a&&(a.onclick=r=>{r.target===a&&g("exercise-modal")});const s=r=>{r.key==="Escape"&&(g("exercise-modal"),document.removeEventListener("keydown",s))};document.addEventListener("keydown",s)}function Ue(e){const t=document.getElementById("rating-modal-close-btn");t&&(t.onclick=()=>f());const n=document.getElementById("rating-form");n&&(n.onsubmit=async s=>{s.preventDefault();const r=U(),c=document.getElementById("rating-email"),d=document.getElementById("rating-review"),m=c?.value.trim(),u=d?.value.trim()||"";if(r<=0){alert("Please select a rating");return}if(!m){alert("Please enter your email"),c?.focus();return}if(!qe(m)){alert("Please enter a valid email address"),c?.classList.add("error"),c?.focus();return}c?.classList.remove("error");try{await $(e,r,m,u),alert("Rating submitted successfully!"),f();const l=await L(e);S(l)}catch(l){console.error("Failed to submit rating:",l),l.message?.includes("409")?alert("This email has already been used to rate this exercise"):alert("Failed to submit rating. Please try again.")}});const i=document.getElementById("rating-modal");i&&(i.onclick=s=>{s.target===i&&f()});const a=s=>{s.key==="Escape"&&(f(),document.removeEventListener("keydown",a))};document.addEventListener("keydown",a)}function h(e){const t=document.getElementById("nav-home"),n=document.getElementById("nav-favorites");!t||!n||(t.classList.remove("active"),n.classList.remove("active"),e==="/favorites"?n.classList.add("active"):t.classList.add("active"))}function We(){const e=document.querySelector(".navigation");e&&e.addEventListener("click",n=>{const i=n.target.closest(".nav-link");if(!i)return;n.preventDefault();const a=i.dataset.route;a&&(w.navigate(a),h(a))});const t=document.querySelector(".mobile-navigation");t&&t.addEventListener("click",n=>{const i=n.target.closest(".mobile-nav-link");if(!i)return;n.preventDefault();const a=i.dataset.route;a&&(w.navigate(a),h(a),x())})}function ze(){const e=document.getElementById("burger-btn"),t=document.getElementById("mobile-menu"),n=document.getElementById("mobile-close-btn");!e||!t||!n||(e.addEventListener("click",Qe),n.addEventListener("click",x),t.addEventListener("click",i=>{i.target===t&&x()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&t.classList.contains("is-open")&&x()}))}function Qe(){const e=document.getElementById("mobile-menu"),t=document.getElementById("burger-btn");e&&(e.classList.add("is-open"),document.body.style.overflow="hidden"),t&&t.setAttribute("aria-expanded","true")}function x(){const e=document.getElementById("mobile-menu"),t=document.getElementById("burger-btn");e&&(e.classList.remove("is-open"),document.body.style.overflow=""),t&&t.setAttribute("aria-expanded","false")}document.addEventListener("DOMContentLoaded",()=>{We(),ze()});w.on("/",async()=>{await I("home"),await N(),F(),h("/")}).on("/favorites",async()=>{await I("favorites"),await Me(),F(),h("/favorites")}).notFound(async()=>{await I("home"),await N(),F(),h("/")});function F(){const e=document.getElementById("subscription-form");e&&e.addEventListener("submit",async t=>{t.preventDefault();const n=e.email.value;try{await ge(n),alert("Successfully subscribed!"),e.reset()}catch{alert("Subscription failed. Please check your email or try again later.")}})}document.addEventListener("DOMContentLoaded",()=>{w.resolve()});
//# sourceMappingURL=index.js.map
