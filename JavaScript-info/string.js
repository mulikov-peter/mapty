'use strict';

const airline = 'TAP Air Portugal';
const palne = 'A320';

// Get element:
// console.log(palne[1]); // '3'

// console.log(airline.length); // 16

//^ Methods:
// console.log(airline.indexOf('r')); // 6
// console.log(airline.indexOf('Portugal')); // 8
// console.log(airline.indexOf('portugal')); // -1
// console.log(airline.lastIndexOf('r')); // 10

// const strSlice = airline.slice(4);
// console.log(strSlice); // 'Air Portugal'

// const strSlice1 = airline.slice(4, 7); // 4 - startIndex, 7 - endIndex not included (stop before 7 index)
// console.log(strSlice1); // 'Air'

// console.log(airline.slice(0, airline.indexOf(' '))); // TAP

//^ Examles-1:
// const checkMiddleSeat = seat => {
//   // B & E are middle seats
//   const letterOfSeat = seat.slice(seat.length - 1);
//   console.log(
//     letterOfSeat === 'B' || letterOfSeat === 'E'
//       ? `The seat ${seat} is middle`
//       : `Is not middle`
//   );
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

//^ Examles-2:
// const passenger = 'jOnAS'; // Should be Jonas

// 1 variante:
// console.log(
//   passenger.slice(0, 1).toUpperCase() + passenger.slice(1).toLowerCase()
// );

// 2 variante:
// console.log(passenger[0].toUpperCase() + passenger.slice(1).toLowerCase());

// 3 variante function:
// const functionFirstLetterToUp = name =>
//   name[0].toUpperCase() + name.slice(1).toLowerCase();

// console.log(functionFirstLetterToUp(passenger));
// console.log(functionFirstLetterToUp('peTeR'));

//^ Example-3:
// const email = 'hello@jonas.io';
// const loginEmail = '   Hello@Jonas.Io  \n';

// const normalizedEmail = loginEmail.toLocaleLowerCase().trim();

// console.log(normalizedEmail);

//^ REPLACING
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23';
// console.log(announcement.replace('door', 'gate')); // It replaces only first one. All passengers come to boarding gate 23. Boarding door 23.

// Replace all:
// console.log(announcement.replaceAll('door', 'gate')); // Replaces all 'door' to 'gate'
// console.log(announcement.replaceAll(/door/g, 'gate')); // Replaces all 'door' to 'gate'

// const country = 'slovakia';

// const checkLetter = letter => {
//   let newCountry = '';
//   if (country.includes(letter)) {
//     newCountry = country.replaceAll(letter, 'X');
//   } else {
//     console.log('No letter');
//   }
//   console.log(newCountry);
//   return newCountry;
// };

// checkLetter('a');
//^ Booleans methods:
// const plane = 'A320neo';
// console.log(plane.includes('A320')); // true

// console.log(plane.startsWith('Air')); // false
// console.log(plane.startsWith('A')); // true

//^ Example:
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('gun') || baggage.includes('knife')) {
//     console.log('You are not allowed on board');
//   } else {
//     console.log('Welcome aboard');
//   }
// };
// checkBaggage('I have a laptop some food');
// checkBaggage('Socks and camera');
// checkBaggage('Got a gun');

//^ Split Method:
// const [firstName, lastName] = 'Peter Mulikov'.split(' ');

// const newName = ['Mr.', firstName, lastName.toLocaleUpperCase()].join(' ');

// console.log(newName);

//^ Example:

// const names = 'anna, maria, peter, alex';

// const capitalizeNames = names => {
//   names = names.split(', ');
//   const namesUp = names.map(name => {
//     // return name[0].toUpperCase() + name.slice(1);
//     return name.replace(name[0], name[0].toUpperCase());
//   });
//   return namesUp.join(', ');
// };

// console.log(capitalizeNames(names));

//^ Padding:
// const message = 'Go to gate 23';
// console.log(message.padStart(25, '+'));
// console.log(message.padEnd(25, '-'));

//^ Example:
// const maskCreditCard = function (number) {
//   const str = String(number);
//   const last = str.slice(-4); // get last 4 numbers
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(1234235345123));
// console.log(maskCreditCard('32431413'));

//^ Repeat:
// const message2 = 'Good weather... Good luck!!!';

// console.log(message2.repeat(5));

// const planesInline = function (n) {
//   console.log(`There are ${n} planes in line ${'= airplane ='.repeat(n)}`);
// };

// planesInline(5);
