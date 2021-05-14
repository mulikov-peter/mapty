'use strict';

//======================== Projekt-1 ==================//
//======================== Zadanie-1 ============//
//======================== Pojawienie się elementu i powiększanie go przez kliknięcie przycisku ====================//
const createElementLi = () => {
  const li = document.createElement('li');
  li.textContent = 1;
  document.querySelector('ul').appendChild(li);

  const lis = document.querySelectorAll('li');

  lis.forEach((li, index) => {
    li.textContent = index + 1;
    li.style.fontSize = `${14 + index}px`;
    console.log(li);
  });
};

const init = () => {
  // Create button:
  const btnStart = document.createElement('button');
  btnStart.textContent = 'Add Some Li';
  document.body.appendChild(btnStart);

  // Create ul:
  const ul = document.createElement('ul');
  document.body.appendChild(ul);

  // Add event to btn:
  btnStart.addEventListener('click', createElementLi);
};

init();
