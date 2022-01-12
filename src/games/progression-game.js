import getRandomNumber from '../getRandomNumber.js';

const generateProgression = (beginning, increase) => {
  const array = [];
  array.push(beginning);
  for (let i = 1; i < 10; i += 1) {
    const newNumber = array[i - 1] + increase;
    array.push(newNumber);
  }
  return array;
};

const progressionGame = () => {
  const randomBeginning = getRandomNumber(1, 10);
  const randomIncrease = getRandomNumber(1, 10);
  const progression = generateProgression(randomBeginning, randomIncrease);
  const randomIndex = getRandomNumber(0, 9);
  const progressionQuestion = progression.slice();
  progressionQuestion[randomIndex] = '..';
  const expectedAnswer = progression[randomIndex];
  const progressionJoined = progressionQuestion.join(' ');
  const question = `Question: ${progressionJoined}`;
  return [question, String(expectedAnswer)];
};

export default progressionGame;
