import getRandomNumber from '../getRandomNumber.js';

const gcd = (num1, num2) => {
  if (num2) {
    return gcd(num2, num1 % num2);
  }
  return Math.abs(num1);
};

const gcdGame = () => {
  const randomNum1 = getRandomNumber();
  const randomNum2 = getRandomNumber();
  const expectedAnswer = gcd(randomNum1, randomNum2);
  console.log(`${randomNum1} ${randomNum2}`);
  return String(expectedAnswer);
};

export default gcdGame;
