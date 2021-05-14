'use strict';

const showError = error => {
  // Hide loader:
  document.querySelector('#loader').style.display = 'none';

  // Create div:
  const errorDiv = document.createElement('div');
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  errorDiv.className = 'alert alert-danger';
  errorDiv.textContent = error;
  card.insertBefore(errorDiv, heading);

  // Clear error after 1 sec
  setTimeout(() => {
    // errorDiv.remove();
    document.querySelector('.alert').remove();
  }, 2000);
};

const calculateResult = () => {
  // UI Vars:
  const amountEl = document.querySelector('#amount');
  const interestEl = document.querySelector('#interest');
  const yearsEl = document.querySelector('#years');
  const monthlyPaymentEl = document.querySelector('#monthly-payment');
  const totalPaymentEl = document.querySelector('#total-payment');
  const totalInterest = document.querySelector('#total-interest');

  const principal = parseFloat(amountEl.value);
  const calculatedInterest = parseFloat(interestEl.value) / 100 / 12;
  const calculatedPayments = parseFloat(yearsEl.value) * 12;

  // Compute monthly payment:
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPaymentEl.value = monthly.toFixed(2);
    totalPaymentEl.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);

    // Show result:
    document.querySelector('#results').style.display = 'block';
    // Hide loader:
    document.querySelector('#loader').style.display = 'none';
  } else {
    showError('Please check your numbers');
    console.log('Error!!!');
  }
};

// Listen for submit:
document.querySelector('#loan-form').addEventListener('submit', e => {
  // Show loader:
  document.querySelector('#loader').style.display = 'block';

  setTimeout(calculateResult, 2000);

  e.preventDefault();
});
