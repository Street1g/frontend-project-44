import brainGame from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const randomNumber = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  return number;
};

const makeRound = () => {
  const question = randomNumber();
  const correctAnswer = (question % 2 === 0 ? 'yes' : 'no');

  return [question, correctAnswer];
};

export default () => {
  brainGame(rules, makeRound);
};
