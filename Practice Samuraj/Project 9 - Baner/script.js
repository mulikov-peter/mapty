'use strict';

const slideList = [
  {
    img: 'images/dice-1.jpg',
    text: 'Lorem ipsum - 1',
  },
  {
    img: 'images/dice-2.jpg',
    text: 'Lorem ipsum - 2',
  },
  {
    img: 'images/dice-3.jpg',
    text: 'Lorem ipsum - 3',
  },
  {
    img: 'images/dice-4.jpg',
    text: 'Lorem ipsum - 4',
  },
  {
    img: 'images/dice-5.jpg',
    text: 'Lorem ipsum - 5',
  },
  {
    img: 'images/dice-6.jpg',
    text: 'Lorem ipsum - 6',
  },
];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dot')];

const time = 2000;
let active = 0;

// Change content:
const changeContent = () => {
  // Change text content:
  h1.textContent = slideList[active].text;
  // Change imege:
  image.src = slideList[active].img;
  // Change dots:
  // Finde active element:
  const activeIndex = dots.findIndex(dot => dot.classList.contains('active'));
  dots[activeIndex].classList.remove('active');
  dots[active].classList.add('active');
};

// Change slide to right -->:
const changeSlideToRight = () => {
  console.log('to right -->');
  active++;
  if (active === slideList.length) active = 0;
  changeContent();
};

// Change slide to left:
const changeSlideToLeft = () => {
  console.log('<-- to left');
  active--;
  if (active < 0) active = slideList.length - 1;
  changeContent();
};

// Set time interval:
let timeIndex = setInterval(changeSlideToRight, time);

// Change slide use key <-- & -->:
const changeSlideKey = e => {
  // Stop time interval:
  clearInterval(timeIndex);
  if (e.code === 'ArrowLeft' || e.code === 'ArrowRight') {
    e.code === 'ArrowLeft' ? changeSlideToLeft() : changeSlideToRight();
  }
  // Start time interval
  timeIndex = setInterval(changeSlideToRight, time);
};

// Change slide use dots:
const changeSlideDots = e => {
  // Clear interval:
  clearInterval(timeIndex);

  // Click on not active dots:
  if (!e.target.classList.contains('active')) {
    const clickedIndex = dots.indexOf(e.target);
    active = clickedIndex;
    changeContent();
  }
  // Start time interval
  timeIndex = setInterval(changeSlideToRight, time);
};

// Add event listener for key:
document.addEventListener('keydown', changeSlideKey);

// Add event listener for dots:
dots.forEach(dot => {
  dot.addEventListener('click', changeSlideDots);
});
