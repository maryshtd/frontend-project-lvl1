import {
  numberOfRounds, askQuestion, getAnswer, checkAnswer, greetUser,
  congratulateUser, onWrongAnswer, onRightAnswer,
} from '../index.js';

const evenGame = () => {
  const name = greetUser();
  let result = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < numberOfRounds; i += 1) {
    const random = Math.floor(Math.random() * 10) + 1;
    const expectedAnswer = random % 2 === 0 ? 'yes' : 'no';
    askQuestion(random);
    const answer = getAnswer();
    if (checkAnswer(answer, expectedAnswer)) {
      onRightAnswer();
      result += 1;
    } else {
      onWrongAnswer(answer, expectedAnswer);
    }
  }
  if (result === numberOfRounds) {
    congratulateUser(name);
  }
};

export default evenGame;
