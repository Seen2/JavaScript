// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  //code here
  if (number == 1 || number == 0) {
    return 1;
  } else {
    return number * findFactorialRecursive(number - 1);
  }
}

function findFactorialIterative(number) {
  //code here
  if (number == 0) {
    answer = 1;
  }
  answer = 1;
  for (let i = 1; i <= number; i++) {
    answer *= i;
  }
  return answer;
}
console.log(findFactorialIterative(10));
console.log(findFactorialRecursive(10));
