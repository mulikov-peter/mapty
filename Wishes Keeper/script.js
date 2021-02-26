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
      { id: 1, name: 'Laptop', cost: 1400 },
      { id: 2, name: 'Car (BMW-i3)', cost: 8900 },
    ],
    currentItem: null,
    totalCost: 0,
  };

  // Public method
  return {
    getItems: function () {
      return data.items;
    },
    addItem: function (name, cost) {
      let id;
      // Create id
      if (data.items.length > 0) {
        id = data.items[data.items.length - 1].id + 1;
      }
      if (data.items.length < 0) id = 0;

      // Cost to number
      const costNumber = parseInt(cost);

      // Create new item
      const newItem = new Item(id, name, costNumber);

      // Add to items array
      data.items.push(newItem);

      return newItem;
    },
    logData: function () {
      return data;
    },
  };
})();

// UI COntroller
const UIController = (function () {
  const UISelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn',
    itemNameInput: '#item-name',
    itemCostInput: '#item-cost',
  };

  // Public method
  return {
    populateItemList: function (items) {
      let html = ``;

      items.forEach(item => {
        const { id, name, cost } = item;
        html += `
        <li class="list-group-item" id="item-${id}">
          <strong>${name}:</strong> <em>${cost} $</em>
          <a href="#" class="secondary">
            <i class="edit-item fa fa-pencil pull-right"></i>
          </a>
        </li>
        `;
      });
      // Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getItemInput: function () {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        cost: document.querySelector(UISelectors.itemCostInput).value,
      };
    },
    getSelectors: function () {
      return UISelectors;
    },
  };
})();

// App Controller
const App = (function (ItemController, UIController) {
  // Add item submit
  const itemAddSubmit = function (e) {
    e.preventDefault();
    // Get form input from UI Controller
    const input = UIController.getItemInput();

    // Check for name and cost input
    if (input.name !== '' && input.cost !== '') {
      // Add Item
      const newItem = ItemController.addItem(input.name, input.cost);
    }
  };

  // Load event listeners
  const loadEventListeners = function () {
    // Get UI Selectors
    const UISelectors = UIController.getSelectors();

    // Add item event
    document
      .querySelector(UISelectors.addBtn)
      .addEventListener('click', itemAddSubmit);
  };

  // Public methods
  return {
    init: function () {
      // Fetch items from data structure
      const items = ItemController.getItems();

      // Populate list with items
      UIController.populateItemList(items);

      // Load event listeners
      loadEventListeners();
    },
  };
})(ItemController, UIController);

// Initialize App
App.init();
