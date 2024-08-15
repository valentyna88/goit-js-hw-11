import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// import * as pixabayApi from './js/pixabay-api';
// import * as renderFunctions from './js/render-functions';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');

const createGalleryCardTemplate = () => {
  return `
  <li class="gallery-card">
    <img class="gallery-img" src="" alt="" />
  </li>
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
    })
    .catch(err => {
      console.log(err);
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
