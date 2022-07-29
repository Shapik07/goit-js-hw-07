import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const cardsMarkup = createImagesMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", cardsMarkup);

gallery.addEventListener("click", onGalleryImageClick);

function createImagesMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

function onGalleryImageClick(event) {
  const isImageInGalleryElement = event.target.classList.contains("image");

  if (!isImageInGalleryElement) {
    return;
  }
}
