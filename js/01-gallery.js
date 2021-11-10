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
  data-source="${original}"
  />
  </a>
    </div>`
  )
  .join("");

const onGalleryClick = (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();
};
galleryRef.addEventListener("click", onGalleryClick);
galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);

console.log(galleryItems);
