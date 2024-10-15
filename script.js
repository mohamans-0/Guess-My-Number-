'use strict';

/*
// (querySelector) method in object (document)

// to get the content of the element
console.log(document.querySelector('.message').textContent);

// to set the content of the element
document.querySelector('.message').textContent = 'Correct Number 🎉!!';
console.log(document.querySelector('.message').textContent);

// set the new value of element has the '.number' class
document.querySelector('.number').textContent = 13;
// set the new value of element has the '.score' class
document.querySelector('.score').textContent = 10;

//console.log(document.querySelector('.guess').value);

// set the new value for input 'button' has the class '.guess'
document.querySelector('.guess').value = 55;
console.log(document.querySelector('.guess').value);

*/

/*




1- select the button element using the class 
2- add the addEventListener method , has two arguements the first name of event and the second the event handler    
3- create a function to event handler (function expression ) and we pass it directly to addEventListener

*** 'click' is the name of event 
*** the JS will call the function , we didn't call the function but we declare it , the function will be called when the program execute
document.querySelector('.check') = element

element.method

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// displayMessage function
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

  //   console.log(typeof guess);

  //when there no output
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number !!';
    displayMessage('⛔ No Number !!');
  }

  // when the player wins
  else if (guess === secretNumber) {
    // document.querySelector('.number').textContent = secretNumber;
    setValueNumber(secretNumber);
    // document.querySelector('.message').textContent = 'Correct Number 🎉!!';
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
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? '📉 Too High !!' : '📈 Too Low !!';
      displayMessage(guess > secretNumber ? '📉 Too High !!' : '📈 Too Low !!');
      score--;
      // document.querySelector('.score').textContent = score;
      setValueScore(score);
    }

    // score < 1
    else {
      // document.querySelector('.message').textContent = '💥You Lost the game !!';
      displayMessage('💥You Lost the game !!');
      // document.querySelector('.score').textContent = 0;
      setValueScore(0);
    }
  }

  // when guess is too high
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉 Too High !!';
  //       document.querySelector('.score').textContent = --score;
  //     } else {
  //       document.querySelector('.message').textContent = '💥You Lost the game !!';
  //       document.querySelector('.score').textContent = 0;
  //     }

  //     // when guess is too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📈 Too Low !!';
  //       document.querySelector('.score').textContent = --score;
  //     } else {
  //       document.querySelector('.message').textContent = '💥You Lost the game !!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

// when click on "again" button
document.querySelector('.again').addEventListener('click', function () {
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');

  // document.querySelector('.score').textContent = 20;
  setValueScore(20);
  // document.querySelector('.number').textContent = '?';
  setValueNumber('?');
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  //
});
