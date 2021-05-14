'use strict';

//===================== Example =============================//
const dispay = document.querySelector('.display');

const getTime = () => {
  const time = new Date();
  let hours = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
  let minutes =
    time.getUTCMinutes() < 10
      ? `0${time.getUTCMinutes()}`
      : time.getUTCMinutes();
  let seconds =
    time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds();

  dispay.textContent = `${hours}:${minutes}:${seconds}`;
};

setInterval(getTime, 1000);

//=========================== Zadanie ===========================//
const dayDisplay = document.querySelector('.d');
const hourDisplay = document.querySelector('.h');
const minuteDisplay = document.querySelector('.m');
const secondDisplay = document.querySelector('.s');

const dateEnd = new Date('2021-07-14 14:14:14').getTime();

setInterval(() => {
  const dateNow = new Date().getTime();

  const days = Math.trunc(
    dateEnd / (1000 * 60 * 60 * 24) - dateNow / (1000 * 60 * 60 * 24)
  );
  const hour = Math.trunc(
    (dateEnd / (1000 * 60 * 60) - dateNow / (1000 * 60 * 60)) % 24
  );
  let minute = Math.trunc((dateEnd / (1000 * 60) - dateNow / (1000 * 60)) % 60);

  minute = minute < 10 ? `0${minute}` : minute;

  let second = Math.trunc((dateEnd / 1000 - dateNow / 1000) % 60);
  second = second < 10 ? `0${second}` : second;

  dayDisplay.textContent = days;
  hourDisplay.textContent = hour;
  minuteDisplay.textContent = minute;
  secondDisplay.textContent = second;
}, 1000);

//===================== Zadanie =============//
const btnStart = document.querySelector('.start');
const btnReset = document.querySelector('.reset');
const timerOutput = document.querySelector('.timer');

let time = 0;
let active = false;
let idIndex;

const start = () => {
  time++;
  timerOutput.textContent = (time / 100).toFixed(3);
};

const timer = () => {
  if (!active) {
    active = !active;
    btnStart.textContent = 'PAUSE';
    idIndex = setInterval(start, 10);
  } else {
    active = !active;
    btnStart.textContent = 'START';
    clearInterval(idIndex);
  }
};

const reset = () => {
  time = 0;
  active = false;
  timerOutput.textContent = '---';
  clearInterval(idIndex);
  btnStart.textContent = 'START';
};

btnStart.addEventListener('click', timer);

btnReset.addEventListener('click', reset);
