'use strict';

const btnStart = document.querySelector('.btn-start');
const divMessage = document.querySelector('.message');

//======================= Zadanie 1 =================//

// const names = ['Alex', 'Maria', 'Peter', 'Anna', 'Katrin', 'Danil'];

// btnStart.addEventListener('click', () => {
//   const randomName = names[Math.trunc(Math.random() * names.length)];
//   divMessage.textContent = `Good name is ${randomName}`;
// });

//======================== Zadanie 2 =================//
const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const codesAmount = 1;
const charsAmount = 6;

const getRandomColor = () => {
  let result = '#';
  for (let i = 0; i < charsAmount; i++) {
    result += items[Math.trunc(Math.random() * items.length)];
  }
  return result;
};

btnStart.addEventListener('click', () => {
  let color;
  for (let i = 0; i < codesAmount; i++) {
    color = getRandomColor();
    const pElement = document.createElement('p');
    pElement.textContent = color;
    divMessage.appendChild(pElement);
  }

  document.body.style.backgroundColor = color;
});

//========================== Zadanie 3 ==============//

const form = document.querySelector('.form');
const input = document.querySelector('.input-text');
const inputText = document.querySelector('.input-text');
const textMessage = document.querySelector('.text-message');

const namesArr = [];

const addName = e => {
  let name = inputText.value;
  if (name === '') {
    alert('Enter text!');
  } else {
    if (namesArr.includes(name)) {
      alert(`${name} has beed added`);
    } else {
      namesArr.push(name);
      textMessage.textContent += `${name}, `;
      inputText.value = '';
    }
  }
  e.preventDefault();
};

form.addEventListener('submit', addName);

//========================== Zadanie 4 ==============//
const form4 = document.querySelector('.form-4');
const inputText4 = document.querySelector('.input-text-4');
const btnAddPosibility = document.querySelector('.btn-add');
const btnReset = document.querySelector('.btn-reset');
const btnShowAdvice = document.querySelector('.btn-show-advice');
const btnShowPosibilities = document.querySelector('.btn-show-posibility');
const outputText = document.querySelector('.output-text');

const posibilities = ['Do it', 'Think more', 'You can', 'Do NOT!!!'];

// Add posibilities:
const addPosibility = e => {
  const newPosibility = inputText4.value;
  if (newPosibility === '') {
    alert('Enter posibility');
  } else {
    posibilities.push(newPosibility);
    inputText4.value = '';
    alert(`Success!! "${newPosibility}" has been added!`);
  }
  e.preventDefault();
};

// Show posibilities:
const showPosibilities = () => {
  posibilities.length > 0
    ? alert(posibilities.join(', '))
    : alert('No posibilities...');
};

// Reset  all posibilities:
const reset = e => {
  posibilities.length = 0;
  outputText.textContent = '';
  alert('Reset done!!!');
  e.preventDefault();
};

// Show advice:
const showAdvice = () => {
  const advice = posibilities[Math.trunc(Math.random() * posibilities.length)];

  posibilities.length > 0
    ? (outputText.textContent = advice)
    : alert('No posibilities for you');
};

// Add events:
form4.addEventListener('submit', addPosibility);
btnShowPosibilities.addEventListener('click', showPosibilities);
btnReset.addEventListener('click', reset);
btnShowAdvice.addEventListener('click', showAdvice);

//========================== Zadanie 5 ==============//
const randomNum1 = (min = 1, max = 1) =>
  Math.trunc(Math.random() * (max - min) + min); // 3,4

console.log(randomNum1(3, 5));

const randomNum2 = (min = 1, max = 1) => {
  const randomNumber = Math.trunc(Math.random() * (max - min + 1) + min); // 3,4,5
  return randomNumber;
};

console.log(randomNum2(3, 5));
