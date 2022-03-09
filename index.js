'use strict';

const button = document.querySelector('.btn');
const inputField = document.querySelector('.inputs');
const p = document.querySelector('.p');

button.addEventListener('click', mergeURLs);

window.addEventListener('keypress', function (event) {
  if (event.keyCode === 13) {
    mergeURLs();
    event.preventDefault();
  }
});

function mergeURLs() {
  let inputValueArr = inputField.value.split('\n');
  let arr = [];
  let com = '.com';
  let questionMark = '?';

  
if (inputField.value.includes(questionMark)) {
  if (inputField.value.includes(com)) {
    for (const clean of inputValueArr) {
      arr.push(
        clean
          .substring(clean.indexOf('.com') + 4)
          .split('?'[0])
          .slice(0, 1)
      );
    }
  } else {
    for (const clean of inputValueArr) {
      arr.push(
        clean
          .substring(clean.indexOf('.xyz') + 4)
          .split('?'[0])
          .slice(0, 1)
      );
    }
  }
} else {
  if (inputField.value.includes(com)) {
    for (const clean of inputValueArr) {
      arr.push(
        clean
          .substring(clean.indexOf('.com') + 4)
          .split('#'[0])
          .slice(0, 1)
      );
    }
  } else {
    for (const clean of inputValueArr) {
      arr.push(
        clean
          .substring(clean.indexOf('.xyz') + 4)
          .split('#'[0])
          .slice(0, 1)
      );
    }
  }
}

p.textContent = `(${arr.join('|')})`;
console.log(`(${arr.join('|')})`.length);
}

/* ------NEXT------
        
// Need to clean code for other TLD - .com, .co.uk.....
// Need to add the () around the finished project
        


*/
