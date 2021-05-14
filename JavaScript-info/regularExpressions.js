'use strict';
//*=================================
// let re;
// re = /hello/;

// i - case insensitive
// g - global search

// console.log(re); // ==> /hello/
// console.log(re.source()); // ==> hello

//^ exex() - Return result in array or null
// const resEx = re.exec('hello world');
// console.log(resEx); //["hello", index: 0, input: "hello world", groups: undefined]

//^ test() - Returns true or false
// const resEx = re.test('Hello');
// console.log(resEx); // Hello - false, hello - true

//^ match() - Returns result array or null
// const strEx = 'hello there';
// const resEx = strEx.match(re);
// console.log(resEx); // ["hello", index: 0, input: "hello there", groups: undefined]

//^ search() - Returns index of the first match if not found returns -1
// const strEx = 'hello there';
// const resEx = strEx.search(re);
// console.log(resEx); // 0

//^ replace() - Returns new string with some or all matches of a pattern
// const strEx = 'hello there';
// const resEx = strEx.replace(re, 'Hi');
// console.log(resEx); // Hi there

//*================================
let re;
// Literal characters
re = /hello/;

// Metacharacter Symbols
re = /^h/i; // '^' Must start with h and casesensetive
re = /d$/; // '$' Must ends with d
re = /^hello$/; // Must begin and end with hello
re = /h.llo/; // Matches any ONE character
re = /h*llo/i; // Matches any character 0 or more times
re = /gre?a?y/i; // Optional character
re = /gre?a?y\?/i; // Escape character

// Brackets [] - Character Sets
re = /gr[ae]y/i; // Must be an a or e
re = /[GF]ray/; // Must be a G or F
re = /[^GF]ray/; // Match anything exept a G or F
re = /[A-Z]ray/; // Match any uppercase letter
re = /[A-Za-z]ray/; // Match any letter
re = /[0-9]ray/; // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i;

// Paretheses () - Grouping
re = /([0-9]x){3}/;

// Shorthand character classes
re = /\w/; // word character - alphanumeric or _
re = /\w+/; // + = one ore more
re = /\W/; // Non-word character
re = /\d/; // match any digit
re = /\D/; // Match any Non-digit
re = /\s/; // Match whitespace char
re = /\S/; // Match Non-whitespace char

// Assertions
re = /x(?=y)/; // Match x only if followed by y

// String to match
const strEx = 'Hello'; // Must occur exacly {m} amount of times

// Log result
const resEx = re.exec(strEx);
// console.log(resEx);

const regEx = function () {
  if (re.test(strEx)) {
    console.log(`${strEx} matches ${re.source}`);
  } else {
    console.log(`${strEx} does NOT match ${re.source}`);
  }
};

// regEx(re, strEx);
