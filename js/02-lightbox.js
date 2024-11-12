import { galleryItems } from '../gallery-items.js';
// Change code below this line

console.log(galleryItems);

// Selectăm elementul <ul> cu clasa .gallery
const gallery = document.querySelector('.gallery');

// Creăm și randăm marcajul pe baza datelor din matricea galleryItems
const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>`;
}).join('');

gallery.innerHTML = galleryMarkup;

// Inițializăm SimpleLightbox după ce elementele galeriei sunt create și adăugate în ul.gallery
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
