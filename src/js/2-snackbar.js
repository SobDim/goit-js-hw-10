// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.js-form');
// let delay;

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const delay = e.currentTarget.elements.delay.value;

  console.log(e);
}
// `✅ Fulfilled promise in ${delay}ms`;
// `❌ Rejected promise in ${delay}ms`;

function createPromise(delay, callback) {
  return new Promise((res, rej) => {
    setTimeout(() => res, delay);
  }).then(() => callback);
}
// function countWithDelay(delay, times, interval) {
//   let count = 0;
//   function logCount() {
//     count += 1;
//     if (count > times) return;
//     setTimeout(logCount, interval);
//     console.log(count);
//   }
//   createPromise(delay, logCount);
// }

// function createPromise(delay, callback) {
//   return new Promise((res) => {
//     setTimeout(() => res(), delay);
//   }).then(() => callback());
// }
// countWithDelay(1000, 5, 3000);
