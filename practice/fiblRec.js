// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n) {
  //code here;
  a = 0;
  answer = 1;
  if (n == 1) {
    return 0;
  }
  if (n == 2) {
    return 1;
  }
  for (let i = 2; i < n; i++) {
    tmp = answer;
    answer += a;
    a = tmp;
  }
  return answer;
}

function fibonacciRecursive(n) {
  //code here;
  if (n == 1) {
    return 0;
  }
  if (n == 2) {
    return 1;
  }
  if (n > 2) {
    return fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1);
  } else {
    return "Something Wrong";
  }
}
// fibonacciIterative(10)
fibonacciRecursive(10);
