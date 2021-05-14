'use strict';
// Importing module
// import {
//   addToCart,
//   totalPrice as price,
//   totalQuantity,
// } from './shopingCard.js';

// console.log('Importing module');
// addToCart('Apple', 4);
// console.log(price, totalQuantity);
//=================================

// //! Don't mix named & default import
// // Import all (it will be like object)
// import * as ShoppingCart from './shopingCard.js';
// ShoppingCart.addToCart('Bread', 4);

// console.log(ShoppingCart, ShoppingCart.totalPrice);

// // Import from default export
// import someFunction from './shopingCard.js';
// someFunction();

//==============================================
//*---------------------------------------------
//==============================================

// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 23;
//   const totalQuantity = 4;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart. Shipping cost is ${shippingCost}`
//     );
//   };

//   const orderStock = function () {
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addToCart('pizza', 5);
// console.log(ShoppingCart2);

//*============ Using lodash ===========
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 6 },
    { product: 'pizza', quantity: 4 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);

const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log('stateClone:', stateClone, 'deepClone:', stateDeepClone);

if (module.hot) {
  module.hot.accept();
}
