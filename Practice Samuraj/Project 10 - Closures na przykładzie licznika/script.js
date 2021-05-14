'use strict';
//================= Example 1=====================//
// const add = (start = 0) => {
//   let number = start;

//   const y = () => {
//     number++;
//     document.body.textContent = `Counter: ${number}`;
//   };
//   return y;
// };

// const counter = add();

// document.addEventListener('click', counter);

// console.log(counter);

//================= Example 2 =====================//
// const createUser = (name, age) => {
//   let userName = name;
//   let userAge = age;
//   console.log(age);

//   function showInfo() {
//     const checkAge =
//       userAge >= 18 ? `${userName} can drive` : `${userName} can not drive`;
//     console.log(checkAge);
//   }
//   return showInfo;
// };

// const checkUser = createUser('Mark', 16);
// checkUser();

//================== Zadanie ==========================//
const countSec = (sec = 0) => {
  let time = sec;
  const addSecond = () => {
    time++;
    document.body.textContent = `User spend: ${time} seconds here :)`;
    console.log(time);
  };

  return addSecond;
};

const displayTimer = countSec();
// displayTimer();

setInterval(displayTimer, 1000);
