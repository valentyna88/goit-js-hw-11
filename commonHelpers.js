import{i as a,S as y}from"./assets/vendor-8c59ed88.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const g="45452240-d9bf2a206a145f9e2645b735d",d="https://pixabay.com/api/";function h(s){const i=new URLSearchParams({key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${d}?${i}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function p(s){const i=document.querySelector(".js-gallery");i.innerHTML="";const t=s.map(({largeImageURL:o,webformatURL:e,tags:r,likes:l,views:u,comments:f,downloads:m})=>`
    <div class="image-container">
      <li class="gallery-item">
        <div class="image-viewer">
          <a class="gallery-link" href="${o}">
            <img class="gallery-image" src="${e}" alt="${r}" loading="lazy" />
          </a>
        </div>
        <ul class="gallery-info-list">
          <li class="gallery-info-item">
            <h3>Likes</h3>
            <p>${l}</p>
          </li>
          <li class="gallery-info-item">
            <h3>Views</h3>
            <p>${u}</p>
          </li>
          <li class="gallery-info-item">
            <h3>Comments</h3>
            <p>${f}</p>
          </li>
          <li class="gallery-info-item">
            <h3>Downloads</h3>
            <p>${m}</p>
          </li>
        </ul>
      </li>
    </div>
  `).join("");i.innerHTML=t}const L=document.querySelector(".js-search-form"),c=document.querySelector(".loader");let n;L.addEventListener("submit",function(s){s.preventDefault();const i=s.target.elements.user_query.value.trim();if(i===""){a.error({title:"Error",message:"Please enter a search term."});return}c.style.display="block",h(i).then(t=>{t.hits.length===0?a.error({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"}):(p(t.hits),n?n.refresh():n=new y(".gallery a"))}).catch(t=>{console.error(t),a.error({title:"Error",message:"Failed to fetch images. Please try again later."})}).finally(()=>{c.style.display="none",s.target.reset()})});
//# sourceMappingURL=commonHelpers.js.map
