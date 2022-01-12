import getRandomNumber from '../getRandomNumber.js';

const isEven = (number) => (number % 2 === 0);

const evenGame = () => {
  const random = getRandomNumber();
  const expectedAnswer = isEven(random) ? 'yes' : 'no';
  const question = `Question: ${random}`;
  return [question, expectedAnswer];
};

export default evenGame;
