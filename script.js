'use strict';

/* Secret number */
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const disableInput = boolean => {
  document.querySelector('.your-number').disabled = boolean;
};

document.querySelector('.your-number').addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    document.querySelector('.check').click();
  }
});

document.querySelector('.check').addEventListener('click', () => {
  const value = document.querySelector('.your-number').value;
  const userNumber = Number(value);

  /* GAME LOGIC */

  /* When value is empty */
  if (value === '') {
    displayMessage('Please write a number');
    /* When the number is greater than 20 */
  } else if (userNumber > 20) {
    displayMessage('The number is greater than 20');
    /* When the number is less than 1 */
  } else if (userNumber < 1) {
    displayMessage('The number is less than 1');
    /* When the player wins */
  } else if (userNumber === secretNumber) {
    displayMessage('You got it!');

    document.querySelector('.number').textContent = secretNumber;
    disableInput(true);

    /* highscore logic  */
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    /* styles */
    document.querySelector('body').style.backgroundColor = '#50C878';
    document.querySelector('.number').style.width = '200px';
    /* When guess is wrong */
  } else if (userNumber !== secretNumber) {
    if (score > 1) {
      displayMessage(userNumber > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost!');
      document.querySelector('.score').textContent = 0;
      disableInput(true);

      /* styles */
      document.querySelector('body').style.backgroundColor = '#D22B2B';
    }
  }
});

/* RESET BUTTON LOGIC */
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('.score').textContent = score;
  displayMessage('Enter your guess!');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.your-number').value = '';
  disableInput(false);

  /* styles */
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '100px';
});
