import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { thanksGalleryItems } from './02-gallery-thank-items';

// console.log(thanksGalleryItems);

// Знаходимо галерею та її елементи "li"
const thanksGalleryEl = document.querySelector('.thanks-gallery');

// Додаємо розмітку в структуру
thanksGalleryEl.innerHTML = createListImg(thanksGalleryItems);

// Функція створення розмітки "li" списку в HTML
function createListImg(images) {
  return images
    .map(
      ({ preview, original, description }) =>
        `<li class="thank-gallery__item">
            <a class="thank-gallery__link" href="${original}">
                <img
                    class="thank-gallery__image"
                    src="${preview}"
                    alt="${description}"
                    loading="lazy"
                    width="360px" 
                    height="360px"
                />
            </a>
        </li>`
    )
    .join('');
}

// бібліотека SimpleLightbox
const lightbox = new SimpleLightbox('.thanks-gallery a', {
  // captions: false,
  // captionsData: 'alt',
  // captionDelay: 1000,
  // captionPosition: top,
  // nav: true,
  // close: true,
  // overlay: true,
});