import * as math from 'mathjs';

const generateMathProblem = () => {
  const numbers = [1, 2, 3, 4, 5];
  const operator = ['+', '-', '*', '/'];
  const problem = `${numbers[0]} ${operator[0]} ${numbers[1]}`;
  return problem;
};
