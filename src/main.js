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
