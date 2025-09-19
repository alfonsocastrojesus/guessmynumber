'use strict';
const numberA = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = numberA;

document.querySelector('.check').addEventListener('click', function () {
  const guessA = Number(document.querySelector('.guess').value);
  if (guessA === numberA) {
    document.querySelector('.message').textContent = 'correct';
  } else {
    document.querySelector('.message').textContent = 'Incorrect';
  }
});
