'use strict';
let score = 20;
let highScore = 0;
let isActiveGame = true;

const setTextContent = (element, text) => {
  document.querySelector(`.${element}`).textContent = text;
};

// Display backGround color:
const setStyles = (color, width) => {
  document.querySelector('body').style.backgroundColor = color;
  document.querySelector('.number').style.width = width;
};

// const changeStyle = (element, attribute, value) => {
//   if (element === 'body') {
//     document.body.style[attribute] = value;
//   } else {
//     document.querySelector(`.${element}`).style[attribute] = value;
//   }
// };

// Get secret number:
let secretNumber = Math.trunc(Math.random() * 20) + 1;

console.log(secretNumber);

// Play game: click button "Check":
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (isActiveGame) {
    // When there is no input
    if (!guess) {
      setTextContent('message', 'No number!');
      // When player wins
    } else if (guess === secretNumber) {
      setTextContent('message', 'Correct Number!');
      setTextContent('number', secretNumber);
      setStyles('green', '30rem');
      isActiveGame = false;
      // Display high score
      if (score > highScore) {
        highScore = score;
        setTextContent('highscore', highScore);
      }
      // When guess is wrong
    } else if (guess !== secretNumber) {
      if (score > 1) {
        setTextContent(
          'message',
          guess > secretNumber ? 'Too hight' : 'Too low'
        );
        score--;
        setTextContent('score', score);
      } else {
        setTextContent('message', 'You lost the game');
        setTextContent('score', 0);
        isActiveGame = false;
      }
    }
  }
});

// Click button Play again:
document.querySelector('.again').addEventListener('click', () => {
  isActiveGame = true;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);

  score = 20;
  setTextContent('score', score);
  setTextContent('message', 'Start guessing...');
  setTextContent('number', '?');

  document.querySelector('.guess').value = '';

  setStyles('#222', '15rem');
});
