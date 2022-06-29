import * as helpers from '../helpers.js';

const getCorrectAnswer = (number) => {
  let divisorsCount = 0;

  // Считаем количество делителей числа.
  for (let index = 1; index <= number; index += 1) {
    divisorsCount = number % index === 0 ? divisorsCount + 1 : divisorsCount;
  }
  if (divisorsCount === 2) {
    return 'yes';
  }
  return 'no';
};

const prime = () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const questionNumber = helpers.getRandomNumber();
  const correctAnswer = getCorrectAnswer(questionNumber);
  const question = helpers.getSimpleQuestion(questionNumber);
  const output = [task, question, correctAnswer];

  return output;
};

export default prime;
