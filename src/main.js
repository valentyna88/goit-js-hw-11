import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
searchFormEl.addEventListener('submit', onSearchFormSubmit);

const lightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.8,
});

function onSearchFormSubmit(event) {
  event.preventDefault();
}

// const onSearchFormSubmit = event => {
//   event.preventDefault();

//   const searchedValue = searchFormEl.elements.user_query.value;

//       const galleryCardsTemplate = data.hits
//         .map(imgDetails => createGalleryCardTemplate(imgDetails))
//         .join('');
//       galleryEl.innerHTML = galleryCardsTemplate;
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };
