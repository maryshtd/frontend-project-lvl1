import getRandomNumber from '../getRandomNumber.js';

export const progressionLength = 10;

const generateProgression = (beginning, increase) => {
  const progression = [];
  for (let i = 0; i <= progressionLength; i += 1) {
    const newNumber = beginning + (increase * i);
    progression.push(newNumber);
  }
  const randomIndex = getRandomNumber(0, progressionLength - 1);
  const expectedAnswer = progression[randomIndex];
  progression[randomIndex] = '..';
  const progressionString = progression.join(' ');
  return [progressionString, expectedAnswer];
};

const progressionGame = () => {
  const randomBeginning = getRandomNumber(1, 10);
  const randomIncrease = getRandomNumber(1, 10);
  const [progression, expectedAnswer] = generateProgression(randomBeginning, randomIncrease);
  return [progression, String(expectedAnswer)];
};

export default progressionGame;
