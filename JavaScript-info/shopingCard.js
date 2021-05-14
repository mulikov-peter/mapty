'use strict';
// Exporting module
console.log('Exporting module');

const shippingCost = 10;
const cart = [];

//* Named export ==================
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 24;
const totalQuantity = 4;

export { totalPrice, totalQuantity };

//* Default export ====================
export default function () {
  console.log('This is from default export');
}
