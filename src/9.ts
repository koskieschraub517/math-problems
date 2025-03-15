
import { getRandomInt } from "./utils";

export const add = (a: number, b: number): number => a + b;
export const subtract = (a: number, b: number): number => a - b;
export const multiply = (a: number, b: number): number => a * b;
export const divide = (a: number, b: number): number => a / b;

export const getProblems = (count: number): Problem[] => {
  const problems: Problem[] = [];
  for (let i = 0; i < count; i++) {
    const operation = getRandomInt(0, 4);
    let a = getRandomInt(1, 10);
    let b = getRandomInt(1, 10);
    if (operation === 3) {
      b = 0;
    }
    problems.push({ operation, a, b });
  }
  return problems;
};

export const checkAnswer = (problem: Problem, answer: number): boolean => {
  let result = false;
  switch (problem.operation) {
    case 0:
      result = problem.a + problem.b === answer;
      break;
    case 1:
      result = problem.a - problem.b === answer;
      break;
    case 2:
      result = problem.a * problem.b === answer;
      break;
    case 3:
      result = problem.a / problem.b === answer;
      break;
  }
  return result;
};