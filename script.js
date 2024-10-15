
'use strict';

document.querySelector('.check') = element

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// setValueNumber function
const setValueNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

// setValueScore function
const setValueScore = function (scoree) {
  document.querySelector('.score').textContent = scoree;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  

  //when there no output
  if (!guess) {
    displayMessage('⛔ No Number !!');
  }

  // when the player wins
  else if (guess === secretNumber) {
    setValueNumber(secretNumber);
    displayMessage('Correct Number 🎉!!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    // score > 1
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📉 Too High !!' : '📈 Too Low !!');
      score--;
      setValueScore(score);
    }

    // score < 1
    else {
      displayMessage('💥You Lost the game !!');
      setValueScore(0);
    }
  }


// when click on "again" button
document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing...');
  setValueScore(20);
  setValueNumber('?');
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  
});
