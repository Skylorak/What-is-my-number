'use strict';

/* Our secret number */
let secretNumber = Math.trunc(Math.random() * 20 + 1);

/* Our score */
let score = 20;

/* Our highscore */
let highscore = 0;

/* The game */
document.querySelector('.check').addEventListener('click', () => {
  let guess = Number(document.querySelector('.your-number').value);

  if (!guess) {
    /* When there is no input*/
    document.querySelector('.message').textContent = 'Please enter a number!';
  } else if (guess > 20) {
    /* When the number is greater than 20 */
    document.querySelector('.message').textContent =
      'Number is greater than 20';
  } else if (guess < 1) {
    /* When the number is less than 1 */
    document.querySelector('.message').textContent = 'Number is less than 1';
  } else if (guess === secretNumber) {
    /* When the player wins*/
    document.querySelector('.message').textContent = 'Correct Number!';

    document.querySelector('.number').textContent = secretNumber;

    /* highscore logic  */
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    /* styles */
    document.querySelector('body').style.backgroundColor = '#90EE90';
    document.querySelector('.number').style.width = '200px';
  } else if (guess > secretNumber) {
    if (score > 1) {
      /* When guess is too high*/
      document.querySelector('.message').textContent = 'Too high!';

      score--;

      document.querySelector('.score').textContent = score;
    } else {
      /* When the player lost */
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      //* When guess is too low*/
      document.querySelector('.message').textContent = 'Too low!';

      score--;

      document.querySelector('.score').textContent = score;
    } else {
      /* When the player lost*/
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

/* Reset button */
document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.number').textContent = '?';

  document.querySelector('.your-number').value = '';

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;

  /* styles */
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '100px';
});
