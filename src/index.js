import readLineSync from 'readline-sync';
// import * as helpers from '../helpers.js';

const countOfQuestion = 3;

const gameProcess = (gameFuntion) => {
  // Приветствие пользователя, получение его имени.
  console.log('Welcome to the Brain Games!');
  const userName = readLineSync.question('May I have your name? ');
  console.log((`Hello, ${userName}!`));

  // получение условий игры.
  const gameTask = gameFuntion()[0];
  console.log(gameTask);

  // игровой процесс.
  for (let indexOfQuestion = 0; indexOfQuestion < countOfQuestion; indexOfQuestion += 1) {
    const gameValues = gameFuntion();
    const questionValue = gameValues[1];
    console.log(questionValue);
    const correctAnswer = gameValues[2];
    const userAnswer = readLineSync.question('Your answer:');

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      const errorMessage = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
      console.log(errorMessage);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameProcess;
