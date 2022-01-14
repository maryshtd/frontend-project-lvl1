import getRandomNumber from '../getRandomNumber.js';

const gcd = (num1, num2) => {
  if (num2) {
    return gcd(num2, num1 % num2);
  }
  return Math.abs(num1);
};

const gcdGame = () => {
  const randomNumber1 = getRandomNumber();
  const randomNumber2 = getRandomNumber();
  const expectedAnswer = gcd(randomNumber1, randomNumber2);
  const question = `${randomNumber1} ${randomNumber2}`;
  return [question, String(expectedAnswer)];
};

export default gcdGame;
