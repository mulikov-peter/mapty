'use strict';

const message = document.querySelector('h1');

const body = document.querySelector('body');

let x, y;
let width = window.innerWidth;
let height = window.innerHeight;

/////////////////////////////////////////////////
// body.addEventListener('mousemove', e => {
//   x = e.clientX + 1;
//   y = e.clientY + 1;

//   let red = (x / width) * 100;
//   let green = (y / height) * 100;
//   let blue = ((x / width) * 100 + (y / height) * 100) / 2;

//   message.textContent = `Mouse move: ${x} & ${y}`;

//   body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`;
// });

//////////////////////////////////////////////

const changeColor = e => {
  x = e.clientX;
  y = e.clientY;
  // Use ternary operator:
  return x % 2 === 0 && y % 2 === 0
    ? 'red'
    : x % 2 !== 0 && y % 2 !== 0
    ? 'green'
    : 'blue';

  // Use else if:
  // if (x % 2 === 0 && y % 2 === 0) {
  //   return 'red';
  // } else if (x % 2 !== 0 && y % 2 !== 0) {
  //   return 'green';
  // } else {
  //   return 'blue';
  // }
};

body.addEventListener('click', e => {
  const color = changeColor(e);

  message.textContent = `Mouse click: ${x} & ${y}`;
  body.style.backgroundColor = color;
});
