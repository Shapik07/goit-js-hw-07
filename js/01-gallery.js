import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const cardsMarkup = createImagesMarkup(galleryItems);
let modalWindow = null;

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
  event.preventDefault();

  const isImageInGalleryElement = event.target.nodeName === "IMG";

  if (!isImageInGalleryElement) {
    return;
  }

  modalWindow = basicLightbox.create(
    `<img
    src=${event.target.dataset.source}
    alt=${event.target.alt}
    />`
  );
  modalWindow.show();

  document.body.addEventListener("keydown", closeOpenedModalWindow);
}

function openModalWindow() {
document.body.removeEventListener("keydown", closeOpenedModalWindow);
}

function closeOpenedModalWindow(event) {
  if (event.code !== "Escape") {
    return;
  }

  modalWindow.close();
  openModalWindow();
}