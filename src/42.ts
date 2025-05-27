function sumSquareDifference(nums: number[]): number {
  let sum = 0;
  let squareSum = 0;

  nums.forEach((num) => {
    sum += num * num;
    squareSum += num * num;
  });

  return Math.abs(sum - squareSum);
}

// Example usage:
const numbers = [1, 2, 3, 4];
console.log(sumSquareDifference(numbers)); // Output: 5
