import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

const galleryCardsMarkup = createGalleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryCardsMarkup);

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

galleryContainer.addEventListener('click', onImageClick);



function onImageClick(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    galleryContainer.addEventListener('keydown', onCloseEscape);
    
    const instance = basicLightbox.create(
        `<img src = "${evt.target.dataset.source}">`,
    {
        onClose: () => {
            galleryContainer.removeEventListener('click', onCloseEscape);
        },
    
});
instance.show();


function onCloseEscape(evt) {
    if(evt.code === "Escape") {
        instance.close()
    }
}
}
