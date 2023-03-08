import brainGame from '../index.js';

const elements = ['+', '-', '*'];

const randomNumber = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  return number;
};

console.log('What is the result of the expression?');

const arrayRandomElement = (arrElements) => {
  const randomElement = Math.floor(Math.random() * arrElements.length);
  return randomElement;
};

const calculate = (num1, num2, element) => {
  switch (element) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: return null;
  }
};

const gameCalc = () => {
  const randomElement = arrayRandomElement(elements);
  const num1 = randomNumber();
  const num2 = randomNumber();
  const question = `${num1} ${randomElement} ${num2}`;
  const correctAnswer = String(calculate(num1, num2, randomElement));
  return [question, correctAnswer];
};

export default brainGame();
