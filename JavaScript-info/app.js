'use strict';
const colors = ['green', 'darkorange', 'indigo'];
const shapes = ['0%', '25%', '50%'];

const Component1 = class {
  constructor(selector) {
    this.$el = document.querySelector(selector);
  }
};

class Shape extends Component1 {
  constructor(options) {
    super(options.selector);

    this.$el.style.width = this.$el.style.height = `${options.size}px`;

    this.$el.style.backgroundColor = options.color;
    // console.log(options.color);

    this.$el.style.borderRadius = options.shape;
  }
}

const randomShape = new Shape({
  selector: '#shape',
  size: 150,
  color: colors[Math.floor(Math.random() * colors.length)],
  shape: shapes[Math.floor(Math.random() * shapes.length)],
});

// console.log(typeof function () {});

//=======================================
const _items = new WeakMap();

class Stack {
  constructor() {
    _items.set(this, []);
  }

  push(obj) {
    _items.get(this).push(obj);
  }

  pop() {
    const items = _items.get(this);
    if (items.length === 0) throw new Error('Stack is empty');

    return items.pop();
  }

  peek() {
    const items = _items.get(this);

    if (items.length === 0) throw new Error('Stack is empty');
    return items[items.length - 1];
  }

  get count() {
    return _items.get(this).length;
  }
}

const stack = new Stack();

////////////////////
