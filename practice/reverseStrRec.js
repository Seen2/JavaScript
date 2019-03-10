//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {
  if (str.length == 1 || str.length == 0) {
    return str;
  }
  return reverseString(str.slice(1)) + str[0];
}

reverseString("yoyo mastery");
//should return: 'yretsam oyoy'
