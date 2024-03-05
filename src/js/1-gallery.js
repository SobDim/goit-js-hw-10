import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import VanillaTilt from 'vanilla-tilt';

import markup from './gallery-app/markup';
import refs from './gallery-app/refs';

refs.gallery.innerHTML = markup;

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
//
VanillaTilt.init(document.querySelector('.data-tilt'), {
  max: 25,
  speed: 400,
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll('.data-tilt'));
