import brainGame from '../index.js';
import getRandomInRange from '../utils.js';

const rules = 'What number is missing in the progression?';

const getProgression = (first, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(first + i * step);
  }
  return progression;
};

const makeRound = () => {
  const first = getRandomInRange(0, 100);
  const step = getRandomInRange(1, 9);
  const length = 10;
  const progression = getProgression(first, step, length);
  const correctAnswer = String(progression[step]);
  progression[step] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => {
  brainGame(rules, makeRound);
};
