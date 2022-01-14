import getRandomNumber from '../getRandomNumber.js';

export const operators = ['+', '-', '*'];

const calculate = (operator, num1, num2) => {
  switch (operator) {
    case '+':
      return (num1 + num2);
    case '-':
      return (num1 - num2);
    case '*':
      return (num1 * num2);
    default:
      throw new Error(`operation ${operator} is not supported`);
  }
};

const calcGame = () => {
  const randomNumber1 = getRandomNumber();
  const randomNumber2 = getRandomNumber();
  const randomOperator = operators[getRandomNumber(0, operators.length - 1)];
  const expectedAnswer = calculate(randomOperator, randomNumber1, randomNumber2);
  const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  return [question, String(expectedAnswer)];
};

export default calcGame;
