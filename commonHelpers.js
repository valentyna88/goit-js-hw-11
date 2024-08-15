import"./assets/vendor-b20c67ea.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const a=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),n=t=>`
    <div class="image-container">
      <li class="gallery-card">
        <div class="image-viewer">
          <a class="gallery-link" href="${t.largeImageURL}">
            <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" />
          </a>
        </div>
        <ul class="gallery-info-list">
          <li class="gallery-info-item">
            <h3>Likes</h3>
            <p>${t.likes}</p>
          </li>
          <li class="gallery-info-item">
            <h3>Views</h3>
            <p>${t.views}</p>
          </li>
          <li class="gallery-info-item">
            <h3>Comments</h3>
            <p>${t.comments}</p>
          </li>
          <li class="gallery-info-item">
            <h3>Downloads</h3>
            <p>${t.downloads}</p>
          </li>
        </ul>
      </li>
    </div>
  `,u=t=>{t.preventDefault();const s=a.elements.user_query.value;fetch(`https://pixabay.com/api/?key=45452240-d9bf2a206a145f9e2645b735d&q=${s}&orientation=horizontal`).then(l=>{if(!l.ok)throw new Error(l.status);return l.json()}).then(l=>{console.log(l);const o=l.hits.map(e=>n(e)).join("");c.innerHTML=o}).catch(l=>{console.log(l)})};a.addEventListener("submit",u);
//# sourceMappingURL=commonHelpers.js.map
