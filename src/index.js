import readlineSync from 'readline-sync';
import calcGame from './games/calc-game.js';
import evenGame from './games/even-game.js';
import gcdGame from './games/gcd-game.js';
import primeGame from './games/prime-game.js';
import progressionGame from './games/progression-game.js';

export const numberOfRounds = 3;

const runGame = (game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  let result = 0;
  let expectedAnswer = '';
  for (let i = 0; i < numberOfRounds; i += 1) {
    switch (game) {
      case 'calc-game':
        console.log('What is the result of the expression?');
        expectedAnswer = calcGame();
        break;
      case 'even-game':
        console.log('Answer "yes" if the number is even, otherwise answer "no".');
        expectedAnswer = evenGame();
        break;
      case 'gcd-game':
        console.log('Find the greatest common divisor of given numbers.');
        expectedAnswer = gcdGame();
        break;
      case 'prime-game':
        console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
        expectedAnswer = primeGame();
        break;
      case 'progression-game':
        console.log('What number is missing in the progression?');
        expectedAnswer = progressionGame();
        break;
      default:
        console.log('Please pick a game');
        break;
    }

    const answer = readlineSync.question('Your answer: ');
    if (answer === expectedAnswer) {
      console.log('Correct!');
      result += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was "${expectedAnswer}". \nLet's try again, ${name}!`);
      break;
    }
  }
  if (result === numberOfRounds) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default runGame;
