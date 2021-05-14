'use strict';

// Selecting elements function:
const selectElement = element => document.querySelector(`${element}`);

// Get random dice function:
const getRandomDice = () => Math.trunc(Math.random() * 6) + 1;

const player1 = selectElement('.player--0');
const player2 = selectElement('.player--1');
const scorePlayer1 = selectElement('#score--0');
const scorePlayer2 = selectElement('#score--1');
const diceEl = selectElement('.dice');
const btnNewGame = selectElement('.btn--new');
const btnRoll = selectElement('.btn--roll');
const btnHold = selectElement('.btn--hold');
const currentScorePlayer1 = selectElement('#current--0');
const currentScorePlayer2 = selectElement('#current--1');

let scores, currentScore, activePlayer, playing;

// Starting condition:
const init = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  scorePlayer1.textContent = 0;
  scorePlayer2.textContent = 0;
  currentScorePlayer1.textContent = 0;
  currentScorePlayer2.textContent = 0;

  diceEl.classList.add('hidden');
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
};
init();

// Switch player function:
const switchPlayer = () => {
  selectElement(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

// Rolling doce functionality:
btnRoll.addEventListener('click', () => {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = getRandomDice();

    // 2. Display dice:
    diceEl.classList.remove('hidden');
    diceEl.src = `img/dice-${dice}.jpg`;

    // 3. Check for rolled 1: if true, switch to next player:
    if (dice !== 1) {
      // Add dice to current score:
      currentScore += dice;
      selectElement(`#current--${activePlayer}`).textContent = currentScore;
    } else {
      // Switch to next player:
      switchPlayer();
    }
  }
});

// Holding Current Score:
btnHold.addEventListener('click', () => {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    selectElement(`#score--${activePlayer}`).textContent = scores[activePlayer];

    // 2. Check if player's score is >= 100:
    if (scores[activePlayer] >= 100) {
      // Finish game:
      playing = false;
      diceEl.classList.add('hidden');
      selectElement(`.player--${activePlayer}`).classList.add('player--winner');
      selectElement(`.player--${activePlayer}`).classList.remove(
        'player--active'
      );
    } else {
      // Switch to the next player:
      switchPlayer();
    }
  }
});

// Resetting game:
btnNewGame.addEventListener('click', () => init());
