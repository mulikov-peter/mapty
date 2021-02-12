'use strict';
// Create class Game
class Game {
  constructor(start) {
    this.stats = new Statistics();
    this.wallet = new Wallet(start);

    // Get UI Elements:
    document
      .querySelector('#start')
      .addEventListener('click', this.startGame.bind(this));

    this.inputBet = document.querySelector('#bet');
    this.boards = document.querySelectorAll('div.color');
    this.spanWallet = document.querySelector('.panel span.wallet');
    this.divResult = document.querySelector('.result');
    this.spanGames = document.querySelector('.score span.number');
    this.spanWins = document.querySelector('.score span.win');
    this.spanLosses = document.querySelector('.score span.loss');

    this.render();
  }

  render(
    colors = ['grey', 'grey', 'grey'],
    money = this.wallet.getWalletValue(),
    result = '',
    stats = [0, 0, 0],
    bet = 0,
    wonMoney = 0
  ) {
    this.boards.forEach(
      (board, i) => (board.style.backgroundColor = colors[i])
    );
    this.spanWallet.textContent = money;

    result
      ? (result = `You win ${wonMoney}`)
      : !result && result !== ''
      ? (result = `You lost ${wonMoney}`)
      : result;

    this.divResult.textContent = result;
    this.spanGames.textContent = stats[0];
    this.spanWins.textContent = stats[1];
    this.spanLosses.textContent = stats[2];
  }

  startGame() {}
}
