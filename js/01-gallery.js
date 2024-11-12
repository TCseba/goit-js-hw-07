import { galleryItems } from '../../gallery-items.js';

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
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;
}).join('');

gallery.innerHTML = galleryMarkup;

// Delegarea la ul.gallery și obținerea unui url a imaginii mari
gallery.addEventListener('click', event => {
  event.preventDefault();

  const imgElement = event.target.classList.contains('gallery__image');
  if (!imgElement) return;

  const imgSource = event.target.dataset.source;

  // Deschidere fereastră modală
  const instance = basicLightbox.create(`
    <img src="${imgSource}" width="800" height="600">
  `);
  instance.show();

  // Închiderea ferestrei modale la apăsarea tastei Escape
  const closeModalOnEsc = event => {
    if (event.key === 'Escape') {
      instance.close();
      document.removeEventListener('keydown', closeModalOnEsc);
    }
  };

  document.addEventListener('keydown', closeModalOnEsc);
});
