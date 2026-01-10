import{a as D}from"./assets/vendor-BWC8OeqA.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();const z="https://your-energy.b.goit.study/api",p=D.create({baseURL:z}),Q=async()=>{const{data:e}=await p.get("/quote");return e},V=async({filter:e,page:t=1,limit:n=12})=>{const{data:a}=await p.get("/filters",{params:{filter:e,page:t,limit:n}});return a},J=async({bodypart:e,muscles:t,equipment:n,keyword:a,page:i=1,limit:r=10})=>{const s={page:i,limit:r};e&&(s.bodypart=e),t&&(s.muscles=t),n&&(s.equipment=n),a&&(s.keyword=a);const{data:c}=await p.get("/exercises",{params:s});return c},E=async e=>{const{data:t}=await p.get(`/exercises/${e}`);return t},S=async(e,t,n,a="")=>{const i={rate:t,email:n};a&&(i.review=a);const{data:r}=await p.patch(`/exercises/${e}/rating`,i);return r},K=async e=>{const{data:t}=await p.post("/subscription",{email:e});return t},Z=`<li class="exercise-card" data-id="{{id}}">
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
`,W=`<li class="category-card" data-filter="{{filter}}" data-name="{{name}}">
  <img src="{{imgURL}}" alt="{{name}}" class="category-card-bg" loading="lazy" />
  <div class="category-card-overlay"></div>
  <div class="category-card-content">
    <h3 class="category-name">{{name}}</h3>
    <p class="category-filter">{{filter}}</p>
  </div>
</li>
`,Y=`<li class="favorite-card" data-id="{{id}}">
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
`,G=`<div class="favorites-empty">
  <p class="favorites-empty-text">
    It appears that you haven't added any exercises to your favorites yet. To get started, you can
    add exercises that you like to your favorites for easier access in the future.
  </p>
