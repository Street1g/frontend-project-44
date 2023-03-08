import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

const randomNumber = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  return number;
};

const checkEven = () => {
  const playerName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = randomNumber();
    const correctAnswer = (number % 2 === 0 ? 'yes' : 'no');
    const playerAnswer = readlineSync.question(`Question: ${number}\nYour answer: `);
    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}\nLet's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

export default checkEven;
