import brainGame from '../index.js';

const rules = 'What number is missing in the progression?';

const randomNumber = (min, max) => {
  const number = Math.floor(Math.random() * (max - min) + min);
  return number;
};

const progressionQuestion = () => {
  const progression = [];
  let progressionNumber = randomNumber(0, 100);
  const progressionStep = randomNumber(1, 10);
  for (let i = 0; i < 10; i += 1) {
    progression.push(progressionNumber);
    progressionNumber += progressionStep;
  }
  return progression;
};

const makeRound = () => {
  const progression = progressionQuestion();
  const randomIndex = randomNumber(0, 10);
  const correctAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression;

  return [question, correctAnswer];
};

export default () => {
  brainGame(rules, makeRound);
};
