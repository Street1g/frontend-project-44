import brainGame from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const randomNumber = (min, max) => {
  const number = Math.floor(Math.random() * (max - min) + min);
  return number;
};

const checkPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const makeRound = () => {
  const question = randomNumber(2, 100);
  const correctAnswer = checkPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  brainGame(rules, makeRound);
};
