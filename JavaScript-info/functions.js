'use strict';
//*============== CREATE FUNCTION ==============//
// 1. -- FUNCTION DECLARATION
// function greet(userName) {
//   console.log(`Hello, my name is ${userName}`);
// }
// greet('Peter');

// 2. -- FUNCTION EXPRESION
// const greet1 = function (userName) {
//   console.log(`Hello, my name is ${userName}`);
// };
// greet1('Peter1');

// 3. -- ARROW FUNCTION
// const greet2 = (userName) => console.log(`Hello, my name is ${userName}`);
// greet2('Peter2');

//*============== PARAMETRS & ARGUMENTS ==============//
// function fruitProcessor(apples, oranges) {
//   // arguments (apple, oranges)
//   const juce = `We make juce with ${apples} apples and ${oranges} oranges`;
//   console.log(`We make juce with ${apples} apples and ${oranges} oranges`);
//   return juce;
// }
// const juce1 = fruitProcessor(3, 2); // parametrs (3,2)
// console.log(juce1);
// console.log(fruitProcessor(5, 6));

//*============== DEFAULT PARAMETRS ==============//
// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 0, price = 44) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LJ123', 44, 99);

//*============== CLOSUER ==============//
//^ Example:
// const urlGenerator = domain => url => `https://${url}.${domain}`;

// const createComUrl = urlGenerator('com');
// createComUrl('google');
// console.log(createComUrl('google'));

//^Example:
// const addTax = rate => {
//   return function (value) {
//     console.log(value + value * rate);
//     return value + value * rate;
//   };
// };

// const addVAT = addTax(0.23);
// addVAT(100);

//*============== FUNCTIONS ACCEPTING CALLBACK FUNCTION ==============//

//Example-1:
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [firstLetter, ...letters] = str.split(' ');
//   return [firstLetter.toUpperCase(), ...letters].join(' ');
// };

// // Higher-order function:
// const transformer = function (str, fn) {
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best', upperFirstWord);
// transformer('JavaScript is the best', oneWord);

//*============== FUNCTIONS RETURNING FUNCTIONS ==============//
// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey = greet('Hey');
// greeterHey('Mark');
// greet('Hello')('Stella');

//*============== THE CALL(,) === APPLAY([]) === BIND()() === METHODS ==============//
const lufthansa = {
  airline: 'Lufthansa',
  code: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.code}${flightNum}`
    );
    this.bookings.push({ flight: `${this.code}${flightNum}`, name });
  },
};

// lufthansa.book(239, 'Jonas Scott');
// lufthansa.book(737, 'Adam Grey');
// console.log(lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  code: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// const flightData = ['343', 'Anna Clark'];

//^ Call method:
// book.call(eurowings, 333, 'Mrak Green');
// lufthansa.book.call(eurowings, 444, 'Mark Red');
// book.call(eurowings, ...flightData);

//^ Applay method:
// book.apply(eurowings, ['343', 'Anna Clark']);
// book.apply(eurowings, flightData);

//^ Bind methods:
//----          ------------
// const bookEW = book.bind(eurowings);
// bookEW(747, 'Georg Binds');
// //----              --------         ---//
// book.bind(eurowings, 979, 'Steav Cooper')();
// //----           -------------
// const bookEW844 = book.bind(eurowings, 844);
// bookEW844('Peter Junior');

//^Example: With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//^Example:
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// // addVat = value => value + value * 0.23
// console.log(addVAT(100));
