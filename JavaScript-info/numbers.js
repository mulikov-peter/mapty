'use strict';
// console.log(0.1 + 0.2); // 0.300000000000000004
// 0.1+ 0.2 === 0.3 // false

//* ====== Convert string to number ===== //
Number('23');
// console.log(+'23');

// Parsing
// console.log(Number.parseInt('40px')); // 40
// console.log(Number.parseInt('4s0px')); // 4
// console.log(Number.parseInt('22.4px')); // 22

// console.log(Number.parseFloat('2.2rem')); // 2.2

//* ====== Check if value is NaN ===== //
// console.log(Number.isNaN(20)); // false
// console.log(Number.isNaN('20')); // false
// console.log(Number.isNaN(+'22px')); // true

//* ===== Checking if value is number ===== //
// console.log(Number.isFinite(20)); // true
// console.log(Number.isFinite('20')); // false

// console.log(Number.isInteger(22)); // true
// console.log(Number.isInteger(22.0)); // true

//* ===== Math ===== //
let val;
// val = Math.sqrt(25); // 5

// val = Math.max(3, 6, 2, 44); // 44
// val = Math.max(3, 6, 2, '44'); // 44
// val = Math.max(3, 6, 2, '44px'); // NaN

// val = Math.min(3,5,7,3,2) // 2

// val = Math.trunc(Math.random() * 10) + 1; // random number 1 - 10

// const randVal = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;
// 0...1 -> 0...(max-min) -> min...max
// console.log(randVal(5, 10));

//* ===== Rounding integers ===== //
// val = Math.trunc(23.33); // 23
// val = Math.trunc(-23.33); // -23

// val = Math.round(23.3); // 23
// val = Math.round(23.5); // 24

// val = Math.ceil(23.3); // 24
// val = Math.ceil(23.5); // 24

// val = Math.floor(23.3); // 23
// val = Math.floor(23.5); // 23
// val = Math.floor(-23.3); // 24

//* ===== Rounding decimals ===== //
// val = (2.7).toFixed(0); // '3' - string
// val = (2.7).toFixed(3); // '2.700' - string
// val = (2.7).toFixed(2); // '2.35' - string
// val = +(2.7).toFixed(2); // 2.7 - number

//* ===== Remainder operator ===== //
// val = 5 % 2; // (5/2) ==> 5 = 2 * 2 + 1 returns 1
// val = 8 % 3; // 2
// val = 6 % 2; // 0

// Checking even & odd
// const isEven = n => n % 2 === 0;
// console.log(isEven(4)); // true
// console.log(isEven(5)); // false

// console.log(val);

//*============================= BigInt ======================//
let bigIntNum;
bigIntNum = 2 ** 53 - 1; // 9007199254740991
bigIntNum = Number.MAX_SAFE_INTEGER; //9007199254740991

// Create bigInt number
bigIntNum = 23450940340232340n; // 23450940340232340n
bigIntNum = BigInt(1234); // 1234n

bigIntNum = 10n / 3n; // 3n

//! NOT posible mix BigInt with NUMBER

// console.log(10n == 10); // true
// console.log(10n === 10); // false

// console.log(bigIntNum);
