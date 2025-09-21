'use strict';

let savedScore = Number(document.querySelector('.highscore').textContent);
let numbertoGuess = Math.trunc(Math.random() * 20) + 1;
let userScore = Number((document.querySelector('.score').textContent = 20));

document.querySelector('.check').addEventListener('click', function () {
  const userNumber = Number(document.querySelector('.guess').value);
  const message = document.querySelector('.message');
  const body = document.querySelector('body');

  if (userNumber === numbertoGuess) {
    message.textContent = 'Correct!';
    body.style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = numbertoGuess;
    if (userScore > savedScore) {
      savedScore = userScore;
      document.querySelector('.highscore').textContent = savedScore;
    }
  } else if (userScore > 1) {
    message.textContent = userNumber > numbertoGuess ? 'Too High' : 'Two Low';
    userScore--;
    document.querySelector('.score').textContent = userScore;
  } else {
    message.textContent = 'Game Over!';
    body.style.backgroundColor = '#708090';
    document.querySelector('.score').textContent = 0;
    document.querySelector('.number').textContent = numbertoGuess;
  }
});
document.querySelector('.again').addEventListener('click', function () {
  // Regenerate the number
  numbertoGuess = Math.trunc(Math.random() * 20) + 1;

  // Reset score and UI
  userScore = 20;
  document.querySelector('.score').textContent = userScore;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
});
