import brainGame from '../index.js';
import getRandomInRange from '../utils.js';

const rules = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomInRange(0, operators.length - 1)];
};

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: throw new Error(`operator ${operator} - is incorrect!`);
  }
};

const makeRound = () => {
  const randomElement = getRandomOperator();
  const num1 = getRandomInRange(0, 10);
  const num2 = getRandomInRange(0, 10);
  const question = `${num1} ${randomElement} ${num2}`;
  const correctAnswer = String(calculate(num1, num2, randomElement));
  return [question, correctAnswer];
};

export default () => {
  brainGame(rules, makeRound);
};
