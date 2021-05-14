'use strict';

// Get UI elements:
const form = document.querySelector('form');
const taskList = document.querySelector('.task-list');
const input = document.querySelector('.task-input');
const btnSubmit = document.querySelector('.btnSubmit');
const filterInput = document.querySelector('.filter');
const filterOutput = document.querySelector('.output-filter-task');
const btnClearTasks = document.querySelector('.clear-tasks');
const taskItem = document.querySelectorAll('.task-item');

// Add task:
const addTask = e => {
  if (input.value.trim() === '') {
    alert('Enter your task');
    input.value = '';
  } else {
    // Create li element:
    const li = document.createElement('li');
    li.classList.add('task-item');
    li.textContent = input.value;

    // Create delete button:
    const deleteBtn = document.createElement('span');
    deleteBtn.classList.add('delete-task');
    deleteBtn.textContent = '[X]';
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    btnClearTasks.style.display = 'inline-block';
    console.log('Added');
    input.value = '';
  }
  e.preventDefault();
};

// Delete task
const deleteTask = e => {
  if (e.target.classList.contains('delete-task')) {
    e.target.parentElement.remove();
    console.log('Deleted');
  }
  if (taskList.innerHTML === '') {
    btnClearTasks.style.display = 'none';
  }
};

// Clear all:
const clearTasks = () => {
  taskList.innerHTML = '';
  btnClearTasks.style.display = 'none';
  console.log('Clear All');
};

// Filter task:
const filterTask = e => {
  const text = e.target.value.toLowerCase();
  let tasks = [...taskItem];
  tasks = tasks.filter(li => li.textContent.toLowerCase().includes(text));
  // taskList.textContent = '';
  tasks.forEach(li => taskList.appendChild(li));
};

taskList.addEventListener('click', deleteTask);
form.addEventListener('submit', addTask);

btnClearTasks.addEventListener('click', clearTasks);

filterInput.addEventListener('keyup', filterTask);
