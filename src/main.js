// import * as pixabayApi from './js/pixabay-api';
// import * as renderFunctions from './js/render-functions';

// https://pixabay.com/api

/*
<li class="gallery-card">
  <img class="gallery-img" src="" alt="" />
</li>
*/

// fetch(
//   'https://pixabay.com/api/?key=45452240-d9bf2a206a145f9e2645b735d&q=dog&orientation=horizontal'
// );

const searchFormEl = document.querySelector('.js-search-form');

const onSearchFormSubmit = event => {
  event.preventDefault();

  console.dir(searchFormEl);
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
