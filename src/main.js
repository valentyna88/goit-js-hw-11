import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// import * as pixabayApi from './js/pixabay-api';
// import * as renderFunctions from './js/render-functions';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');

const createGalleryCardTemplate = imgInfo => {
  return `
    <div class="image-container">
      <li class="gallery-card">
        <div class="image-viewer">
          <a class="gallery-link" href="${imgInfo.largeImageURL}">
            <img class="gallery-image" src="${imgInfo.webformatURL}" alt="${imgInfo.tags}" />
          </a>
        </div>
        <ul class="gallery-info-list">
          <li class="gallery-info-item">
            <h3>Likes</h3>
            <p>${imgInfo.likes}</p>
          </li>
          <li class="gallery-info-item">
            <h3>Views</h3>
            <p>${imgInfo.views}</p>
          </li>
          <li class="gallery-info-item">
            <h3>Comments</h3>
            <p>${imgInfo.comments}</p>
          </li>
          <li class="gallery-info-item">
            <h3>Downloads</h3>
            <p>${imgInfo.downloads}</p>
          </li>
        </ul>
      </li>
    </div>
  `;
};

const onSearchFormSubmit = event => {
  event.preventDefault();

  const searchedValue = searchFormEl.elements.user_query.value;

  fetch(
    `https://pixabay.com/api/?key=45452240-d9bf2a206a145f9e2645b735d&q=${searchedValue}&orientation=horizontal`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);

      const galleryCardsTemplate = data.hits
        .map(imgDetails => createGalleryCardTemplate(imgDetails))
        .join('');
      galleryEl.innerHTML = galleryCardsTemplate;
    })
    .catch(err => {
      console.log(err);
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
