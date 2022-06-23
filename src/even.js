import readLineSync from 'readline-sync';

const getRandomNumber = () => {
  const randomNumber = Math.round(Math.random() * 100);
  return randomNumber;
};

const getCorrectAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const even = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readLineSync.question('May I have your name? ');
  console.log((`Hello, ${userName}!`));
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let countOfQuestion = 0; countOfQuestion < 3; countOfQuestion += 1) {
    const questionNumber = getRandomNumber();
    console.log(`Question: ${questionNumber}`);
    const userAnswer = readLineSync.question('Your answer:');
    const correctAnswer = getCorrectAnswer(questionNumber);
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

export default even;
