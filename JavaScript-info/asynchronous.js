'use strict';
//*=====================JONAS===================//
//
const btnCountryAsync = document.querySelector('#btn-country-async');
const countriesContainer = document.querySelector('.countries');

// Display in html
const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// Render error
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   // Country 1
//   getJSON(
//     `https://restcountries.eu/rest/v2/name/${country}`,
//     `Country "${country}" not found`
//   )
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       // Show error
//       // neighbour = 'afa';
//       if (!neighbour) throw new Error('No neighbour for this country found');
//       // get neighbour 2
//       return getJSON(
//         `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
//         'Country neighbour not found'
//       );
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       renderError(`Something went wrong ${err.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(response => {
//       if (!response.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return response.json();
//     })
//     .then(data => {
//       // console.log(data);
//       return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found`);
//       // console.log(res.json());
//       return res.json();
//     })
//     .then(data => {
//       // console.log(...data);
//       renderCountry(data[0]);
//     })
//     .catch(err => console.log(err, 'Errrrrrrroooooooorrrrrrrrr'));
// };
// getCountryData('portugal');

// btnCountryAsync.addEventListener('click', getCountryData('australia'));
// whereAmI(-33.933, 18.474);

// Coding challenge
/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.
Here are your tasks:
PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
*/
/*
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
*/
/*
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
*/
/*
4. Chain a .catch method to the end of the promise chain and log errors to the console
*/

// whereAmI(52.508, 13.381);
/*
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.
PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)
TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474
GOOD LUCK 😀
*/

//--------------------------------------------

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition().then(pos => console.log(pos));

//-----------------------------------

const whereAmIAsync = async function () {
  // Old way:
  // fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(res =>
  //   console.log(res)
  // );
  // return res.json().then(data => console.log(data));

  // New way:

  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);

    if (!resGeo.ok) throw new Error('Problem getting geolocation');

    const dataGeo = await resGeo.json();

    // Country data
    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
    );

    if (!resGeo.ok) throw new Error('Problem getting country');

    const data = await res.json();
    // console.log(data);
    renderCountry(data[0]);
    return `You are in ${dataGeo.city} ${dataGeo.country}`;
  } catch (err) {
    renderError(err.message);

    // Reject promise returned from async function
    throw err;
  }
};

// whereAmIAsync();

// (async function () {
//   try {
//     const city = await whereAmIAsync();
//     console.log(city);
//   } catch (error) {
//     console.error(error.message);
//   }
//   console.log('Finish');
// })();

// Promise.any([
//   Promise.resolve('Success'),
//   Promise.reject('Error'),
//   Promise.resolve('Another Success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

//***************************************************/
//*=================== TRAVERSY ===================//
const loadData = function () {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();
  console.log(xhr);

  // OPEN
  xhr.open('GET', 'arrays.js', true);

  xhr.onload = function () {
    if (this.status === 200) {
      document.querySelector(
        '.output-async'
      ).innerHTML = `<p>${this.responseText}</p>`;
    }
  };

  xhr.send();
};

document.querySelector('.btn-async').addEventListener('click', loadData);

//*========================= CallBack function
// const posts = [
//   { title: 'Post-1', body: 'This is post-1' },
//   { title: 'Post-2', body: 'This is post-2' },
// ];

// const createPost = function (post) {
//   setTimeout(() => posts.push(post), 2000);
// };

// const getPost = function () {
//   setTimeout(() => {
//     let output = '';
//     posts.forEach(post => (output += `<li>${post.title}</li>`));
//     document.body.innerHTML = output;
//   }, 1000);
// };

// createPost({ title: 'Post-3', body: 'This is post-3' });
// getPost(); // Show us post-1 and post-2

//^ Async way
// const createPost = function (post, callback) {
//   setTimeout(() => {
//     posts.push(post);
//     callback();
//   }, 2000);
// };

// const getPosts = function () {
//   setTimeout(() => {
//     let output = '';
//     posts.forEach(post => (output += `<li>${post.title}</li>`));
//     document.body.innerHTML = output;
//   }, 1000);
// };

