import { itemController as ItemController } from './itemControl.js';
import { UIController } from './uiControl.js';

// App Controller
const App = function (ItemController, UIController) {
  //^ Load event listeners
  const loadEventListeners = function () {
    // Get UI Selectors
    const UISelectors = UIController.getSelectors();

    // Add item event
    UISelectors.addBtn.addEventListener('click', itemAddSubmit);

    // Disable submit on enter
    document.addEventListener('keypress', function (e) {
      if (e.code === 'Enter') {
        e.preventDefault();
        return false;
      }
    });

    // Edit-icon click event
    UISelectors.itemList.addEventListener('click', itemEditClick);

    // Update item event
    UISelectors.updateBtn.addEventListener('click', itemUpdateSubmit);

    // Delete item event
    UISelectors.deleteBtn.addEventListener('click', itemDeleteSubmit);

    // Back button event
    UISelectors.backBtn.addEventListener('click', clearEditState);

    // Clear all items event
    UISelectors.clearAllBtn.addEventListener('click', clearAllItemsClick);
  };

  //------------------------------
  //^ Clear edit state
  const clearEditState = function (e) {
    e.preventDefault();
    UIController.clearEditState();
  };

  //^ Add item submit
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

  //^ Click edit item
  const itemEditClick = function (e) {
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

  //^ Update item submit
  const itemUpdateSubmit = function (e) {
    e.preventDefault();
    // Get item input
    const input = UIController.getItemInput();
    // Update item
    const updatedItem = ItemController.updateItem(input.name, input.cost);
    // Update UI
    UIController.updateListItem(updatedItem);
    // Get total cost
    const totalCost = ItemController.getTotalCost();
    // Add total cost to UI
    UIController.displayTotalCost(totalCost);

    UIController.clearEditState();
  };

  //^ Delete item submit
  const itemDeleteSubmit = function (e) {
    e.preventDefault();
    // Get current item
    const currentItem = ItemController.getCurrentItem();
    //Delete from data structure
    ItemController.deleteItem(currentItem.id);
    // Delete from UI
    UIController.deleteListItem(currentItem.id);
    // Get total cost
    const totalCost = ItemController.getTotalCost();
    // Add total cost to UI
    UIController.displayTotalCost(totalCost);

    UIController.clearEditState();
  };

  //^ Clear items event
  const clearAllItemsClick = function () {
    // Delete all items from data structure
    ItemController.clearAllItems();
    // Get total cost
    const totalCost = ItemController.getTotalCost();
    // Add total cost to UI
    UIController.displayTotalCost(totalCost);
    // Remove from UI
    UIController.removeItems();
  };

  //^ Public methods
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
};

export const app = new App(ItemController, UIController);
