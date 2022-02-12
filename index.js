'use strict';

const button = document.querySelector('.btn');
const inputs = document.querySelector('.inputs');
const p = document.querySelector('.p');

button.addEventListener('click', mergeURLs);

function mergeURLs() {
  p.textContent = inputs.value.split('\n').join('|');
}
