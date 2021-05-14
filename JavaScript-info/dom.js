'use strict';
//* DOM - Document Object Model
// ^ DOM - reprezentacja documentu HTML w przegladarce
// let val;

// val = document;
// val = document.head;
// val = document.body;
// val = document.URL;

// console.log(val);

//*============== DOM Selectors for single element ==============//
//^------- document.getElementById()
// const firstPar = document.getElementById('first-p');

// console.log(firstPar);
// console.log(document.getElementById('first-p').id); // --> first-p

//^------- document.querySelector()
// console.log(document.querySelector('#first-p'));
// console.log(document.querySelector('.first-par'));
// console.log(document.querySelector('p')); // --> get first <p></p>

//^------- Change styling
// document.getElementById('first-p').style.backgroundColor = '#888';

//^------- Add & remove class
// document.getElementById('first-p').classList.add('one')
// document.getElementById('first-p').classList.remove('one')
// document.getElementById('first-p').className = 'one-one'
// document.getElementById('first-p').classList.toggle('super');

//^------- Change content
// document.getElementById('first-p').textContent = 'First paragraph';
// document.getElementById('first-p').innerText = 'Inner Text';
// document.getElementById('first-p').innerHTML = '<span> Inner HTML </span>';

//*============== DOM Selectors for multiple elements ==============//
// document.getElementsByClassName('class-name) --> HTMLCollection

// document.getElementsByTagName('p'); --> HTMLCollection

// document.querySelectorAll('class-name') --> NodeList

//*============== CONVERT HTMLCollection, NodeList into array ==============//
//^------- 1. Array.from():
// let boxes = document.getElementsByClassName('class-name');

// let scriptsArray = Array.from(scripts);

//^------- 2. ES6 spred operator:
// let boxes = [...document.getElementsByClassName('class-name')];

//^------- 3. Using Array.prototype.slice.call()
// const boxes = [].slice.call(document.getElementsByClassName('class-name'));
// const lisArray = Array.prototype.slice.call(document.getElementsByClassName('class-name-of-li'));

//*============== TRAVERSING THE DOM ==============//
//^ Get children element nodes
// const list = document.querySelector('ul');
// const li = list.children;

// const firstChildLi = list.firstElementChild;

// const lastChildLi = list.lastElementChild;

//^ Get parent node
// const parentLiNode = list.parentNode
// const parentLi = list.parentElement

//^ Get next sibling
// const nextSiblingLi = list.nextSibling
// const nextSiblingLiEl = list.nextElementSibling
// const prevLi = list.previousElementSibling

//*============== CREATING ELEMENTS ==============//
// const secondParagraph = document.createElement('p');

// Add class or id
// secondParagraph.className = 'second-p';
// secondParagraph.id = 'sec-p';

// Create text node and append
// secondParagraph.appendChild(
//   document.createTextNode('This is second paragraph')
// );

// Append p as a child to div
// document.querySelector('.first-div').appendChild(secondParagraph);

// console.log(secondParagraph);

//*============== REMOVING & REPLACING ELEMENT ==============//
//^------- REPLACE
// Create Element
// const newHeading = document.createElement('h1');

// Add class
// newHeading.className = 'new-test-title';

// New text node
// newHeading.appendChild(document.createTextNode('New Test Title ...'));

// Get the old heading
// const oldHeading = document.querySelector('.test-title');

// Parent
// const bodyTest = document.querySelector('body');

// Replace
// bodyTest.replaceChild(newHeading, oldHeading);

//^------- REMOVE ELEMENT
// const someParagraph = document.querySelector('.some-p');

// someParagraph.remove();

//*============== EVENT LISTENER & EVENT OBJECT ==============//

// document.querySelector('.link-click').addEventListener('click', function (e) {
//   e.preventDefault();
//   console.log('Click on button');

//   let val = e;
//   val = e.target;
//   val = e.target.className;
//   val = e.target.classList;

//   console.log(val);
// });

//*============== LOCAL STORAGE ===============//
//^ set local storage item
// localStorage.setItem('name', 'Mark');

//^ set session storage item
// sessionStorage.setItem('name', 'Adam');

//^ remove from storage
// localStorage.removeItem('name')

//^ get from storage
// const userName = localStorage.getItem('name');
// console.log(userName);

//^ clear local storage
// localStorage.clear();

//^ work with lockal storage
// document.querySelector('form').addEventListener('submit', e => {
//   const task = document.querySelector('.class-of-task').value;

//   let tasks;
//   if (localStorage.getItem('tasks') === null) {
//     tasks = [];
//   } else {
//     tasks = JSON.parse(localStorage.getItem('tasks'));
//   }

//   tasks.push(task);

//   localStorage.setItem('tasks', JSON.stringify(tasks));

//   e.preventDefault();
// });

// const tasks = JSON.parse(localStorage.getItem('tasks'));
