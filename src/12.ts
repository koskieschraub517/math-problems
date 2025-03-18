// Random math problem
const getRandomProblem = () => {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  let op;

  if (num1 < num2) {
    [num1, num2] = [num2, num1];
  }

  switch (true) {
    case num1 > 5 && num2 > 5:
      op = '+';
      break;
    case num1 < 5 && num2 > 5:
      op = '-';
      break;
    case num1 < 5 && num2 < 5:
      op = '*';
      break;
    default:
      op = '/';
      break;
  }

  return `${num1} ${op} ${num2}`;
};
