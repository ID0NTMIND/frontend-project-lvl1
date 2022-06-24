import readLineSync from 'readline-sync';

const getRandomNumber = (size = 100) => {
  const randomNumber = Math.round(Math.random() * size);
  return randomNumber;
};

const getRandomSign = () => {
  const signArray = ['+', '-', '*'];
  const randomNumber = Math.floor(Math.random() * 3);
  return signArray[randomNumber];
};

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readLineSync.question('May I have your name? ');
  console.log((`Hello, ${userName}!`));
  return userName;
};

export { getRandomNumber, greeting, getRandomSign };
