'use strict';

//*============== CREATE ARRAY different ways ==============//
//^ 1. Usung literal array []:
// const literalArr = []; // Literal. Creates empty array --> []
// const literalArr1 = [44, 4, 8]; // Creates array --> [44, 4, 8]

//^ 2. Using new Array() constructor:
// const arrayConstructor = new Array(); // The Array() constructor creates empty array []
// const arrayConstructor1 = new Array(7); // Creates an array with (7 empty slots) length: 7 !!!!! We can use only fill() method to fill array.
// const arrayConstructor2 = new Array(44, 4, 8); // Creates an array --> [44, 4, 8]

//^ 3. Using Array.from():
// Array.from(''); // []
// Array.from('array').join('').split(); // Craete array from string --> ['array'] Can put only one string

// function f() {
//   return Array.from(arguments);
// }
// f(1, 2, 3);  // [1, 2, 3]

const arrNewFrom = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(arrNewFrom); // (7) [1, 2, 3, 4, 5, 6, 7]
const random100 = Array.from(
  { length: 100 },
  (cur, i) => (cur = Math.trunc(Math.random() * 100))
);

// console.log(random100);

//^ 4. Using Array.of():
// Array.of(7); // [7] 
// Array.of(4, 42); // --> [4, 42]

//^ 5. Using split():
// 'foo bar baz foo'.split(' '); // --> ["foo", "bar", "baz", "foo"]
// ''.split(''); // --> ['']

//^ 6. Using Array.call():
// const myNewArray = Array.call() // --> []

//^ 7. Using spred operstor(?):
let aStr = 'abc'; // can use only string
let b = [...aStr];
// console.log(b); // --> ["a", "b", "c"]

//*============== CHECK IS ARRAY ===============//
// let checkArray = Array.isArray(myArray); // --> true
// myArray instanceof Array; // -> true

//*============== METHODS OF ARRAY ==============//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://www.w3schools.com/jsref/jsref_obj_array.asp
//https://javascript.info/array-methods

//-------------- Static methods (Array.from(), Array.isArray(), Array.of())--------------//
//^ Array.from(); Creates a new Array instance from an array-like or iterable object.
// Array.from('foo'); //  --> ['f', 'o', 'o']
// Array.from([1, 2, 3], x => x + x); // --> [2, 4, 6]

// const set = new Set(['foo', 'bar', 'baz', 'foo']);
// Array.from(set); // --> [ "foo", "bar", "baz" ]

//^ Array.isArray(); Returns true if the argument is an array, or false otherwise.
const isArr = [1, 2, 3, 4];
// Array.isArray(isArr); // --> true

//^ Array.of(); Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.
// Array.of(7); // --> [7] BUT !!!! new Array(7); // --> array of 7 empty slots
// Array.of(1, 2, 3); // --> [1, 2, 3] like new Array(1, 2, 3)
// Array.of(undefined); // --> [undefined] like new Array(undefined)

//-------------- Add/remove items --------------//
const fruitsArr = ['Banana', 'Orange', 'Apple', 'Mango'];
fruitsArr.push('kiwi'); // – Adds new elements to the end of an array, and returns the new length --> 5.
fruitsArr.pop(); // – Removes the last element of an array, and returns that element --> 'kiwi'
fruitsArr.shift(); // – Removes the first element of an array, and returns that element --> 'Banana'
fruitsArr.unshift('Lemon'); // – Adds new elements to the beginning of an array, and returns the new length --> 4

//^ The splice() - returns the array of removed elements and DOES mutete original array
const monthsSplice = ['Jan', 'March', 'April', 'June'];
monthsSplice.splice(1, 0, 'Feb'); // - Adds/Removes elements from an array --> returns [] and monthsSplice = ["Jan", "Feb", "March", "April", "June"]
monthsSplice.splice(3, 1, 'May'); // - Replaces one element ('May') at index 4 returns --> ['April'] and monthsSplice = ["Jan", "Feb", "March", "May", "June"]
let removedMonth = monthsSplice.splice(2, 3); // Removes 3 elements start index 2 --> ["March", "May", "June"] and monthsSplice = ["Jan", "Feb"]

//^ The slice() Does NOT mutate original array. method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified!!!
const animalsSlice = ['ant', 'bison', 'camel', 'duck', 'elephant'];
animalsSlice.slice(2); // --> returns ["camel", "duck", "elephant"]
animalsSlice.slice(2, 4); // --> returns ["camel", "duck"]
animalsSlice.slice(-1); // --> returns last element of array ['elephant']

