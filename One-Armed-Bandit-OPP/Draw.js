'use strict';
// Create class Draw
class Draw {
  constructor() {
    this.options = ['red', 'green', 'blue'];

    // Private variable
    let _result = this.drawResult();

    // Method for get result of draw
    this.getDrawResult = () => _result;
  }

  drawResult() {
    const colors = [];

    this.options.forEach(() => {
      const index = Math.floor(Math.random() * this.options.length);

      const color = this.options[index];
      colors.push(color);
    });

    return colors;
  }
}
