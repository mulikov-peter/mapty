'use strict';

// Create class Statistics
class Statistics {
  constructor() {
    this.gameResults = [{ victory: true, bet: 3 }];
  }

  // Add games to gemeResults
  addGameToStatistics(victory, bet) {
    let gameResult = {
      victory,
      bet,
    };
    console.log(gameResult);
    this.gameResults.push(gameResult);
  }

  // Show statistics of game. Returns array of all games, victories, losses:
  showGameStatistics() {
    let games = this.gameResults.length;
    let victories = this.gameResults.filter(result => result.victory).length;
    let losses = this.gameResults.filter(result => !result.victory).length;
    return [games, victories, losses];
  }
}

const stat = new Statistics();

console.log(stat.showGameStatistics());
