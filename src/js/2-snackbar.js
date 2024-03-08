// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
import { errorMsg, okMsg, warningMsg, hello } from './izi-toast-options';

const form = document.querySelector('.js-form');

let delay;

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  delay = e.currentTarget.elements.delay.value;

  const selectedRadioButton = document.querySelector(
    'input[name="state"]:checked'
  );

  if (!delay || !selectedRadioButton) return iziToast.warning(warningMsg);
  const promise = new Promise((res, rej) => {
    if (form.querySelector('input:checked').value === 'fulfilled') {
      setTimeout(() => {
        res(delay);
      }, delay);
    } else {
      setTimeout(() => {
        rej(delay);
      }, delay);
    }
  });

  okMsg.message = `✅ Fulfilled promise in ${delay}ms`;
  errorMsg.message = `❌ Rejected promise in ${delay} ms`;

  promise
    .then(() => {
      iziToast.success(okMsg);
    })
    .catch(() => {
      iziToast.error(errorMsg);
    });
}

iziToast.info(hello);
