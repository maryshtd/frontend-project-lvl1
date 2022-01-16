import getRandomNumber from '../getRandomNumber.js';

export const progressionLength = 10;

const generateProgression = (beginning, increase, missingIndex) => {
  const progression = [];
  for (let i = 0; i <= progressionLength; i += 1) {
    progression.push(beginning + (increase * i));
  }
  progression[missingIndex] = '..';
  const progressionString = progression.join(' ');
  return progressionString;
};

const progressionGame = () => {
  const randomBeginning = getRandomNumber(1, 10);
  const randomIncrease = getRandomNumber(1, 10);
  const randomIndex = getRandomNumber(0, progressionLength - 1);
  const progression = generateProgression(randomBeginning, randomIncrease, randomIndex);
  const expectedAnswer = randomBeginning + (randomIncrease * randomIndex);
  return [progression, String(expectedAnswer)];
};

export default progressionGame;