// createPost({ title: 'Post-3', body: 'This is post-3' }, getPosts); // Show us post-1, post-2, post-3

//*=============== ES6 Promises ======================
const posts = [
  { title: 'Post-1', body: 'This is post-1' },
  { title: 'Post-2', body: 'This is post-2' },
];

const createPost = function (post) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      posts.push(post);

      let error = false;

      if (!error) resolve();
      else reject('Error: Somethig went wrong');
    }, 2000);
  });
};

const getPosts = function () {
  setTimeout(() => {
    let output = '';
    posts.forEach(post => (output += `<li>${post.title}</li>`));
    document.body.innerHTML = output;
  }, 1000);
};

// createPost({ title: 'Post-3', body: 'This is post-3' })
//   .then(getPosts)
//   .catch(function (err) {
//     console.log(err);
//   });

//*=================== The Fetch API ====================

const boxContainer = document.querySelector('.container-box');

const handleErrors = res => {
  // if (!res.ok) throw new Error(res.error); // show up error
  if (res.ok) throw new Error(res.error);
  return res;
};

const getData = function (e) {
  e.preventDefault();
  // console.log(e.target.dataset.get, e.target.textContent);
  if (e.target.classList.contains('get-text')) {
    fetch('test.txt')
      .then(res => res.text())
      .then(handleErrors)
      .then(data => (document.querySelector('.output-async').innerHTML = data))
      .catch(err => console.log(err));
  }
  if (e.target.classList.contains('get-json')) {
    fetch('post.json')
      .then(res => res.json())
      .then(handleErrors)
      .then(data => {
        let output = '';
        data.forEach(post => (output += `<li>${post.title} ${post.body}</li>`));
        document.querySelector('.output-async').innerHTML = output;
      })
      .catch(err => console.log(err));
  }
  if (e.target.classList.contains('get-data')) {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(handleErrors)
      .then(data => {
        console.log(data);
        let output = '';
        // Display all countries:
        // data.forEach(
        //   country =>
        //     (output += `<li>${country.name}. Capital is ${country.capital} <img height="30" width="50" src="${country.flag}" alt=""></li>`)
        // );
        // document.querySelector('.output-async').innerHTML = output;

        // Display single country
        const randomNum = Math.floor(Math.random() * 250);
        const re = /[^(\,\()]*/;

        document.querySelector('.output-async').innerHTML = `<b>${data[
          randomNum
        ].name
          .match(re)[0]
          .trim()}</b>  Capital is "${
          data[randomNum].capital
        }" <img height="30" width="50" src="${data[randomNum].flag}" alt="">`;
      })
      .catch(err => console.log(err));
  }
};

boxContainer.addEventListener('click', getData);

// Create Alphabet:
const alphabet = document.querySelector('.alphabet');

[...Array(26)].forEach((_, i) => {
  let letter = `<button class="letter" id=${String.fromCharCode(
    i + 65
  )}>${String.fromCharCode(i + 65)}</button>`;
  alphabet.insertAdjacentHTML('beforeend', letter);
});

const getLetter = e => {
  e.preventDefault();
  if (e.target.id === e.target.textContent) {
    console.log(e.target.textContent);
  }
};

alphabet.addEventListener('click', getLetter);

//*======================Async & Await =============
//^ async & await with promises
// async function myFunc() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 1000);
//   });

//   const error = true;
//   if (error) {
//     const res = await promise; // Wait until promise is resolved
//     return res;
//   } else {
//     await Promise.reject(new Error('Something went wrong'));
//   }
// }

// myFunc()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

//^ async & await with fetch
// async function getUsers() {
//   // await response of the fetch call
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');

//   // Only proceed once its resolved (Действуйте только после того, как он разрешен)
//   const data = await response.json();

//   // Only proceed once second promise is resolved
//   return data;
// }

// getUsers().then(users => console.log(users));
