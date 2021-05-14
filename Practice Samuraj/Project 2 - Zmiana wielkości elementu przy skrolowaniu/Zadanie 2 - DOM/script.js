'use strict';

let size = 100;
let grow = true;
const colors = ['red', 'green', 'blue', 'black', 'grey', 'yellow', 'orange'];

const body = document.querySelector('body');
body.style.height = '10000vh';

const div = document.createElement('div');
div.style.position = 'fixed';
div.style.top = 0;
div.style.left = 0;
div.style.width = '100%';
div.style.height = `${size}px`;
body.appendChild(div);

const changeColor = () => {
  let randomColor = colors[Math.trunc(Math.random() * colors.length)];
  div.style.backgroundColor = randomColor;
  return randomColor;
};
changeColor();

const changeSize = () => {
  grow ? size++ : size--;

  if (size >= window.innerHeight / 2) {
    grow = false;
    changeColor();
  } else if (size <= 0) {
    grow = true;
    changeColor();
  }
  div.style.height = `${size}px`;
};

window.addEventListener('scroll', changeSize);
