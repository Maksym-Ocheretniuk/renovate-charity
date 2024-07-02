import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { candlesGalleryItems } from './03-gallery-candle-items.js';

// console.log(candlesGalleryItems);

// Знаходимо галерею та її елементи "li"
const candlesGalleryEl = document.querySelector('.candles-gallery');

// Додаємо розмітку в структуру
candlesGalleryEl.innerHTML = createListImg(candlesGalleryItems);

// Функція створення розмітки "li" списку в HTML
function createListImg(images) {
  return images
    .map(
      ({ preview, original, description }) =>
        `<li class="candles-gallery__item">
            <a class="candles-gallery__link" href="${original}">
                <img
                    class="candles-gallery__image"
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
const lightbox = new SimpleLightbox('.candles-gallery a', {
  // captions: false,
  // captionsData: 'alt',
  // captionDelay: 1000,
  // captionPosition: top,
  // nav: true,
  // close: true,
  // overlay: true,
});