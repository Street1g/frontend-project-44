import brainGame from '../index.js';
import getRandomInRange from '../utils.js';

const rules = 'Find the greatest common divisor of given numbers.';

const greatestCommonDivisor = (num1, num2) => {
  if (num1 === 0 || num2 === 0) {
    return num1 + num2;
  }
  if (num1 > num2) {
    return greatestCommonDivisor(num1 - num2, num2);
  }
  return greatestCommonDivisor(num1, num2 - num1);
};

const makeRound = () => {
  const num1 = getRandomInRange(0, 50);
  const num2 = getRandomInRange(0, 50);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(greatestCommonDivisor(num1, num2));

  return [question, correctAnswer];
};

export default () => {
  brainGame(rules, makeRound);
};
