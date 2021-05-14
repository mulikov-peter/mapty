'use strict';

const squere = document.querySelector('.squere');
const line = document.querySelector('.line');

let size = 100;
let grow = true;
let scrollPosition = 0;

const changeSize = size => {
  squere.style.height = `${size}px`;
  squere.style.width = `${size}px`;
  line.style.width = `${size}px`;
};

window.addEventListener('scroll', () => {
  if (document.body.getBoundingClientRect().top > scrollPosition) {
    size += 10;
  } else {
    size -= 10;
  }
  scrollPosition = document.body.getBoundingClientRect().top;

  if (size >= 200) {
    grow = false;
    size = 200;
  } else if (size <= 10) {
    size = 10;
  }
  changeSize(size);
});
