import readlineSync from 'readline-sync';

export const numberOfRounds = 3;

const runGame = (rule, gameFunc) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rule);
  let result = 0;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, expectedAnswer] = gameFunc();
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (answer === expectedAnswer) {
      console.log('Correct!');
      result += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was "${expectedAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (result === numberOfRounds) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default runGame;
