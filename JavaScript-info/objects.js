'use strict';
//***********************************************************//
//*===================== CREATE OBJECT ======================//
//***********************************************************//
//^ 1. Using object literal {}:
// const player = {
//   userName: 'Adam',
//   team: 'Tigers',
//   score: 0,
//   birthYear: 1997,
// calcAge() {
//   const age = new Date().getFullYear() - this.birthYear;
//   console.log(this); // this - is player
//   console.log(`Hello, I'm ${this.userName} and I'm ${age} year old`);
//   return age;
// },
// greet: () => {
//   console.log(this); // this - undefined
// console.log(`Hello, I'm in ${this.team} and ...`); // -> I'm in undefined and ...
// },
// };
// player.calcAge();
// player.greet();

//^ 2. Using new Object():
// const player = new Object(); // returns --> {}
// (player.userName = 'Adam'), (player['age'] = 25);

//^ 3. Using function construction:
// const Player = function (playerName, team, age) {
//   this.playerName = playerName;
//   this.team = team;
//   this.age = age;
//   this.greet = function () {
//     console.log(`Hello my name is ${this.playerName}`);
//   };
// };

// const playerAdam = new Player('Adam', 'Tigers', 25);
// console.log(playerAdam);

//^ 4. Using a Class constructor:
// const Player = class {
//   constructor(playerName, team, age) {
//     this.playerName = playerName;
//     this.team = team;
//     this.age = age;
//   }
//   greet() {
//     console.log(`Hello my name is ${this.playerName}`);
//   }
// };

// const playerAdam = new Player('Adam', 'Tigers', 25);
// console.log(playerAdam);

//^ 5. Using Object.create() method:
//--
// const m = Object.create(
//   {},
//   { firstName: { writable: true, configurable: true, value: 'Mark' } }
// );
// console.log(m); // {firstName: "Mark"}
//--
// const Player = {
//   type: 'Player',
//   score: 0,
//   displayType(txt) {
//     console.log(`${this.type}. ${txt} `);
//   },
// };

// const playerAdam = Object.create(Player); // returns --> {}
// console.log(playerAdam); // --> {}
// console.log(playerAdam.type); // --> player
// playerAdam.displayType(`It has been created by Object.create() method`); // --> Player. It has been created by Object.create() method

//^ 6. Using Object.assign (makes copy of obj, or create shellow (1level) copy of object):
// const player = {
//   score: 0,
//   isActive: false,
//   team: 'AAA',
// };
// Copy object player:
// const playerMark = Object.assign(player);
// // It's like: const playerMark = player
// playerMark.team = 'BBB';

// console.log(player); // {score: 0, isActive: false, team: "BBB"}
// console.log(playerMark); // {score: 0, isActive: false, team: "BBB"}

// Create shellow (1level) copy of object player:
// const playerAdam = Object.assign({}, player, { name: 'Adam' });
// playerAdam.team = 'CCC';

// console.log(player); // {score: 0, isActive: false, team: "BBB"}
// console.log(playerAdam); // {score: 0, isActive: false, team: "CCC", name: "Adam"}

//^ 7. Using Object Spread Operator:
// const player = {
//   type: 'player',
//   score: 0,
//   isActive: false,
// };
// const playerAdam = { ...player, playerName: 'Adam', team: 'Tigers' };
// playerAdam.type = 'coach';

// console.log(player); // {type: "player", score: 0, isActive: false}
// console.log(playerAdam); // {type: "coach", score: 0, isActive: false, playerName: "Adam", team: "Tigers"}

//***********************************************************//
//*====== LOOPING OBJECTS: GET KEYS & VALUES OF OBJECT ======//
//***********************************************************//
// const player = {
//   userName: 'Mark',
//   age: 42,
//   isActive: false,
//   record: 4,
//   langueges: ['en', 'sp', 'pl'],
//   games: {
//     game1: {
//       isPlay: true,
//     },
//     game2: {
//       isPlay: false,
//     },
//     game3: {
//       isPlay: true,
//     },
//   },
// };

//?--------------- FOR in---------------
// for (let x in player) {
//   console.log(`${x} : ${player[x]}`); // x = key, y = value
// }

//^--------------- FOR IN ---------------
// To get all the properties (own + prototype)
// for (const key in player) {
//   if (player.hasOwnProperty(key)) {
//     // console.log(key); // returns all keys of object like strring
//     // console.log(player[key]); // returns value of object's key
//     // console.log(`${key}: ${player[key]}`);
//   }
// }

//^-------------- Object.keys() ------------
// To get the own/instance properties:
//const keys = Object.keys(player); // returns array of keys
// keys.forEach((key) => {
//   // console.log('key:', key);
//   // console.log('value:', player[key]);
// });

//^--------------- Object.getOwnPropertyNames(person) ----
// Object.getOwnPropertyNames(player); // returns array of keys

