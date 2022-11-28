import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const galleryCardsMarkup = createGalleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryCardsMarkup)

galleryContainer.addEventListener('click', onGalleryContainerClick)

function createGalleryCardsMarkup(galleryItems) {
return galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
        <a class="gallery__link" href = "${original}">
            <img
                class = "gallery__image"
                src = "${preview}"
                data-source = "${original}"
                alt = "${description}"
            />
        </a>
    </div>
    `;
    }).join('');
}
const gal = document.querySelector('.gallery__link');
console.log(gal.getAttribute("href"))


const instance = basicLightbox.create(`
<img width="1400" height="900" href = "gal.getAttribute("href")">
`).show()

// instance.show(() => console.log('lightbox now visible'))
console.log(instance)

function onGalleryContainerClick(evt) {
    evt.preventDefault();
    if(evt.target.nodeName === 'IMG') {
        // instance.show()
    }
    console.log(evt.target.nodeName)
}

