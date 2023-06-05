import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery')
const imageMark = createImageMark(galleryItems);
galleryList.insertAdjacentHTML('beforeend', imageMark)

function createImageMark(items) {
    return items.map(({preview, original, description})=> {
        return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
            </a>
        </li> `
    }).join("")   
}

galleryList.addEventListener('click', onClick)

function onClick(evt) {
    const isImageSwatchEl = evt.target.classList.contains('gallery__image');
    
    if (!isImageSwatchEl) {
        return
  } 
  
    evt.preventDefault();
    const originalImageURL = evt.target.dataset.source;
    openModal(originalImageURL);

}

let instance;

function openModal(imageURL) {
   instance = basicLightbox.create(`
    <div class="modal__content">
      <img src="${imageURL}" alt="" />
    </div>
  `);

    instance.show();
    window.addEventListener("keydown", closeModalOnEsc);
}

function closeModalOnEsc(event) {
  if (event.code === "Escape") {
    instance.close();
    window.removeEventListener("keydown", closeModalOnEsc);
  }
}




