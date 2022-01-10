import getRandomNumber from '../getRandomNumber.js';

const generateProgression = () => {
  const randomBeginning = getRandomNumber(1, 10);
  const randomIncrease = getRandomNumber(1, 10);
  const array = [];
  array.push(randomBeginning);
  for (let i = 1; i < 10; i += 1) {
    const newNumber = array[i - 1] + randomIncrease;
    array.push(newNumber);
  }
  return array;
};

const progressionGame = () => {
  const progression = generateProgression();
  const randomIndex = getRandomNumber(0, 9);
  const progressionQuestion = progression.slice();
  progressionQuestion[randomIndex] = '..';
  const expectedAnswer = progression[randomIndex];
  const question = progressionQuestion.join(' ');
  console.log(`Question: ${question}`);
  return String(expectedAnswer);
};

export default progressionGame;
