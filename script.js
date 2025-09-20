'use strict';
const numbertoGuess = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = numbertoGuess;

document.querySelector('.check').addEventListener('click', function () {
  const userNumber = Number(document.querySelector('.guess').value);

  const message = document.querySelector('.message');
  const body = document.querySelector('body');
  const reset = document.querySelector('.again');

  if (numbertoGuess > userNumber) {
    message.textContent = 'Too Low!';
  } else if (numbertoGuess < userNumber) {
    message.textContent = 'Too High!';
  } else {
    message.textContent = 'Correct!';
    body.style.backgroundColor = '#60b347';
    reset.addEventListener('click', function () {
      location.reload();
    });
  }
});