</div>
`,X=`<div class="pagination">
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
`,ee={"exercise-card":Z,"category-card":W,"favorite-card":Y,"favorites-empty":G,pagination:X},M={...ee},y=async e=>M[e]?M[e]:(console.warn(`Template not found in bundle: ${e}`),""),I=(e,t)=>e.replace(/\{\{(\w+)\}\}/g,(n,a)=>t[a]!==void 0?t[a]:""),te=e=>{const t=document.getElementById("quote-text"),n=document.getElementById("quote-author");t&&e.quote&&(t.textContent=e.quote),n&&e.author&&(n.textContent=e.author)},ne=async(e,t)=>{const n=document.getElementById(t);if(!n)return;if(e.length===0){n.innerHTML='<p class="no-results">No exercises found. Try another filter.</p>';return}const a=await y("exercise-card"),i=e.map(r=>I(a,{id:r._id,rating:r.rating||0,ratingFormatted:r.rating?r.rating.toFixed(1):"0.0",name:r.name,burnedCalories:r.burnedCalories||0,time:r.time||0,bodyPart:r.bodyPart||"N/A",target:r.target||"N/A"})).join("");n.innerHTML=`<ul class="exercises-grid">${i}</ul>`},ae=async(e,t)=>{const n=document.getElementById(t);if(!n)return;if(e.length===0){n.innerHTML='<p class="no-results">No categories found.</p>';return}const a=await y("category-card"),i=e.map(r=>I(a,{filter:r.filter,name:r.name,imgURL:r.imgURL||""})).join("");n.innerHTML=`<ul class="categories-grid">${i}</ul>`},q=(e,t,n=9)=>{const a=document.getElementById(t);if(!a)return;let i="";e==="categories"?(i=Array(n).fill('<li class="category-skeleton skeleton-shimmer"></li>').join(""),a.innerHTML=`<ul class="categories-grid">${i}</ul>`):(i=Array(n).fill(`
      <li class="exercise-skeleton">
        <div class="shimmer-header">
           <div class="shimmer-badge skeleton-shimmer"></div>
           <div class="shimmer-badge skeleton-shimmer"></div>
        </div>
        <div class="shimmer-title skeleton-shimmer"></div>
        <div class="shimmer-line skeleton-shimmer"></div>
        <div class="shimmer-line skeleton-shimmer"></div>
      </li>
    `).join(""),a.innerHTML=`<ul class="exercises-grid">${i}</ul>`)},A=async(e,t,n="pagination-container")=>{const a=document.getElementById(n);if(!a)return;if(t<=1){a.innerHTML="";return}if(!a.querySelector(".pagination")){const l=await y("pagination");a.innerHTML=l}const i=a.querySelector(".pagination-first"),r=a.querySelector(".pagination-prev"),s=a.querySelector(".pagination-next"),c=a.querySelector(".pagination-last"),d=a.querySelector(".pagination-nbrs");i.disabled=e===1,r.disabled=e===1,r.dataset.page=e-1,s.disabled=e===t,s.dataset.page=e+1,c.disabled=e===t,c.dataset.page=t;const g=ie(e,t).map(l=>l==="..."?'<span class="pagination-dots">...</span>':`<button class="pagination-number ${l===e?"pagination-number--active":""}" data-page="${l}" ${l===e?"disabled":""}>${l}</button>`).join("");d.innerHTML=g};function ie(e,t){const n=[];if(t<=3){for(let r=1;r<=t;r++)n.push(r);return n}let a,i;e===1?(a=1,i=3):e===t?(a=t-2,i=t):(a=e-1,i=e+1),a>1&&n.push("...");for(let r=a;r<=i;r++)n.push(r);return i<t&&n.push("..."),n}function re(e,t="pagination-container"){const n=document.getElementById(t);n&&n.dataset.listenerAttached!=="true"&&(n.dataset.listenerAttached="true",n.addEventListener("click",a=>{const i=a.target.closest(".pagination-number, .pagination-btn");if(!i||i.nodeName!=="BUTTON"&&!i.classList.contains("pagination-number")||i.disabled||i.classList.contains("pagination-dots"))return;const r=Number(i.dataset.page);r&&!isNaN(r)&&e(r)}))}function se(e="exercises-header"){const t=document.getElementById(e);t?t.scrollIntoView({behavior:"smooth"}):document.querySelector(".exercises-section")?.scrollIntoView({behavior:"smooth"})}const L=e=>{const t=document.getElementById(e);t&&(t.classList.add("active"),t.setAttribute("aria-hidden","false"),document.body.classList.add("modal-open"))},m=e=>{const t=document.getElementById(e);t&&(t.classList.remove("active"),t.setAttribute("aria-hidden","true"),document.body.classList.remove("modal-open"))},k=e=>{if(!e)return;const t=document.getElementById("modal-exercise-gif");t&&(t.src=e.gifUrl||"",t.alt=e.name||"Exercise");const n=document.getElementById("modal-exercise-title");n&&(n.textContent=e.name||"Exercise");const a=document.getElementById("modal-exercise-rating");if(a){const l=e.rating||0,U=Math.floor(l);a.innerHTML=`
      <span class="rating-value">${l.toFixed(1)}</span>
      <div class="rating-stars">
        ${Array.from({length:5},(Se,j)=>{const T=j<U?"filled":"";return`<svg class="star ${T}" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 1.5L11.3175 6.195L16.5 6.9525L12.75 10.605L13.635 15.765L9 13.3275L4.365 15.765L5.25 10.605L1.5 6.9525L6.6825 6.195L9 1.5Z" fill="${T?"#EEA10C":"rgba(244, 244, 244, 0.2)"}"/>
          </svg>`}).join("")}
      </div>
    `}const i=document.getElementById("modal-target");i&&(i.textContent=e.target||"N/A");const r=document.getElementById("modal-bodypart");r&&(r.textContent=e.bodyPart||"N/A");const s=document.getElementById("modal-equipment");s&&(s.textContent=e.equipment||"N/A");const c=document.getElementById("modal-popular");c&&(c.textContent=e.popularity||"0");const d=document.getElementById("modal-calories");d&&(d.textContent=`${e.burnedCalories||0}/${e.time||0} min`);const u=document.getElementById("modal-description");u&&(u.textContent=e.description||"No description available.");const g=document.getElementById("exercise-modal");g&&(g.dataset.exerciseId=e._id)},R=()=>{m("exercise-modal"),L("rating-modal"),N(),oe()},f=()=>{m("rating-modal"),L("exercise-modal"),N()},N=()=>{const e=document.querySelectorAll("#rating-modal .rating-star"),t=document.getElementById("rating-display-value"),n=document.getElementById("rating-email"),a=document.getElementById("rating-review");e.forEach(i=>i.classList.remove("active")),t&&(t.textContent="0.0"),n&&(n.value="",n.classList.remove("error")),a&&(a.value="")},oe=()=>{const e=document.getElementById("rating-stars"),t=document.getElementById("rating-display-value");e&&e.dataset.listenerAttached!=="true"&&(e.dataset.listenerAttached="true",e.addEventListener("click",n=>{const a=n.target.closest(".rating-star");if(!a)return;const i=parseFloat(a.dataset.rating),r=e.querySelectorAll(".rating-star"),s=Array.from(r).indexOf(a);r.forEach((c,d)=>{d<=s?c.classList.add("active"):c.classList.remove("active")}),t&&(t.textContent=i.toFixed(1))}),e.addEventListener("mouseover",n=>{const a=n.target.closest(".rating-star");if(!a)return;const i=e.querySelectorAll(".rating-star"),r=Array.from(i).indexOf(a);i.forEach((s,c)=>{c<=r?s.classList.add("hover"):s.classList.remove("hover")})}),e.addEventListener("mouseleave",()=>{e.querySelectorAll(".rating-star").forEach(a=>a.classList.remove("hover"))}))},H=()=>{const e=document.getElementById("rating-display-value");return e?parseFloat(e.textContent):0},x="quote-of-the-day";function O(){return new Date().toISOString().split("T")[0]}function ce(){try{const e=localStorage.getItem(x);if(!e)return null;const{quote:t,author:n,date:a}=JSON.parse(e),i=O();return a===i?{quote:t,author:n}:(localStorage.removeItem(x),null)}catch(e){return console.error("Error reading cached quote:",e),null}}function le(e,t){try{const n={quote:e,author:t,date:O()};localStorage.setItem(x,JSON.stringify(n))}catch(n){console.error("Error caching quote:",n)}}async function $(){try{let e=ce();e||(e=await Q(),le(e.quote,e.author)),te(e)}catch(e){console.error("Failed to initialize quote:",e)}}const C="favoriteExercises";function w(){try{const e=localStorage.getItem(C);return e?JSON.parse(e):[]}catch(e){return console.error("Failed to get favorites:",e),[]}}function de(e){try{const t=w();return t.some(n=>n._id===e._id)?!1:(t.push(e),localStorage.setItem(C,JSON.stringify(t)),!0)}catch(t){return console.error("Failed to add favorite:",t),!1}}function P(e){try{const n=w().filter(a=>a._id!==e);return localStorage.setItem(C,JSON.stringify(n)),!0}catch(t){return console.error("Failed to remove favorite:",t),!1}}function h(e){return w().some(n=>n._id===e)}async function ue(){const e=document.getElementById("favorites-container");if(!e)return;const t=await y("favorites-empty");e.innerHTML=t}async function F(){const e=document.getElementById("favorites-container");if(!e)return;const t=w();if(t.length===0){await ue();return}const n=await y("favorite-card"),a=t.map(i=>I(n,{id:i._id,name:i.name,burnedCalories:i.burnedCalories||0,bodyPart:i.bodyPart||"N/A",target:i.target||"N/A"})).join("");e.innerHTML=`<ul class="favorites-grid">${a}</ul>`}function me(e){const t=document.getElementById("modal-close-btn");t&&(t.onclick=()=>m("exercise-modal"));const n=document.getElementById("give-rating-btn");n&&(n.onclick=()=>{R(),ge(e)});const a=document.getElementById("add-to-favorites-btn");a&&(a.onclick=async()=>{h(e)&&(P(e),m("exercise-modal"),await F())},h(e)&&(a.textContent="Remove from favorites"));const i=document.getElementById("exercise-modal");i&&(i.onclick=s=>{s.target===i&&m("exercise-modal")});const r=s=>{s.key==="Escape"&&(m("exercise-modal"),document.removeEventListener("keydown",r))};document.addEventListener("keydown",r)}function ge(e){const t=document.getElementById("rating-modal-close-btn");t&&(t.onclick=()=>f());const n=document.getElementById("rating-form");n&&(n.onsubmit=async r=>{r.preventDefault();const s=H(),c=document.getElementById("rating-email"),d=document.getElementById("rating-review"),u=c?.value.trim(),g=d?.value.trim()||"";if(s<=0){alert("Please select a rating");return}if(!u){alert("Please enter your email"),c?.focus();return}try{await S(e,s,u,g),alert("Rating submitted successfully!"),f()}catch(l){console.error("Failed to submit rating:",l),l.message?.includes("409")?alert("This email has already been used to rate this exercise"):alert("Failed to submit rating. Please try again.")}});const a=document.getElementById("rating-modal");a&&(a.onclick=r=>{r.target===a&&f()});const i=r=>{r.key==="Escape"&&(f(),document.removeEventListener("keydown",i))};document.addEventListener("keydown",i)}async function fe(){const e=document.querySelector(".favorites-page");try{await $(),await F(),ve()}catch(t){console.error("Error initializing favorites page:",t)}finally{e&&e.classList.add("loaded")}}function ve(){const e=document.getElementById("favorites-container");e&&e.dataset.listenerAttached!=="true"&&(e.dataset.listenerAttached="true",e.addEventListener("click",async t=>{const n=t.target.closest(".favorite-delete-btn");if(n){t.stopPropagation();const i=n.dataset.id;if(i){P(i);try{await F()}catch(r){console.error("Failed to render favorites:",r)}}return}const a=t.target.closest(".favorite-start-btn");if(a){t.stopPropagation();const i=a.dataset.id;if(!i)return;try{const r=await E(i);k(r),L("exercise-modal"),me(i)}catch(r){console.error("Failed to fetch exercise details:",r),alert("Failed to load exercise details.")}}}))}function pe(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}const o={view:"categories",filter:"Muscles",category:null,categoryFilter:null,keyword:"",page:1},b=()=>window.innerWidth<768?9:o.view==="categories"?12:10;async function ye(){const e=document.querySelector(".main-content"),t=b();q(o.view,"exercises-container",t);try{await $(),await v()}catch(n){console.error("Error initializing home page:",n)}finally{e&&e.classList.add("loaded")}Ee(),Le(),re(be),he()}function he(){let e,t=b();window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(()=>{const n=b();n!==t&&(t=n,o.page=1,v())},300)})}async function v(){const e=document.getElementById("exercises-container");try{const t=b();if(q(o.view,"exercises-container",t),o.view==="categories"){const n=await V({filter:o.filter,page:o.page,limit:t});ae(n.results,"exercises-container"),A(n.page?Number(n.page):1,n.totalPages||1)}else{const n={limit:t,page:o.page};o.categoryFilter==="Muscles"?n.muscles=o.category.toLowerCase():o.categoryFilter==="Body parts"?n.bodypart=o.category.toLowerCase():o.categoryFilter==="Equipment"&&(n.equipment=o.category.toLowerCase()),o.keyword&&(n.keyword=o.keyword);const a=await J(n);ne(a.results,"exercises-container"),A(a.page?Number(a.page):1,a.totalPages||1)}}catch(t){console.error("Fetch error:",t),e&&(e.innerHTML='<p class="error-message">Failed to load data. Please try again.</p>')}}function be(e){e&&e!==o.page&&(o.page=e,v(),se())}function Ee(){const e=document.getElementById("filter-tabs");e&&e.dataset.listenerAttached!=="true"&&(e.dataset.listenerAttached="true",e.addEventListener("click",async t=>{const n=t.target.closest(".filter-tab");if(n){document.querySelectorAll(".filter-tab").forEach(a=>a.classList.remove("active")),n.classList.add("active"),o.filter=n.dataset.filter,o.view="categories",o.page=1,o.keyword="",o.category=null,Be();try{await v()}catch(a){console.error("Failed to fetch data:",a)}}}))}function Le(){const e=document.getElementById("exercises-container");e&&e.dataset.listenerAttached!=="true"&&(e.dataset.listenerAttached="true",e.addEventListener("click",async t=>{const n=t.target.closest(".category-card");if(n){const i=n.dataset.name,r=n.dataset.filter;if(!i)return;o.view="exercises",o.category=i,o.categoryFilter=r,o.page=1,o.keyword="",we(i),xe();try{await v()}catch(s){console.error("Failed to fetch exercises:",s)}return}const a=t.target.closest(".exercise-start-btn");if(a){const i=a.dataset.id;if(!i)return;try{const r=await E(i);k(r),L("exercise-modal"),Ie(i)}catch(r){console.error(`Failed to fetch exercise details for ${i}:`,r),alert("Failed to load exercise details. Please try again.")}}}))}function we(e){const t=document.getElementById("section-title"),n=document.getElementById("exercise-search-form");t&&(t.innerHTML=`Exercises / <span class="category-name">${e}</span>`),n&&n.classList.remove("hidden")}function Be(){const e=document.getElementById("section-title"),t=document.getElementById("exercise-search-form"),n=document.getElementById("exercise-search-input"),a=document.getElementById("exercise-clear-btn");e&&(e.textContent="Exercises"),t&&t.classList.add("hidden"),n&&(n.value=""),a&&a.classList.add("hidden")}function xe(){const e=document.getElementById("exercise-search-form"),t=document.getElementById("exercise-search-input"),n=document.getElementById("exercise-clear-btn");!e||!t||e.dataset.listenerAttached!=="true"&&(e.dataset.listenerAttached="true",t.addEventListener("input",()=>{t.value.trim()?n.classList.remove("hidden"):n.classList.add("hidden")}),n.addEventListener("click",async()=>{t.value="",n.classList.add("hidden"),t.focus(),o.keyword="",o.page=1;try{await v()}catch(a){console.error("Failed to fetch exercises:",a)}}),e.addEventListener("submit",async a=>{a.preventDefault();const i=t.value.trim();o.keyword=i,o.page=1;try{await v()}catch(r){console.error("Failed to search exercises:",r)}}))}function Ie(e){const t=document.getElementById("modal-close-btn");t&&(t.onclick=()=>m("exercise-modal"));const n=document.getElementById("give-rating-btn");n&&(n.onclick=()=>{R(),ke(e)});const a=document.getElementById("add-to-favorites-btn");a&&(a.onclick=async()=>{if(h(e))alert("This exercise is already in your favorites");else{const s=await E(e);de(s),a.innerHTML=`
          Added to favorites
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 3.5C10 3.5 6.5 1 3.5 3.5C0.5 6 2 10 10 16.5C18 10 19.5 6 16.5 3.5C13.5 1 10 3.5 10 3.5Z" fill="#242424" stroke="#242424" stroke-width="1.5"/>
          </svg>
        `,setTimeout(()=>{a.textContent="Add to favorites"},2e3)}},h(e)&&(a.textContent="Already in favorites",a.disabled=!0,a.style.opacity="0.6"));const i=document.getElementById("exercise-modal");i&&(i.onclick=s=>{s.target===i&&m("exercise-modal")});const r=s=>{s.key==="Escape"&&(m("exercise-modal"),document.removeEventListener("keydown",r))};document.addEventListener("keydown",r)}function ke(e){const t=document.getElementById("rating-modal-close-btn");t&&(t.onclick=()=>f());const n=document.getElementById("rating-form");n&&(n.onsubmit=async r=>{r.preventDefault();const s=H(),c=document.getElementById("rating-email"),d=document.getElementById("rating-review"),u=c?.value.trim(),g=d?.value.trim()||"";if(s<=0){alert("Please select a rating");return}if(!u){alert("Please enter your email"),c?.focus();return}if(!pe(u)){alert("Please enter a valid email address"),c?.classList.add("error"),c?.focus();return}c?.classList.remove("error");try{await S(e,s,u,g),alert("Rating submitted successfully!"),f();const l=await E(e);k(l)}catch(l){console.error("Failed to submit rating:",l),l.message?.includes("409")?alert("This email has already been used to rate this exercise"):alert("Failed to submit rating. Please try again.")}});const a=document.getElementById("rating-modal");a&&(a.onclick=r=>{r.target===a&&f()});const i=r=>{r.key==="Escape"&&(f(),document.removeEventListener("keydown",i))};document.addEventListener("keydown",i)}function Ce(){const e=document.getElementById("burger-btn"),t=document.getElementById("mobile-menu"),n=document.getElementById("mobile-close-btn");!e||!t||!n||(e.addEventListener("click",Fe),n.addEventListener("click",B),t.addEventListener("click",a=>{a.target===t&&B()}),document.addEventListener("keydown",a=>{a.key==="Escape"&&t.classList.contains("is-open")&&B()}))}function Fe(){const e=document.getElementById("mobile-menu"),t=document.getElementById("burger-btn");e&&(e.classList.add("is-open"),document.body.style.overflow="hidden"),t&&t.setAttribute("aria-expanded","true")}function B(){const e=document.getElementById("mobile-menu"),t=document.getElementById("burger-btn");e&&(e.classList.remove("is-open"),document.body.style.overflow=""),t&&t.setAttribute("aria-expanded","false")}document.addEventListener("DOMContentLoaded",()=>{Ce()});function _(e){const t=document.getElementById("home-page"),n=document.getElementById("favorites-page");e==="home"?(t?.classList.remove("hidden"),n?.classList.add("hidden"),ye()):e==="favorites"&&(t?.classList.add("hidden"),n?.classList.remove("hidden"),fe())}function Te(e){const t=document.getElementById("nav-home"),n=document.getElementById("nav-favorites");!t||!n||(t.classList.remove("active"),n.classList.remove("active"),e==="favorites"?n.classList.add("active"):t.classList.add("active"))}function Me(){document.querySelectorAll("[data-page]").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const n=e.dataset.page;_(n),Te(n)})})}function Ae(){const e=document.getElementById("subscription-form");e&&e.addEventListener("submit",async t=>{t.preventDefault();const n=e.email.value;try{await K(n),alert("Successfully subscribed!"),e.reset()}catch{alert("Subscription failed. Please check your email or try again later.")}})}document.addEventListener("DOMContentLoaded",()=>{Me(),Ae(),_("home")});
//# sourceMappingURL=index.js.map
