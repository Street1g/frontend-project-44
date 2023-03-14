import brainGame from '../index.js';
import getRandomInRange from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const makeRound = () => {
  const question = getRandomInRange(2, 100);
  const correctAnswer = checkPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  brainGame(rules, makeRound);
};
