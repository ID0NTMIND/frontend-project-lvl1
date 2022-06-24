import * as helpers from '../helpers.js';

const getCorrectAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const even = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  const questionNumber = helpers.getRandomNumber();
  const question = `Question: ${questionNumber}`;
  const correctAnswer = getCorrectAnswer(questionNumber);
  const output = [task, question, correctAnswer];

  return output;
};

export default even;
