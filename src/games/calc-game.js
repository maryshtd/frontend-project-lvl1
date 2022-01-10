import getRandomNumber from '../getRandomNumber.js';

const calcGame = () => {
  const operators = ['+', '-', '*'];
  const randomNum1 = getRandomNumber();
  const randomNum2 = getRandomNumber();
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  let expectedAnswer = 0;
  switch (randomOperator) {
    case '+':
      expectedAnswer = (randomNum1 + randomNum2);
      break;
    case '-':
      expectedAnswer = (randomNum1 - randomNum2);
      break;
    default:
      expectedAnswer = (randomNum1 * randomNum2);
      break;
  }
  const question = `${randomNum1} ${randomOperator} ${randomNum2}`;
  console.log(`Question: ${question}`);
  return String(expectedAnswer);
};

export default calcGame;
