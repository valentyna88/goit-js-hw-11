export function renderImages(images) {
  const gallery = document.querySelector('.gallery');
  const galleryMarkup = images
    .map(
      image => `
    <div class="image-container">
      <li class="gallery-item">
        <div class="image-viewer">
          <a class="gallery-link" href="${image.largeImageURL}">
            <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}"
          /></a>
        </div>
        <ul class="gallery-info-list">
          <li class="gallery-info-item">
            <h3>Likes</h3>
            <p>${image.likes}</p>
          </li>
          <li class="gallery-info-item">
            <h3>Views</h3>
            <p>${image.views}</p>
          </li>
          <li class="gallery-info-item">
            <h3>Comment</h3>
            <p>${image.comments}</p>
          </li>
          <li class="gallery-info-item">
            <h3>Downloads</h3>
            <p>${image.downloads}</p>
          </li>
        </ul>
      </li>
    </div>
  `
    )
    .join('');
  gallery.innerHTML = galleryMarkup;
}
