import brainGame from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const randomNumber = () => {
  const number = Math.floor(Math.random() * 50) + 1;
  return number;
};

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
  const num1 = randomNumber();
  const num2 = randomNumber();
  const question = `${num1} ${num2}`;
  const correctAnswer = String(greatestCommonDivisor(num1, num2));

  return [question, correctAnswer];
};

export default () => {
  brainGame(rules, makeRound);
};
