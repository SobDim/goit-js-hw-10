import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const dateTimePicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const timer = document.querySelector('.timer');
const msgOptions = {
  message: 'Please choose a date in the future',
  messageSize: '16px',
  messageLineHeight: '24px',
  messageColor: '#fff',
  backgroundColor: '#EF4040',
  progressBarColor: '#B51B1B',
  theme: 'dark',
  position: 'topRight',
  class: 'message',
};

let selectedDates;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (Date.now() > selectedDates[0]) {
      ('Please choose a date in the future');
      return;
    }
  },
};

startBtn.disabled = true;

// class Timer {
//   constructor(callback, selectedTime) {
//     this.tick = callback;
//     this.intervalID = null;
//     this.selectedTime = selectedTime;
//   }
//   start() {
//     his.intervalID = setInterval(() => {
//       const currentTime = Date.now();
//       const diff = this.selectedTime - currentTime;
//       renderTime(diff);
//       if (diff < 500) this.stop();
//       this.tick();
//     }, 1000);
//   }
//   stop() {
//     clearInterval(this.intervalID);
//   }
// }

// const newTimer = new Timer();

// console.log(userSelectedDate);
// options.onClose;
// console.log(options.onClose);

flatpickr(dateTimePicker, options);
// console.log(userSelectedDate);

//=========== export
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
