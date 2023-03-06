import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const randomNumber = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  return number;
};

const checkEven = () => {
  const answerArr = ['yes', 'no'];
  const playerName = greeting();
  for (let i = 0; i < 3; i += 1) {
    const number = randomNumber();
    const playerAnswer = readlineSync.question(`Question: ${number}\nYour answer: `);
    const reverseAnswer = (playerAnswer === answerArr[0] ? answerArr[1] : answerArr[0]);
    if ((number % 2 === 0 && playerAnswer === answerArr[0]) || (number % 2 !== 0 && playerAnswer === answerArr[1])) {
      console.log('Correct!');
    } else {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${reverseAnswer}\nLet's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

export default checkEven();
