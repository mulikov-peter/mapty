'use strict';

// Create class Result
class Result {
  static winMoney(result, bet) {
    return result ? 3 * bet : 0;
  }

  static checkWinner(draw) {
    if (
      (draw[0] === draw[1] && draw[1] === draw[2]) ||
      (draw[0] !== draw[1] && draw[1] !== draw[2] && draw[0] !== draw[2])
    )
      return true;
    else return false;
  }
}
