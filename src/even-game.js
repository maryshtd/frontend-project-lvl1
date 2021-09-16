import readlineSync from 'readline-sync';

const evenGame = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  let result = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const random = Math.floor(Math.random() * 10) + 1;
    console.log(`Question: ${random}`);
    const answer = readlineSync.question('Your answer: ');
    if ((random % 2 === 0 && answer === 'yes') || (random % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
      result += 1;
    } else if (random % 2 === 0 && answer !== 'yes') {
      console.log(`${answer} is wrong answer ;(. Correct answer was "yes". \n Let's try again!"`);
    } else if (random % 2 !== 0 && answer !== 'no') {
      console.log(`${answer} is wrong answer ;(. Correct answer was "no". \n Let's try again!"`);
    }
  }
  if (result === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default evenGame;
