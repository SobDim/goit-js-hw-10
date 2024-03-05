import images from './images';

const markup = images
  .map(({ original, preview, description }) => {
    return ` <li class="gallery-item data-tilt" > 
              <a class="gallery-link" href="${original}">
              <img
                class="gallery-image"
                src="${preview}"
                alt="${description}"
              />
            </a>
          </li>`;
  })
  .join('');

export default markup;
