const ItemController = function () {
  // Item constructor
  const Item = function (id, name, cost) {
    this.id = id;
    this.name = name;
    this.cost = cost;
  };

  // Data Structure / State
  const data = {
    items: [],
    currentItem: null,
    totalCost: 0,
  };

  // Public method
  return {
    getItems: function () {
      return data.items;
    },
    addItem: function (name, cost) {
      // Create id
      const id =
        data.items.length > 0 ? data.items[data.items.length - 1].id + 1 : 0;

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
    updateItem: function (name, cost) {
      // Cost to number
      const costNumber = parseInt(cost);

      const found = data.items.find(item => {
        if (item.id === data.currentItem.id) {
          item.name = name;
          item.cost = costNumber;
          return item;
        }
      });
      return found;
    },
    deleteItem: function (id) {
      // Get ids
      const ids = data.items.map(item => item.id);
      // Get index
      const index = ids.indexOf(id);
      // Remove item
      data.items.splice(index, 1);
    },
    clearAllItems: function () {
      data.items = [];
    },
    setCurrentItem: function (itemToEdit) {
      data.currentItem = itemToEdit;
    },
    getCurrentItem: function () {
      return data.currentItem;
    },
    getTotalCost: function () {
      // let total = 0;
      // data.items.forEach(item => {
      //   total += item.cost;
      // });

      const total = data.items.reduce((acc, cur) => acc + cur.cost, 0);

      // Set total cost in data structure
      data.totalCost = total;

      return data.totalCost;
    },
    logData: function () {
      return data;
    },
  };
};

export const itemController = new ItemController();
