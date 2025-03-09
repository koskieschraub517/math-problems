import { randomInt } from 'crypto';

function getRandomMathProblem(): string {
  const num1 = randomInt(1, 10);
  const num2 = randomInt(1, 10);
  return `What is ${num1} + ${num2}?`;
}
