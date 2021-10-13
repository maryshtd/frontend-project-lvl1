import {
  numberOfRounds, askQuestion, getAnswer, checkAnswer, greetUser,
  congratulateUser, onWrongAnswer, onRightAnswer, getRandomNumber,
} from '../index.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const primeGame = () => {
  const name = greetUser();
  let result = 0;
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < numberOfRounds; i += 1) {
    const randomNum = getRandomNumber(1, 30);
    const expectedAnswer = isPrime(randomNum) ? 'yes' : 'no';
    askQuestion(randomNum);
    const answer = getAnswer();
    if (checkAnswer(answer, expectedAnswer)) {
      onRightAnswer();
      result += 1;
    } else {
      onWrongAnswer(answer, expectedAnswer, name);
      break;
    }
  }
  if (result === numberOfRounds) {
    congratulateUser(name);
  }
};

export default primeGame;
