'use strict';

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 29;

document.querySelector('.your-number').value = 23;

console.log(document.querySelector('.your-number').value);
 */

/* Our secret number */
let secretNumber = Math.trunc(Math.random() * 20 + 1);

/* Our score */
let score = 20;

/* The game */
document.querySelector('.check').addEventListener('click', () => {
  let guess = Number(document.querySelector('.your-number').value);

  if (!guess) {
    /* First scenario (When there is no input)*/
    document.querySelector('.message').textContent = 'Please enter a number!';
  } else if (guess === secretNumber) {
    /* Second scenario (When the player wins)*/
    document.querySelector('.message').textContent = 'Correct Number!';

    document.querySelector('.number').textContent = secretNumber;

    /* styles */
    document.querySelector('body').style.backgroundColor = '#90EE90';
    document.querySelector('.number').style.width = '200px';
  } else if (guess > secretNumber) {
    if (score > 1) {
      /* Third scenario (When guess is too high)*/
      document.querySelector('.message').textContent = 'Too high!';

      score--;

      document.querySelector('.score').textContent = score;
    } else {
      /* Fifth scenario */
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      //* Fourth scenario When guess is too low)*/
      document.querySelector('.message').textContent = 'Too low!';

      score--;

      document.querySelector('.score').textContent = score;
    } else {
      /* Fifth scenario (When the player lost)*/
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

/* Reset button */
document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('.number').textContent = '?';

  document.querySelector('.your-number').value = '';

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;

  /* styles */
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '100px';
});
