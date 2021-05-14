'use strict';
//***********************************************************//
//*========================== SET ===========================//
//***********************************************************//

// ^ Create Set:
// console.log(new Set('Peter')); // Set(4) {"P", "e", "t", "r"}

// const orderSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// console.log(orderSet); // Set(3) {"Pasta", "Pizza", "Risotto"}

//^ Some methods:
// console.log(orderSet.size); // 3
// console.log(orderSet.has('Pizza')); // true
// console.log(orderSet.has('Bread')); // false
// orderSet.add('Garlic Bread');
// orderSet.delete('Garlic Bread');
// // orderSet.clear() // clear all elements

// for (const order of orderSet) console.log(order); // Pasta Pizza Risotto

// console.log(orderSet);

//^ Example:
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// const staffInique = [...new Set(staff)];
// console.log(staffInique); // ["Waiter", "Chef", "Manager"]
// console.log(new Set(staff).size); // 3

//***********************************************************//
//*========================== MAP ===========================//
//***********************************************************//
//^ Create Map:
// const restaurantMap = new Map();
// restaurantMap.set('name', 'Classico Italiano');
// restaurantMap.set(1, 'Rome, Italy');
// restaurantMap.set(2, 'Krakow, Poland');

// restaurantMap
//   .set('categories', ['Italian', 'Pizzeria', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');

// restaurantMap.set(document.querySelector('body'), 'Body');

// console.log(restaurantMap.get('name'));
// console.log(restaurantMap.get(true));

// const time = new Date().getHours();

// console.log(
//   restaurantMap.get(
//     time > restaurantMap.get('open') && time < restaurantMap.get('close')
//   )
// );

// console.log(restaurantMap.has('categories'));
// restaurantMap.delete(2);
// console.log(restaurantMap);
// console.log(restaurantMap.size);
// // restaurantMap.clear()

//^ Map iteration:
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct :)'],
  [false, 'Try again :('],
]);

// Quiz app:
// console.log(question.get('question'));
// console.log('------------------------');
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

//^ Convert Map to Array:
// console.log([...question]);
// console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);
