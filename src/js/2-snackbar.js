// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.js-form');
let delay;

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault;
  delay = e.currentTarget.elements.value;
}
console.log(delay);
// `✅ Fulfilled promise in ${delay}ms`;
// `❌ Rejected promise in ${delay}ms`;

// function createPromise(delay, callback) {
//   return new Promise(res => {
//     setTimeout(() => res, delay);
//   }).then(() => callback);
// }