//^ EXAMPLES:
// Properties NAMES:
// To get the own/instance properties:
// const properties = Object.keys(player.games);
// console.log(properties); //  ["game1", "game2", "game3"]

// let seasonsGames = `In this season were ${properties.length} games: `;

// for (const game of properties) {
//   seasonsGames += `${game}, `;
// }
// console.log(seasonsGames);

// // Properties VALUES:
// const values = Object.values(player.games);
// console.log(values);

// // Entries object:
// const entries = Object.entries(player.games);
// console.log(entries);

// for (const [game, { isPlay }] of entries) {
//   console.log(`In ${game} player played: ${isPlay}`);
// }

//***********************************************************//
//*================== DELETE KEY OF OBJECT ==================//
//***********************************************************//
// const player = {
//   userName: 'Mark',
//   age: 42,
//   isActive: false,
//   record: 4,
// };

// delete player.record;

// console.log(player);

//***********************************************************//
//*==================== DESTRUCTURING =======================//
//***********************************************************//
// const player = {
//   playerName: 'Mark',
//   age: 42,
//   isActive: false,
//   record: 4,
//   games: {
//     spring: {
//       active: 4,
//       passive: 1,
//     },
//     winter: {
//       active: 8,
//       passive: 0,
//     },
//   },
// };

// const { playerName, record } = player;
// console.log(playerName, record); // Mark 4

// const { age: playerAge } = player;
// console.log(playerAge); // 42

// // Default values:
// const { olimpicGames = [], goals = 0 } = player;
// console.log(olimpicGames, goals); // [] 0

// // Mutating variables:
// let a = 17;
// let b = 44;
// const mutatingObj = {
//   a: 22,
//   b: 7,
//   c: 29,
// };

// ({ a, b } = mutatingObj); //! ({ a, b } = mutatingObj)
// console.log(a, b); // 22, 7

// // Nested object:
// const { games } = player;

// const {
//   spring: { active, passive },
// } = games;

// console.log(active, passive); // 4, 1

//***********************************************************//
//*=============== THE SPREAD OPERATOR (...) & REST =========//
//***********************************************************//
// // SPREAD, because on RIGHT side of = :
// const playerSpred = {
//   playerName: 'Mark',
//   age: 42,
//   isActive: false,
// };

// const playerSpredCopy = { medals: 8, ...playerSpred, type: 'player' };
// playerSpredCopy.playerName = 'Adam';

// console.log(playerSpredCopy); // {medals: 8, playerName: "Adam", age: 42, isActive: false, type: "player"}

// // REST, because on LEFT side of = :
// const playerRest = {
//   playerName: 'Mark',
//   age: 42,
//   isActive: false,
//   record: 4,
//   games: {
//     spring: {
//       active: 4,
//       passive: 1,
//     },
//     winter: {
//       active: 8,
//       passive: 0,
//     },
//     summer: {
//       active: 14,
//       passive: 0,
//     },
//   },
// };

// const { spring, ...otherGames } = playerRest.games;
// console.log(spring, otherGames);

//***********************************************************//
//*============== OPTIONAL CHAINING (?.) ====================//
//***********************************************************//
// const playerOptionalChaining = {
//   playerName: 'Mark',
//   age: 42,
//   isActive: false,
//   record: 4,
//   games: {
//     spring: {
//       active: 4,
//       passive: 1,
//     },
//     winter: {
//       active: 8,
//       passive: 4,
//     },
//     summer: {
//       active: 14,
//       passive: 0,
//     },
//   },
// };

// Old way to check:
// if (playerOptionalChaining.games && playerOptionalChaining.games.autumn)
//   console.log(playerOptionalChaining.games.autumn.active);

// WITH optional chaining:
// console.log(playerOptionalChaining.games?.autumn?.active); // undefined
// const seasons = ['spring', 'summer', 'autumn', 'winter'];

// for (const season of seasons) {
//   const passive = playerOptionalChaining.games[season]?.passive ?? 'no played';
//   console.log(`In ${season} player pass ${passive} game(s) `);
// }

// Methods:
// console.log(
//   playerOptionalChaining.greet?.(playerName) ?? 'Method does NOT exist'
// ); // Method does NOT exist --> because playerOptionalChaining no has greet() method

//***********************************************************//
//*============== CONVERT OBJECT TO MAP =====================//
//***********************************************************//

// const playerMap = {
//   playerName: 'Mark',
//   age: 42,
//   games: {
//     spring: {
//       active: 4,
//       passive: 1,
//     },
//     winter: {
//       active: 8,
//       passive: 4,
//     },
//     summer: {
//       active: 14,
//       passive: 0,
//     },
//   },
// };

// const gamesMap = new Map(Object.entries(playerMap.games));
// console.log(gamesMap);
