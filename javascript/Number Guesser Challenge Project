let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);

const getAbsoluteDistance = (x, y) => Math.abs(x - y);
const compareGuesses = (userGuess, computerGuess, targetNumber) => {
  if(userGuess < 0 || userGuess > 9) {
    alert('Your guess is out of range!');
  }
  if(getAbsoluteDistance(userGuess, targetNumber) <= getAbsoluteDistance(computerGuess, targetNumber)) {
    return true;
  } else {
    return false;
  }
}

const updateScore = winner => {
  if(winner === 'human') {
    humanScore++;
  } else if(winner === 'computer') {
    computerScore++;
  }
}

const advanceRound = () => currentRoundNumber++;
