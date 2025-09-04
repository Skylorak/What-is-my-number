'use strict';

/* Secret number */
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
console.log('Secret number:', secretNumber);

document.querySelector('.check').addEventListener('click', () => {
  const value = document.querySelector('.your-number').value;
  const userNumber = Number(value);

  /* GAME LOGIC */

  /* When value is empty */
  if (value === '') {
    document.querySelector('.message').textContent = 'Please write a number';
    /* When the number is greater than 20 */
  } else if (userNumber > 20) {
    document.querySelector('.message').textContent =
      'The number is greater than 20';
    /* When the number is less than 1 */
  } else if (userNumber < 1) {
    document.querySelector('.message').textContent =
      'The number is less than 1';
    /* When the player wins */
  } else if (userNumber === secretNumber) {
    document.querySelector('.message').textContent = 'You got it!';

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.your-number').disabled = true;

    /* highscore logic  */
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    /* styles */
    document.querySelector('body').style.backgroundColor = '#50C878';
    document.querySelector('.number').style.width = '200px';
    /* When the number is too high */
  } else if (userNumber > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.your-number').disabled = true;

      /* styles */
      document.querySelector('body').style.backgroundColor = '#D22B2B';
    }
    /* When the number is too low */
  } else if (userNumber < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.your-number').disabled = true;
      document.querySelector('body').style.backgroundColor = '#D22B2B';
    }
  }
});

/* RESET BUTTON LOGIC */
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  console.log('Secret number:', secretNumber);

  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Enter your guess!';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.your-number').value = '';
  document.querySelector('.your-number').disabled = false;
  /* styles */
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '100px';
});
