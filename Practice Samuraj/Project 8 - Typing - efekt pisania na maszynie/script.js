'use strict';
// const spnText = document.querySelector('.text');
// const spnCursor = document.querySelector('.cursor');

// const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
// const time = 100;
// let i = 0;

// const addLetter = () => {
//   spnText.textContent += text[i];
//   i++;
//   if (i === text.length) clearInterval(indexTyping);
// };
// const cursorAnimation = () => {
//   spnText.classList.toggle('active');
// };

// const indexTyping = setInterval(addLetter, time);
// setInterval(cursorAnimation, 400);

//=================== Zadanie =========================//

// const spnText = document.querySelector('.text');
// const spnCursor = document.querySelector('.cursor');
// const texts = ['Hello ', 'nice to meet you ', 'today :) !!!'];
// let indexLetter = 0;
// let indexText = 0;

// const addLetter = () => {
//   spnText.textContent += texts[indexText][indexLetter];

//   indexLetter++;

//   if (indexLetter === texts[indexText].length) {
//     indexText++;

//     if (indexText === texts.length) {
//       return;
//     }

//     return setTimeout(() => {
//       indexLetter = 0;
//       spnText.textContent = '';

//       addLetter();
//     }, 2000);
//   }

//   setTimeout(addLetter, 100);
// };

// setTimeout(addLetter, 2000);

// const cursorAnimation = () => {
//   spnText.classList.toggle('active');
// };
// setInterval(cursorAnimation, 400);

////////////////////////////////////
const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const textStr = 'Hello nice to meet you :)';
const textArr = ['Hello ', 'nice to meet you ', 'today :) !!!'];
let indexLetter = 0;
let indexText = 0;

const addLetter = () => {
  spnText.textContent += textArr[indexText][indexLetter];
  indexLetter++;
  if (indexLetter === textArr[indexText].length) {
    indexText++;
    if (indexText === textArr.length) return;

    return setTimeout(() => {
      indexLetter = 0;
      spnText.textContent = '';
      addLetter();
    }, 2000);
  }

  setTimeout(addLetter, 100);
};

setTimeout(addLetter, 2000);
