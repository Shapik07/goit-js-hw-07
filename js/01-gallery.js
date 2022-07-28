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
      return `<img class="image" src="${preview}" alt="${description}" width="360" height="230"></img>`;
    })
    .join("");
}

function onGalleryImageClick(event) {
    const isImageInGalleryElement = event.target.classList.contains("image");
    if (!isImageInGalleryElement) {
        return
    };
}