'use strict';

const body = document.querySelector('body');

let red = 100;
let green = 100;
let blue = 100;

body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e, step) => {
  if (e.key === 'ArrowDown' && red >= 0) {
    body.style.backgroundColor = `rgb(${(red -= step)}, ${(green -= step)}, ${(blue -= step)})`;
  } else if (e.key === 'ArrowUp' && red < 255) {
    body.style.backgroundColor = `rgb(${(red += step)}, ${(green += step)}, ${(blue += step)})`;
  }
  //================================== Switch ===============================//
  // switch (e.key) {
  //   case 'ArrowDown':
  //     body.style.backgroundColor = `rgb(${red >= 0 ? (red -= step) : red}, ${
  //       green >= 0 ? (green -= step) : green
  //     }, ${blue >= 0 ? (blue -= step) : blue})`;
  //     break;
  //   case 'ArrowUp':
  //     body.style.backgroundColor = `rgb(${red < 255 ? (red += step) : red}, ${
  //       green < 255 ? (green += step) : green
  //     }, ${blue < 255 ? (blue += step) : blue})`;
  //     break;
  // }
};

window.addEventListener('keydown', e => {
  let color = changeColor(e, 5);

  body.style.backgroundColor = color;
});
