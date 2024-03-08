import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Timer
const dateTimePicker = document.querySelector('#datetime-picker');
const display = document.querySelector('.timer');
const startBtn = document.querySelector('[data-start]');
let diff;
let selectedDate;
// flatpickr options
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (Date.now() > selectedDates[0]) {
      startBtn.disabled = true;
      return iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        iconUrl: './img/error.svg',
        backgroundColor: 'rgb(239, 64, 64)',
        messageColor: 'rgb(255, 255, 255)',
        titleColor: 'rgb(255, 255, 255)',
        position: 'topRight',
        close: 'rgb(255, 255, 255)',
      });
    }
    startBtn.disabled = false;
    selectedDate = selectedDates[0];

    countInterval();
  },
};

startBtn.disabled = true;

function countInterval() {
  diff = selectedDate - Date.now();
  const { days, hours, minutes, seconds } = convertMs(diff);
  render(days, hours, minutes, seconds);
}

startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  dateTimePicker.disabled = true;

  const intervalId = setInterval(() => {
    countInterval();

    if (diff < 1000) {
      clearInterval(intervalId);
      dateTimePicker.disabled = false;
    }
  }, 1000);
});

// flatpickr run
flatpickr(dateTimePicker, options);

function render(days, hours, minutes, seconds) {
  display.querySelector('[data-days]').textContent = String(days).padStart(
    2,
    '0'
  );

  display.querySelector('[data-hours]').textContent = String(hours).padStart(
    2,
    '0'
  );
  display.querySelector('[data-minutes]').textContent = String(
    minutes
  ).padStart(2, '0');
  display.querySelector('[data-seconds]').textContent = String(
    seconds
  ).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
