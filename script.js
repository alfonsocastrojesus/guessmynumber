'use strict';
const savedScore = localStorage.getItem('highScore') || 0;
document.querySelector('.highscore').textContent = savedScore;

const numbertoGuess = Math.trunc(Math.random() * 20) + 1;
let userScore = Number((document.querySelector('.score').textContent = 20));
document.querySelector('.number').textContent = numbertoGuess;

document.querySelector('.check').addEventListener('click', function () {
  const userNumber = Number(document.querySelector('.guess').value);
  const message = document.querySelector('.message');
  const body = document.querySelector('body');
  const reset = document.querySelector('.again');

  if (userNumber === numbertoGuess) {
    message.textContent = 'Correct!';

    body.style.backgroundColor = '#60b347';
    if (userScore > savedScore) {
      localStorage.setItem('highScore', userScore);
      document.querySelector('.highscore').textContent = userScore;
    }
    reset.addEventListener('click', function () {
      location.reload();
    });
  } else if ((numbertoGuess > userNumber) & (userScore > 1)) {
    message.textContent = 'Too Low!';
    userScore--;
    document.querySelector('.score').textContent = userScore;
  } else if ((numbertoGuess < userNumber) & (userScore > 1)) {
    message.textContent = 'Too High!';
    userScore--;
    document.querySelector('.score').textContent = userScore;
  } else {
    document.querySelector('.score').textContent = 'game over';
    body.style.backgroundColor = '#FFE4E1';
    reset.addEventListener('click', function () {
      location.reload();
    });
  }
});
