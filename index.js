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

  for (const clean of inputValueArr) {
    arr.push(
      clean
        .substring(clean.indexOf('z') + 1)
        .split('#'[0])
        .slice(0, 1)
    );
  }

  p.textContent = arr.join('|');
}

/* ------NEXT------
        
// Need to clean code for other TLD - .com, .co.uk.....
// Need to add the () around the finished project
        


*/
