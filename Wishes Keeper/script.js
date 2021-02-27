'use strict';
// Storage Controller

//*------------------------------------------------------
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
    getItemById: function (id) {
      const found = data.items.find(item => item.id === id);
      return found;
    },
    setCurrentItem: function (itemToEdit) {
      data.currentItem = itemToEdit;
    },
    getCurrentItem: function () {
      return data.currentItem;
    },
    getTotalCost: function () {
      let total = 0;
      data.items.forEach(item => {
        total += item.cost;
      });
      // Set total cost in data structure
      data.totalCost = total;

      return data.totalCost;
    },
    logData: function () {
      return data;
    },
  };
})();

//*--------------------------------------------------------------
// UI Controller
const UIController = (function () {
  const UISelectors = {
    itemList: document.querySelector('#item-list'),
    addBtn: document.querySelector('.add-btn'),
    updateBtn: document.querySelector('.update-btn'),
    deleteBtn: document.querySelector('.delete-btn'),
    backBtn: document.querySelector('.back-btn'),
    itemNameInput: document.querySelector('#item-name'),
    itemCostInput: document.querySelector('#item-cost'),
    totalCost: document.querySelector('.total-cost'),
  };

  // Private methods:
  // Create li
  const createLiElement = function (id, name, cost) {
    return `
    <li class='list-group-item' id='item-${id}'>
      <strong>${name}:</strong> <em>${cost} $</em>
      <a href='#' class='secondary'>
        <i class='edit-item fa fa-pencil pull-right'></i>
      </a>
    </li>
    `;
  };

  // Public methods:
  return {
    populateItemList: function (items) {
      let html = ``;

      items.forEach(item => {
        const { id, name, cost } = item;
        html += createLiElement(id, name, cost);
      });
      // Insert list items
      UISelectors.itemList.innerHTML = html;
    },
    getItemInput: function () {
      return {
        name: UISelectors.itemNameInput.value,
        cost: UISelectors.itemCostInput.value,
      };
    },
    addListItem: function (item) {
      // Create li element
      const li = createLiElement(item.id, item.name, item.cost);

      // Insert li into html
      UISelectors.itemList.insertAdjacentHTML('beforeend', li);
    },
    clearInputFields: function () {
      UISelectors.itemNameInput.value = '';
      UISelectors.itemCostInput.value = '';
    },
    addItemToFormForEdit: function () {
      UISelectors.itemNameInput.value = ItemController.getCurrentItem().name;
      UISelectors.itemCostInput.value = ItemController.getCurrentItem().cost;
      UIController.displayEditState();
    },
    displayTotalCost: function (totalCost) {
      UISelectors.totalCost.textContent = totalCost;
    },
    clearEditState: function () {
      UIController.clearInputFields();
      UISelectors.updateBtn.style.display = 'none';
      UISelectors.deleteBtn.style.display = 'none';
      UISelectors.backBtn.style.display = 'none';
      UISelectors.addBtn.style.display = 'inline';
    },
    displayEditState: function () {
      UISelectors.updateBtn.style.display = 'inline';
      UISelectors.deleteBtn.style.display = 'inline';
      UISelectors.backBtn.style.display = 'inline';
      UISelectors.addBtn.style.display = 'none';
    },
    getSelectors: function () {
      return UISelectors;
    },
  };
})();

//*--------------------------------------------------------------
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
      // Add item to UI list
      UIController.addListItem(newItem);
      // Get total cost
      const totalCost = ItemController.getTotalCost();
      // Add total cost to UI
      UIController.displayTotalCost(totalCost);
      // Clear fields
      UIController.clearInputFields();
    }
  };

  // Update item submit
  const itemUpdateSubmit = function (e) {
    e.preventDefault();
    if (e.target.classList.contains('edit-item')) {
      // Get list item id
      const listId = e.target.parentNode.parentNode.id;

      // Break into an array
      const listIdArr = listId.split('-');

      // Get the actual id
      const id = parseInt(listIdArr[1]);

      // Get item
      const itemToEdit = ItemController.getItemById(id);

      // Set current item
      ItemController.setCurrentItem(itemToEdit);

      // Add item to form for edit it
      UIController.addItemToFormForEdit();
    }
  };

  // Load event listeners
  const loadEventListeners = function () {
    // Get UI Selectors
    const UISelectors = UIController.getSelectors();

    // Add item event
    UISelectors.addBtn.addEventListener('click', itemAddSubmit);

    // Edit-icon click event
    UISelectors.itemList.addEventListener('click', itemUpdateSubmit);
  };

  // Public methods
  return {
    init: function () {
      // Clear edit state / set initial set
      UIController.clearEditState();

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
