'use strict';

// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Add task:
const addTask = e => {
  if (taskInput.value === '') {
    const alert = document.createElement('p');
    alert.textContent = 'Add a task!';
    document.querySelector('.alert').appendChild(alert);
    setTimeout(() => {
      alert.remove();
    }, 2000);
  } else {
    // Create li element:
    const li = document.createElement('li');
    // Add class:
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    // Add class:
    link.className = 'delete-item secondary-content';
    // Add icon html:
    link.innerHTML = `<i class='fa fa-remove'></i>`;
    // Append the link to li:
    li.appendChild(link);
    // Append li to ul:
    taskList.appendChild(li);

    // Store in LocalStorage:
    storeTaskInLockalStorage(taskInput.value);

    // Clear input:
    taskInput.value = '';
  }

  e.preventDefault();
};

// Remove task:
const removeTask = e => {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are You Sure?')) {
      const removedElement = e.target.parentElement.parentElement;
      removedElement.remove();
      // Remove from localStorage:
      removeTaskFromLocalStorage(removedElement);
    }
  }
};

// Clear tasks:
const clearTasks = () => {
  // taskList.innerHTML = '';
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // Clear from LS:
  clearTasksFromLocalStorage();
};

// Filter tasks:
const filterTasks = e => {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(task => {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) !== -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
};

// Store task in LocalStorage:
const storeTaskInLockalStorage = task => {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Get tasks from local storage:
const getTasks = () => {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(task => {
    // Create li element:
    const li = document.createElement('li');
    // Add class:
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(task));
    // li.textContent = task;

    // Create new link element
    const link = document.createElement('a');
    // Add class:
    link.className = 'delete-item secondary-content';
    // Add icon html:
    link.innerHTML = `<i class='fa fa-remove'></i>`;
    // Append the link to li:
    li.appendChild(link);
    // Append li to ul:
    taskList.appendChild(li);
  });
};

// Remove from Local Storage:
const removeTaskFromLocalStorage = taskItem => {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach((task, index) => {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Clear tasks from Local Storage:
const clearTasksFromLocalStorage = () => {
  localStorage.clear();
};

// Load all event listeners
const loadEventListeners = () => {
  // DOM load event
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add task event
  form.addEventListener('submit', addTask);

  // Remove task event:
  taskList.addEventListener('click', removeTask);

  // Clear tasks:
  clearBtn.addEventListener('click', clearTasks);

  // Filter tasks event:
  filter.addEventListener('keyup', filterTasks);
};

loadEventListeners();