//^ The concat() method is used to merge (присоединять) two or more arrays. This method does NOT change the existing arrays, but instead returns a new array.
const lettersConcat = ['a', 'b', 'c'];
const numbersConcat = [1, 2, 3];
lettersConcat.concat(numbersConcat); // --> ['a', 'b', 'c', 1, 2, 3]

const letersAndNumbers = [...lettersConcat, ...numbersConcat];
// console.log(letersAndNumbers); //  ...lettersConcat = 'a','b','c'; ...numbersConcat = 1,2,3. returns --> ['a', 'b', 'c', 1, 2, 3].

//-------------- Searching in array ---------------//
//^ The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present. arr.indexOf(item, fromIndex).
['ant', 'bison', 'camel', 'duck', 'bison'].indexOf('bison'); // returns --> 1
['ant', 'bison', 'camel', 'duck', 'bison'].indexOf('bison', 2); // it starts to loop from index-2 returns --> 4
[('ant', 'bison', 'camel', 'duck', 'bison')].indexOf('dog'); // returns --> -1

//^ The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex. arr.lastIndexOf(item, from) – same like indexOf(), but looks for from right to left.
['ant', 'bison', 'camel', 'duck', 'bison'].lastIndexOf('bison'); // returns --> 4

//^ The includes() method check if an array contains the specified element. arr.includes(item, from) – looks for item starting from index from, returns true if found / false if not.
['cat', 'dog', 'bat'].includes('dog'); // returns --> true
['cat', 'dog', 'bat'].includes('Dog'); //  returns --> false
['cat', 'dog', 'bat'].includes('dog', 2); // returns --> false, because starts to find from index 2, and 'dog' is on index 1

//^ The find() method returns the value of the first element in an array that pass a test
let users = [
  { id: 1, userName: 'John' },
  { id: 2, userName: 'Peter' },
  { id: 3, userName: 'Mary' },
];
let user = users.find(item => item.id === 1); // returns --> 'John'

[5, 12, 8, 130, 44].find(element => element > 10); // returns --> 12 The first value from left

//^ The findIndex() method	returns the index of the first element in an array that pass a test, otherwise, it returns -1
[5, 12, 8, 130, 44].findIndex(element => element > 100); // returns --> 3 the first index of element > 100
[5, 12, 8, 130, 44].findIndex(element => element < 0); // returns --> -1, because 0 is not in array

//^ The filter() method returns (creates) a new array!!! with every element in an array that pass a test
[5, 12, 8, 130, 44].filter(element => element > 10); // returns --> [12, 130, 44]

//^ The map() returns (creates) a new array with the result of calling a function for each array element
const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2); // returns --> [2, 8, 18, 32]

//^ The sort() method sorts the elements of an array in place and returns the sorted array. Mutates original array!!!
const months1 = ['March', 'Jan', 'Feb', 'Dec'];
months1.sort(); // returns --> ["Dec", "Feb", "Jan", "March"]

const arrayNumb = [1, 30, 4, 21, 100000];
arrayNumb.sort(); // returns --> [1, 100000, 21, 30, 4]

const someNumbers = [20, 44, 10, 88, 12, 7];
someNumbers.sort((current, next) => current - next); // [7, 10, 12, 20, 44, 88]

//^ The reverse() DOES metate original array. Method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
[2, 4, 6, 8].reverse(); // returns --> [8, 6, 4, 2]

//^ The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.
['Fire', 'Air', 'Water'].join(); // returns string "Fire,Air,Water"
['Fire', 'Air', 'Water'].join(''); // --> "FireAirWater"
['Fire', 'Air', 'Water'].join('-'); // --> "Fire-Air-Water"
['Fire', 'Air', null, undefined, 'Water'].join(','); // --> "Fire,Air,,,Water"

//^ The toString() method returns a string representing the specified array and its elements:
const arrayStr = ['My', 'name', 'is'];
// console.log(arrayStr.toString()); // My,name,is

//^ The split() splits the string into an array
'Bilbo, Gandalf, Nazgul'.split(', '); // --> ["Bob", "Karol", "Steve"]

//^ The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
let arrNum1 = [1, 2, 3, 4, 5];
let result = arrNum1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
); // --> 15

// Get Max:
const movements = [5, 12, -44, 8, 130, 44];
const max = movements.reduce(
  (acc, cur) => (acc > cur ? acc : cur),
  movements[0]
);
// console.log(max); // --> 130

// Get average:
const average = arrNum1.reduce((acc, cur) => acc + cur) / arrNum1.length;
// console.log(average); // --> 3

//Example:
const items = [
  { id: 1, price: 50 },
  { id: 2, price: 42 },
  { id: 3, price: 4 },
  { id: 4, price: 14 },
];
const sumItemGrete10 = items.filter(item => item.price > 10);
// console.log(sumItemGrete10);

