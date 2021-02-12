'use strict';
// Create class Waleet:
class Wallet {
  constructor(money) {
    // Private variable
    let _money = money;

    // Get actual value of wallet
    this.getWalletValue = () => this._money;

    // Check if the user has enough money for playing
    this.checkCanPlay = value => (_money >= value ? true : false);

    // Change the value of wallet if win - increase else decrease
    this.changeWallet = (value, type) => {
      if (typeof value === 'number' && !isNaN(value)) {
        if (type === 'increase') return (_money += value);
        else if (type === 'decrease') return (_money -= value);
        else throw new Error('Something went wrong. Wrong type');
      } else {
        console.log(typeof value);
        throw new Error('The number is not correct');
      }
    };
  }
}
