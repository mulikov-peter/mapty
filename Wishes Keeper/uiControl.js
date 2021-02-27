import { itemController as ItemController } from './itemControl.js';

export const UIController = (function () {
  const UISelectors = {
    itemList: document.querySelector('#item-list'),
    addBtn: document.querySelector('.add-btn'),
    updateBtn: document.querySelector('.update-btn'),
    deleteBtn: document.querySelector('.delete-btn'),
    backBtn: document.querySelector('.back-btn'),
    clearAllBtn: document.querySelector('.btn-clear-all'),
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
    updateListItem: function (updatedItem) {
      let listItems = document.querySelectorAll('#item-list li');

      [...listItems].forEach(listItem => {
        const itemId = listItem.getAttribute('id');

        if (itemId === `item-${updatedItem.id}`) {
          document.querySelector(`#${itemId}`).innerHTML = `
          <strong>${updatedItem.name}:</strong> <em>${updatedItem.cost} $</em>
          <a href='#' class='secondary'>
            <i class='edit-item fa fa-pencil pull-right'></i>
          </a>
          `;
        }
      });
    },
    deleteListItem: function (id) {
      const itemId = `#item-${id}`;
      const item = document.querySelector(itemId);
      item.remove();
    },
    clearInputFields: function () {
      UISelectors.itemNameInput.value = '';
      UISelectors.itemCostInput.value = '';
    },
    addItemToFormForEdit: function () {
      UISelectors.itemNameInput.value = ItemController.getCurrentItem().name;
      UISelectors.itemCostInput.value = ItemController.getCurrentItem().cost;
      this.displayEditState();
    },
    removeItems: function () {
      let listItems = document.querySelectorAll('#item-list li');

      [...listItems].forEach(item => item.remove());
    },
    displayTotalCost: function (totalCost) {
      UISelectors.totalCost.textContent = totalCost;
    },
    clearEditState: function () {
      this.clearInputFields();

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
