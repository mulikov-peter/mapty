'use strict';

const gameSummery = {
  gameAmount: 0,
  win: 0,
  loss: 0,
  draw: 0,
};

const game = {
  playerChoice: '',
  compChoice: '',
};

// Get Element:
const getElement = elName => document.querySelector(elName);

const hands = [...document.querySelectorAll('.hand')];
const start = getElement('.start');

// Player choice:
const handSelection = e => {
  game.playerChoice = e.target.dataset.option;
  hands.forEach(hand => {
    hand.style.boxShadow = '';
  });
  e.target.style.boxShadow = '0 0 0 4px green';
};

const getCompChoice = () => {
  const randomIndex = Math.trunc(Math.random() * hands.length);
  // return data-option value
  return hands[randomIndex].dataset.option;
};

// Check winner:
const checkWinner = (player, comp) => {
  console.log(player, comp);
  if (player === comp) {
    return 'draw';
    // Check if player win:
  } else if (
    (player === 'paper' && comp === 'stone') ||
    (player === 'stone' && comp === 'scissors') ||
    (player === 'scissors' && comp === 'paper')
  ) {
    return 'win';
  } else {
    return 'loss';
  }
};

// Display result:
const displayResult = (player, comp, result) => {
  getElement('[data-summary="user-choice"]').textContent = player;
  getElement('[data-summary="comp-choice"]').textContent = comp;

  getElement('.game-amount span').textContent = ++gameSummery.gameAmount;

  getElement(`.${result} span`).textContent = ++gameSummery[result];

  getElement('[data-summary="winner"]').textContent = `It is - ${result}!!!`;

  // if (result === 'win') {
  //   getElement('.win span').textContent = ++gameSummery.win;
  //   getElement('[data-summary="winner"]').textContent = `You ${result}!!!`;
  // } else if (result === 'loss') {
  //   getElement('.loss span').textContent = ++gameSummery.loss;
  //   getElement('[data-summary="winner"]').textContent = `You ${result} :)`;
  // } else {
  //   getElement('.draw span').textContent = ++gameSummery.draw;
  //   getElement('[data-summary="winner"]').textContent = ` == It is draw ==`;
  // }
};

// Finish game:
const endGame = () => {
  getElement(`[data-option='${game.playerChoice}']`).style.boxShadow = '';
  // Clear data:
  game.playerChoice = '';
  game.compChoice = '';
};

// Start game:
const startGame = () => {
  if (!game.playerChoice) {
    return alert('Make a choice');
  }
  // Get computer choice:
  game.compChoice = getCompChoice();

  // Check result:
  const gameResult = checkWinner(game.playerChoice, game.compChoice);
  console.log(gameResult);

  // Display result:
  displayResult(game.playerChoice, game.compChoice, gameResult);

  // Finish game:
  endGame();
};

// Add events:
hands.forEach(hand => {
  hand.addEventListener('click', handSelection);
});
start.addEventListener('click', startGame);
