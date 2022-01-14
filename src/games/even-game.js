import getRandomNumber from '../getRandomNumber.js';

const isEven = (number) => (number % 2 === 0);

const evenGame = () => {
  const randomNumber = getRandomNumber();
  const expectedAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, expectedAnswer];
};

export default evenGame;