const averageGreate10 =
  sumItemGrete10.reduce((acc, item) => acc + item.price, 0) /
  sumItemGrete10.length;

// console.log(averageGreate10); // --> 35.33

//^ The reduceRight() method does the same, but goes from right to left.
[0, 1, 2, 3, 4].reduceRight(
  (accumulator, currentValue, index, array) => accumulator + currentValue,
  10
); // returns --> 20, because starts to add from 10

//^ The some() method tests if even ONE element in the array passes the test implemented by the condition (provided function). It returns  Boolean value: true/false:
// const movementsSome = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const anyDeposits = movementsSome.some(mov => mov > 0);
// console.log(anyDeposits); // --> true

//^ The every() method tests if ALL elements in the array pass the test implemented by the condition (provided function). It returns  Boolean value: true/false:
const movementsEvery = [200, 450, -400, 3000, -650, -130, 70, 1300];

const everyMovements = movementsEvery.every(mov => mov > 0);
// console.log(everyMovements); // --> false

//^ The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array:
const arrayFill = [1, 2, 3, 4];
// // fill with 0 from position 2 until position 4
// console.log(array1.fill(0, 2, 4)); // [1, 2, 0, 0]
// // fill with 5 from position 1
// console.log(array1.fill(5, 1)); // [1, 5, 5, 5]
// // fill with all 4
// console.log(array1.fill(4)); // [4, 4, 4, 4]

//^ The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length:

const arrayCopy = ['a', 'b', 'c', 'd', 'e'];
// // copy to index 0 the element at index 3
// console.log(arrayCopy.copyWithin(0, 3, 4)); // ["d", "b", "c", "d", "e"]

// // copy to index 1 all elements from index 3 to the end
// console.log(arrayCopy.copyWithin(1, 3)); // expected output: Array ["a", "d", "e", "d", "e"]

//^ The keys() method returns a new Array Iterator object that contains the keys for each index in the array:
const arrayForKey = ['a', 'b', 'c'];
// const iteratorForKey = arrayForKey.keys();
// for (const key of iteratorForKey) {
//   console.log(key); // 0 1 2
// }

//^ The values() method returns a new Array Iterator object that contains the values for each index in the array:
const arrayForValue = ['a', 'b', 'c'];
// const iteratorForValue = arrayForValue.values();

// for (const value of iteratorForValue) {
//   console.log(value); // a b c
// }

//^ The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array:
const arrayEntries = ['a', 'b', 'c'];

// for (const [index, element] of arrayEntries.entries())
//   console.log(index, element); // 0 'a' 1 'b' 2 'c'

//^ The flat() method creates a new array, by default removes 1 level nested arrays:
const arrFlat = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arrFlat.flat()); // (8) [1, 2, 3, 4, 5, 6, 7, 8]
const arrFlatDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrFlatDeep.flat(2)); // (8) [1, 2, 3, 4, 5, 6, 7, 8]

//^ The flatMap() method returns a new array and removes ONLY 1 level nested arrays:
const accountFlat = {
  name: 'Mark',
  movements: [300, 40, -88, 44],
};

const accountFlat2 = {
  name: 'Anna',
  movements: [44, 400, -100, -222],
};

const accountsFlat = [accountFlat, accountFlat2];

const allMovements = accountsFlat
  .flatMap(acc => acc.movements) // (8) [300, 40, -88, 44, 44, 400, -100, 222]
  .reduce((sum, cur) => sum + cur, 0);

// console.log(allMovements); // 418
//*============== Wyzerowac tablice ==============//
const someArr = [1, 2, 3, 4];
// someArr.length = 0; // someArr = []
// someArr.splice(0); // someArr = []

//*============== GENERAL LOOPS ==============//
const cars = ['Ford', 'BMW', 'Jaguar', 'Rover', 'Mercedes'];

//^ FOR LOOP --------------------------------------------------//
// for (let i = 0; i <= 10; i++) {
//   if (i === 4) {
//     console.log('4 is my favorite number');
//     continue;
//   }
//   if (i === 7) {
//     console.log('Stop the loop on 7');
//     break;
//   }
//   console.log(i);
// }

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

//^ WHILE LOOP --------------------------------------------------//
// let i = 0;
// while (i < 10) {
//   console.log(`Number ${i}`); // 0 - 9
//   i++;
// }

// let randomNumber = Math.trunc(Math.random() * 6) + 1;
// while (randomNumber != 6) {
//   console.log(`You rolled a ${randomNumber}`);
//   randomNumber = Math.trunc(Math.random() * 6) + 1;
//   if (randomNumber === 6) console.log(`It's 6`);
// }

