import {
  numberOfRounds, askQuestion, getAnswer, checkAnswer, greetUser,
  congratulateUser, onWrongAnswer, onRightAnswer, getRandomNumber,
} from '../index.js';

const gcd = (num1, num2) => {
  if (num2) {
    return gcd(num2, num1 % num2);
  }
  return Math.abs(num1);
};

const gcdGame = () => {
  const name = greetUser();
  let result = 0;
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < numberOfRounds; i += 1) {
    const randomNum1 = getRandomNumber();
    const randomNum2 = getRandomNumber();
    const expectedAnswer = gcd(randomNum1, randomNum2);
    askQuestion(`${randomNum1} ${randomNum2}`);
    const answer = Number(getAnswer());
    if (checkAnswer(answer, expectedAnswer)) {
      onRightAnswer();
      result += 1;
    } else {
      onWrongAnswer(answer, expectedAnswer);
      break;
    }
  }
  if (result === numberOfRounds) {
    congratulateUser(name);
  }
};

export default gcdGame;
