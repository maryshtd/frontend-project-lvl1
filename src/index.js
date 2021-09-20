import readlineSync from 'readline-sync';

export const numberOfRounds = 3;

export const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const askQuestion = (question) => {
  console.log(`Question: ${question}`);
};

export const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const checkAnswer = (actualAnswer, expectedAnswer) => {
  if (actualAnswer === expectedAnswer) {
    return true;
  }
  return false;
};

export const congratulateUser = (name) => {
  console.log(`Congratulations, ${name}!`);
};

export const onWrongAnswer = (actualAnswer, expectedAnswer) => {
  console.log(`${actualAnswer} is wrong answer ;(. Correct answer was "${expectedAnswer}". \nLet's try again!`);
};

export const onRightAnswer = () => {
  console.log('Correct!');
};