//^ DO WHILE --------------------------------------------------//
// let i = 100;
// do {
//   console.log(i); // --> 100
//   i++;
// } while (i < 10);

//^ FOREACH --------------------------------------------------//
//^ The arr.forEach method allows to run a function for every element of the array.
['Paris', 'Berlin', 'Krakow'].forEach((city, index, array) => {
  // console.log(`${city} is at index ${index + 1} in ${array}`);
});

//^ FOREACH with Maps & Sets:
// Map:
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'EURO'],
//   ['GBR', 'Pound sterling'],
// ]);

// currencies.forEach((value, key, map) => {
//   console.log(`${key}: ${value}`);
// });

// Set:
// const currenciesUnique = new Set(['USD', 'EUR', 'USD', 'GBR', 'USD']);
// currenciesUnique.forEach((value, _, map) => {
//   // _ unnecessary parametr(variable)
//   console.log(`${_}: ${value}`); // USD:USD EUR:EUR GBR:GBR
// });

//^ MAP ------------------------------------------------------//
// const myCars = cars.map((car) => car);
// console.log(`My favorites cars are: ${myCars.join(', ')}.`);

//^ FOR OF ---------------------------------------------------//
// for (const car of cars) console.log(car);

// for (const [index, car] of cars.entries()) {
//   console.log(`${index + 1}: ${car}`); // 1: Ford 2: BMW 3: Jaguar 4: Rover
// }

// console.log(cars.entries()); // Array Iterator {}
// console.log(...cars.entries()); // [0, "Ford"] [1, "BMW"]...

//*============== DESTRUCTURING ==============//
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic-Bread'],
  mainMenu: ['Pizza', 'Pasta', 'Rissoto'],
  openingHours: {},
  order(starter, main) {
    return [this.starterMenu[starter], this.mainMenu[main]];
  },
};

const [catA, catB] = restaurant.categories;
// console.log(catA, catB); // 'Italian', 'Pizzeria',

// // Recive 2 return values from a function
// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main); // Garlic-Bread Pizza

// // Nested destructuring:
const nested = [1, 2, [3, 5]];
const [i, , j] = nested;
// // console.log(i, j); // 1, [3, 5]
const [a, , [x, k]] = nested;
// // console.log(a, x, k); // 1, 3, 5

// // Default values:
const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r); // 8, 9, 1

//*============== THE SPREAD OPERATOR (...) ==============//
// //! Iterables: array, strings, maps, sets, NOT object
// //^ SPREAD, because on RIGHT side of = :
// const arrayFib = [3, 5, 8];
// const arrayFibSpread = [1, 1, 2, ...arrayFib];
// console.log(arrayFibSpread); // [1,1,2,3,5,8]
// console.log(...arrayFibSpread); // 1 1 2 3 5 8

// // Copy array:
// const arrayFibCopy = [...arrayFib];

// // Join array:
// const arrayFibNew = [...arrayFibSpread, ...arrayFib];
// console.log(arrayFibNew);

// const strSpread = 'Peter';
// const lettersSpread = [...strSpread, ' ', 'M.'];
// console.log(lettersSpread); // ["P", "e", "t", "e", "r", " ", "M."]
// console.log(...lettersSpread); // P e t e r   M.

// // Example:
// const myFavoriteCars = ['Mercedes AMG-63', 'Range Rover Sport', 'BMW 5'];
// const showCars = (car1, car2, car3) => {
//   console.log(`My favorite cars are: ${car1}, ${car2} and ${car3}`);
// };

// showCars(...myFavoriteCars);

// //^ REST, because on LEFT side of = :
// const myFavoriteCarsSpred = ['Mercedes AMG-63', 'Range Rover Sport', 'BMW 5'];
const [firstCar, secondCar, ...otherCars] = [
  'Mercedes',
  'Range-Rover',
  'BMW',
  'Audi',
  'Toyota',
];
// console.log(firstCar, secondCar, otherCars); // Mercedes Range-Rover Sport ["BMW", "Audi", "Toyota"]

// const addRest = function (...numbers) {
//   let sum = 0;
//   numbers.forEach(num => {
//     sum += num;
//     return sum;
//   });

//   console.log(sum, sum / numbers.length);
// };

const restNumbers = [1, 2, 3, 4, 5];

// addRest(...restNumbers);
// addRest(2, 2);
// addRest(2, 3, 4);

//*============== OPTIONAL CHAINING (?.) ==============//
const usersOptChaining = [{ name: 'Jonas', email: 'jonas@io' }];

// console.log(usersOptChaining[0]?.name ?? 'No user on this index'); // Jonas

// console.log(usersOptChaining[4]?.name ?? 'No user on this index'); // 'No user on this index'
