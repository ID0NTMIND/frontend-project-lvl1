import * as helpers from '../helpers.js';

const getCorrectAnswer = (leftPart, rightPart, sign) => {
  if (sign === '+') {
    return leftPart + rightPart;
  }
  if (sign === '-') {
    return leftPart - rightPart;
  }
  return leftPart * rightPart;
};

const maxRandomValue = 15;

const calc = () => {
  const leftNumber = helpers.getRandomNumber(maxRandomValue);
  const rightNumber = helpers.getRandomNumber(maxRandomValue);
  const exampleSign = helpers.getRandomSign(maxRandomValue);

  const task = 'What is the result of the expression?';
  const question = `Question: ${leftNumber} ${exampleSign} ${rightNumber}`;
  const correctAnswer = String(getCorrectAnswer(leftNumber, rightNumber, exampleSign));
  const output = [task, question, correctAnswer];
  return output;
};

export default calc;
