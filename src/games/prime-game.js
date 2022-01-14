import getRandomNumber from '../getRandomNumber.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const primeGame = () => {
  const randomNumber = getRandomNumber(1, 30);
  const expectedAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  const question = `Question: ${randomNumber}`;
  return [question, expectedAnswer];
};

export default primeGame;
