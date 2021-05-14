'use strict';

const nameInput = document.querySelector('#name');
const zipCodeInput = document.querySelector('#zipcode');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');

const validateName = function () {
  const re = /^[a-zA-Z]{2,10}$/;
  if (!re.test(nameInput.value)) nameInput.classList.add('is-invalid');
  else nameInput.classList.remove('is-invalid');
};

const validateZipcode = function () {
  const re = /^[0-9]{5}(-[0-9]{4})?$/;
  if (!re.test(zipCodeInput.value)) zipCodeInput.classList.add('is-invalid');
  else zipCodeInput.classList.remove('is-invalid');
};

const validateEmail = function () {
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if (!re.test(emailInput.value)) emailInput.classList.add('is-invalid');
  else emailInput.classList.remove('is-invalid');
};

const validatePhone = function () {
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
  if (!re.test(phoneInput.value)) phoneInput.classList.add('is-invalid');
  else phoneInput.classList.remove('is-invalid');
};

// Form blur event listeners
nameInput.addEventListener('blur', validateName);
zipCodeInput.addEventListener('blur', validateZipcode);
emailInput.addEventListener('blur', validateEmail);
phoneInput.addEventListener('blur', validatePhone);