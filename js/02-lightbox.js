import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img
  class="gallery__image"
  src="${preview}"
  alt="${description}"
  />
  </a>
    </div>`
  )
  .join("");
galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);

const lightbox = new SimpleLightbox(".gallery__link", {
  captions: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  disableScroll: true,
});
const onGalleryClick = (event) => {
  event.preventDefault();
  if (event.target.classList.contains("gallery")) {
    return;
  }
};

console.log(galleryItems);
