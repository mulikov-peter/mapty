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
    getItems: function () {
      return data.items;
    },

    logData: function () {
      return data;
    },
  };
})();

// UI COntroller
const UIController = (function () {
  const IUSelectors = {
    itemList: '#item-list',
  };
  // Public method
  return {
    populateItemList: function (items) {
      let html = ``;

      items.forEach(item => {
        html += `
        <li class="list-group-item" id="item-${item.id}">
          <strong>${item.name}:</strong> <em>${item.cost} $</em>
          <a href="#" class="secondary">
            <i class="edit-item fa fa-pencil pull-right"></i>
          </a>
        </li>
        `;
      });

      // Insert list items
      document.querySelector(IUSelectors.itemList).innerHTML = html;
    },
  };
})();

// App Controller
const App = (function (ItemController, UIController) {
  // Public methods
  return {
    init: function () {
      // Fetch items from data structure
      const items = ItemController.getItems();

      // Populate list with items
      UIController.populateItemList(items);
    },
  };
})(ItemController, UIController);

// Initialize App
App.init();
