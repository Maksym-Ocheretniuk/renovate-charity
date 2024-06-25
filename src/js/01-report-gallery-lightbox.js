import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { reportsGalleryItems } from './01-gallery-report-items.js';

// console.log(reportsGalleryItems);

// Знаходимо галерею та її елементи "li"
const reportsGalleryEl = document.querySelector('.reports-gallery');

// Додаємо розмітку в структуру
reportsGalleryEl.innerHTML = createListImg(reportsGalleryItems);

// Функція створення розмітки "li" списку в HTML
function createListImg(images) {
  return images
    .map(
      ({ preview, original, description }) =>
        `<li class="reports-gallery__item">
            <a class="reports-gallery__link" href="${original}">
                <img
                    class="reports-gallery__image"
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
const lightbox = new SimpleLightbox('.reports-gallery a', {
  // captions: false,
  // captionsData: 'alt',
  // captionDelay: 1000,
  // captionPosition: top,
  // nav: true,
  // close: true,
  // overlay: true,
});