'use strict';

// Get UI elements:
const game = document.querySelector('.game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('.guess-btn'),
  guessInput = document.querySelector('.guess-input'),
  message = document.querySelector('.message');

// Game values:
let min = 1,
  max = 10,
  winnerNumber = Math.trunc(Math.random() * max + min),
  guessLeft = 3;

console.log(winnerNumber);
// Assign UI min & max:
minNum.textContent = min;
maxNum.textContent = max;

// Show message:
const showMessage = (msg, color) => {
  message.textContent = msg;
  message.style.color = color;
  guessInput.value = '';
};

showMessage(`You have ${guessLeft} guess left`);

// Game over:
const gameOver = check => {
  let color;
  check === 'won' ? (color = 'green') : (color = 'red');

  let msg;
  check === 'won'
    ? (msg = `${winnerNumber} is correct. You WIN!!!`)
    : (msg = `You Lost :( ${winnerNumber} was correct.`);

  // Disable input
  guessInput.disabled = true;
  guessBtn.textContent = 'PLAY AGAIN';
  guessBtn.className = 'play-again';

  showMessage(msg, color);
};

// Listen for guess:
guessBtn.addEventListener('click', () => {
  let guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < min || guess > max) {
    showMessage(`Put your number between ${min} & ${max}`, 'red');
  } else {
    --guessLeft;
    console.log(guessLeft);
    if (guess !== winnerNumber && guessLeft > 0) {
      showMessage(`${guess} is NOT correct, ${guessLeft} guesses left`, 'red');
    } else if (guess === winnerNumber) {
      gameOver('won');
    } else if (guessLeft === 0) {
      gameOver('lost');
    }
  }
});

game.addEventListener('mousedown', e => {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
});
