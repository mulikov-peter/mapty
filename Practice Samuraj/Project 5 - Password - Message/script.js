'use strict';

const input = document.querySelector('.password');

const passwords = ['uSer', 'Asdf', 'qwerty'];

const message = document.querySelector('.message');

const textMessages = [
  'Password for user',
  'Password for asdf',
  'Password for qwerty',
];

//=============== ForEach ====================//
input.addEventListener('input', e => {
  const text = e.target.value;

  message.textContent = '';
  passwords.forEach((password, index) => {
    if (password.toLocaleLowerCase() === text.toLowerCase()) {
      message.textContent = textMessages[index];
      e.target.value = '';
    }
  });
});

//=============== Map ======================//
// const passwordsLC = passwords.map(password => password.toLowerCase());

// input.addEventListener('input', e => {
//   const inputText = e.target.value.toLowerCase();
//   message.textContent = '';
//   passwordsLC.map((password, index) => {
//     if (password === inputText) {
//       message.textContent = textMessages[index];
//       e.target.value = '';
//     }
//   });
// });

input.addEventListener('focus', e => {
  e.target.classList.add('active');
});

input.addEventListener('blur', e => {
  e.target.classList.remove('active');
});
