import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const markupGallery = createImagesMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", markupGallery);

function createImagesMarkup() {
    return galleryItems.map(({
      preview: smallPicture,
      original: bigPicture,
      description,
    }) => {
        return `<a class="gallery__item" href="${bigPicture}">
  <img class="gallery__image" src="${smallPicture}" alt="${description}" />
</a>`;
    }).join('');
}