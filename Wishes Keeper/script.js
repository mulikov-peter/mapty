'use strict';
// Storage Controller

// Item Controller
const ItemController = (function () {
  // Item constructor
  const Item = function (id, name, cost) {
    this.id = id;
    this.name = name;
    this.cost = cost;
  };

  // Data Structure / State
  const data = {
    items: [
      { id: 0, name: 'iPhone-12', cost: 1000 },
      { id: 0, name: 'Laptop', cost: 1400 },
      { id: 0, name: 'Car (BMW-i3)', cost: 8900 },
    ],
    currentItem: null,
    totalCost: 0,
  };

  // Public method
  return {
    logData: function () {
      return data;
    },
  };
})();

// UI COntroller
const UIController = (function () {
  console.log('UI Controller');

  // Public method
  return {};
})();

// App Controller
const App = (function (ItemController, UIController) {
  // Public methods
  return {
    init: function () {
      console.log('Init...');
    },
  };
})(ItemController, UIController);

// Initialize App
App.init();
