import getRandomNumber from '../getRandomNumber.js';

const evenGame = () => {
  const random = getRandomNumber();
  const expectedAnswer = random % 2 === 0 ? 'yes' : 'no';
  console.log(random);
  return expectedAnswer;
};

export default evenGame;
