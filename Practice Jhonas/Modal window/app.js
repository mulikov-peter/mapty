'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// Open modal window & remove 'hidden' class:
const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Close modal window & add 'hidden' class:
const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Add 'click' for each button to open modal window:
btnsOpenModal.forEach(btnOpenModal => {
  btnOpenModal.addEventListener('click', openModal);
});

// Close the modal window by close button:
btnCloseModal.addEventListener('click', closeModal);

// Close the modal window by click anywhere:
overlay.addEventListener('click', closeModal);

// Close modal window by press 'esc' key:
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
