'use strict';
const numbertoGuess = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = numbertoGuess;

document.querySelector('.check').addEventListener('click', function () {
  const userNumber = Number(document.querySelector('.guess').value);

  if (numbertoGuess === userNumber) {
    document.querySelector('.message').textContent = 'CORRECT!!';
  } else {
    document.querySelector('.message').textContent = 'incorrect!!';
  }
});
