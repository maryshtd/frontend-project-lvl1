import {
  numberOfRounds, askQuestion, getAnswer, checkAnswer, greetUser,
  congratulateUser, onWrongAnswer, onRightAnswer, getRandomNumber,
} from '../index.js';

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
  const name = greetUser();
  let result = 0;
  console.log('What number is missing in the progression?');
  for (let i = 0; i < numberOfRounds; i += 1) {
    const progression = generateProgression();
    const randomIndex = getRandomNumber(1, 10);
    const progressionQuestion = progression.slice();
    progressionQuestion[randomIndex] = '..';
    const expectedAnswer = progression[randomIndex];
    askQuestion(progressionQuestion.join(' '));
    const answer = Number(getAnswer());
    if (checkAnswer(answer, expectedAnswer)) {
      onRightAnswer();
      result += 1;
    } else {
      onWrongAnswer(answer, expectedAnswer);
      break;
    }
  }
  if (result === numberOfRounds) {
    congratulateUser(name);
  }
};

export default progressionGame;
