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
    this.spanWallet = document.querySelector('.wallet');
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
      ? (result = `You lost ${bet}`)
      : result;

    this.divResult.textContent = result;
    this.spanGames.textContent = stats[0];
    this.spanWins.textContent = stats[1];
    this.spanLosses.textContent = stats[2];
    this.inputBet.value = '';
    console.log(this.spanWallet);
  }

  startGame() {
    if (this.inputBet.value < 1)
      //Todo add set interval for desepire message
      return this.inputBet.insertAdjacentHTML(
        'beforebegin',
        '<h3>This bet is too small</h3>'
      );

    const bet = Math.floor(this.inputBet.value);

    if (!this.wallet.checkCanPlay(bet)) {
      return this.inputBet.insertAdjacentHTML(
        'beforebegin',
        '<h3>You have not enough money or input value is not correct </h3>'
      );
    }

    this.wallet.changeWallet(bet, 'decrease');

    this.draw = new Draw();

    const colors = this.draw.getDrawResult();

    const win = Result.checkWinner(colors);

    const wonMoney = Result.winMoney(win, bet);

    this.wallet.changeWallet(wonMoney);

    this.stats.addGameToStatistics(win, bet);

    this.render(
      colors,
      this.wallet.getWalletValue(),
      win,
      this.stats.showGameStatistics(),
      bet,
      wonMoney
    );
  }
}
