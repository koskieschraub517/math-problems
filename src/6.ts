function getRandomNumber(max: number): number {
  return Math.floor(Math.random() * max) + 1;
}

function generateMathProblems(): { problem: string, solution: number }[] {
  const problems = [];
  for (let i = 0; i < 10; i++) {
    const randomNumber1 = getRandomNumber(10);
    const randomNumber2 = getRandomNumber(10);
    const problem = `What is ${randomNumber1} x ${randomNumber2}`;
    const solution = randomNumber1 * randomNumber2;
    problems.push({ problem, solution });
  }
  return problems;
}
