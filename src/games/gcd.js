import * as helpers from '../helpers.js';

const getCorrectAnswer = (first, second) => {
  if (second > first) return getCorrectAnswer(second, first);
  if (!second) return first;
  return getCorrectAnswer(second, first % second);
};

const gcd = () => {
  const task = 'Find the greatest common divisor of given numbers.';
  const firstNumber = helpers.getRandomNumber();
  const secondNumber = helpers.getRandomNumber();
  const question = `Question: ${firstNumber} ${secondNumber}`;
  const correctAnswer = String(getCorrectAnswer(firstNumber, secondNumber));
  const output = [task, question, correctAnswer];

  return output;
};

export default gcd;
