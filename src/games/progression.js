import * as helpers from '../helpers.js';

const progressionLength = 10;

const getQuestion = (array, positionIndex) => {
  const output = array.map((item, index) => {
    if (index === positionIndex) {
      return '..';
    }
    return item;
  }).join(' ').trim();
  return output;
};

const getCorrectAnswer = (array, positionIndex) => String(array[positionIndex]);

const progression = () => {
  const task = 'What number is missing in the progression?';
  const firstProgressionItem = helpers.getRandomNumber(100);
  const stepOfProgression = helpers.getRandomNumber(10) + 1;
  const lastProgressionItem = firstProgressionItem + stepOfProgression * progressionLength;

  let progressionItems = [];
  // Заполнение массива прогрессии.
  for (let index = firstProgressionItem; index < lastProgressionItem; index += stepOfProgression) {
    progressionItems = [...progressionItems, index];
  }

  const questionPosition = helpers.getRandomNumber(progressionLength - 1);
  const questionString = getQuestion(progressionItems, questionPosition);
  const question = `Question: ${questionString}`;
  const correctAnswer = getCorrectAnswer(progressionItems, questionPosition);
  const output = [task, question, correctAnswer];

  return output;
};

export default progression;
