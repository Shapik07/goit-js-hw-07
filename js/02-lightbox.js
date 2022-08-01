import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const markupGallery = createImagesMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", markupGallery);

var lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});

function createImagesMarkup() {
  return galleryItems
    .map(({ preview: smallPicture, original: bigPicture, description }) => {
      return `<a class="gallery__item" href="${bigPicture}">
  <img class="gallery__image" src="${smallPicture}" alt="${description}" />
</a>`;
    })
    .join("");
}

