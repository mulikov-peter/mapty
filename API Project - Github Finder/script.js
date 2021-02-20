'use strict';
// Init GitHub
const github = new Github();

// Search input
const inputSearchUser = document.querySelector('#search-user');

// Search input event listener
inputSearchUser.addEventListener('keyup', e => {
  // Get input text
  const userText = e.target.value;
  if (userText !== '') {
    // Make http call
    github.getUser(userText).then(data => {
      if (data.profile.message === 'Not Found') {
        // Show alert
      } else {
        // Show alert
      }
    });
  } else {
    // Clear profile
  }
});
