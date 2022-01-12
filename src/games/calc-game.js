import getRandomNumber from '../getRandomNumber.js';

const calculate = (operator, num1, num2) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = (num1 + num2);
      break;
    case '-':
      result = (num1 - num2);
      break;
    default:
      result = (num1 * num2);
      break;
  }
  return result;
};

const calcGame = () => {
  const operators = ['+', '-', '*'];
  const randomNum1 = getRandomNumber();
  const randomNum2 = getRandomNumber();
  const randomOperator = operators[getRandomNumber(0, 2)];
  const expectedAnswer = calculate(randomOperator, randomNum1, randomNum2);
  const question = `Question: ${randomNum1} ${randomOperator} ${randomNum2}`;
  return [question, String(expectedAnswer)];
};

export default calcGame;
