import {
  numberOfRounds, askQuestion, getAnswer, checkAnswer,
  greetUser, congratulateUser, onWrongAnswer, onRightAnswer, getRandomNumber,
} from '../index.js';

const calcGame = () => {
  const name = greetUser();
  let result = 0;
  const operators = ['+', '-', '*'];
  console.log('What is the result of the expression?');
  for (let i = 0; i < numberOfRounds; i += 1) {
    const randomNum1 = getRandomNumber();
    const randomNum2 = getRandomNumber();
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];
    let expectedAnswer = 0;
    switch (randomOperator) {
      case '+':
        expectedAnswer = (randomNum1 + randomNum2);
        break;
      case '-':
        expectedAnswer = (randomNum1 - randomNum2);
        break;
      default:
        expectedAnswer = (randomNum1 * randomNum2);
        break;
    }
    const question = `${randomNum1} ${randomOperator} ${randomNum2}`;
    askQuestion(question);
    const answer = Number(getAnswer());
    if (checkAnswer(answer, expectedAnswer)) {
      onRightAnswer();
      result += 1;
    } else {
      onWrongAnswer(answer, expectedAnswer, name);
      break;
    }
  }
  if (result === numberOfRounds) {
    congratulateUser(name);
  }
};

export default calcGame;
