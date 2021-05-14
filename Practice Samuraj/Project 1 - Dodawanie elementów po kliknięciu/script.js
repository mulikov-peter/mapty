'use strict';

//======================== Projekt-1 Dodawanie elementów po kliknięciu ====================//
//======================== Zadanie-1 ============//
const btnClick = document.querySelector('button');
const arrDivs = [];
// let number = 1;

btnClick.addEventListener('click', () => {
  const div = document.createElement('div');
  // div.textContent = number;
  // if (number % 3 === 0) {
  //   div.classList.add('circle');
  // }

  arrDivs.push(div);

  arrDivs.forEach((div, index) => {
    div.textContent = index + 1;
    if (div.textContent % 3 === 0) {
      div.classList.add('circle');
    }
  });

  document.body.appendChild(div);
  // number++;
});

//======================== Projekt-1 Zadanie-2 ============//
let number = 1;
const btnAddLi = document.querySelector('.btn-add-li');
btnAddLi.addEventListener('click', () => {
  const liElement = document.createElement('li');

  liElement.textContent = number;

  if (number % 3 === 0) {
    liElement.style.fontSize = '25px';
  }
  number += 2;
  document.querySelector('ul').appendChild(liElement);
});

