a = [10, 9, 8, 7];

s = 0;
a.forEach((e, i) => {
  if (i == 2) {
    console.log(s);
  }
  if (i >= 2) {
    console.log(a[i]);
  } else {
    s += e;
  }
});

newArr = a.map(e => {
  if (typeof e == "function") {
    return e;
  } else {
    return "none";
  }
});

t = a.reduce((accumulator, currentValue, index) => {
  console.log("acc=", accumulator, "curr=", currentValue, "index=", index);
  return accumulator + currentValue + ""; //return to accumulate
}, "");
console.log(t);

res = a.filter(e => e <= 9);

// console.log(res);

a.pop();
console.log(a);
a.shift(); //dequeue
console.log(a);
a.unshift(0); //enqueue
console.log(a);

arr = [34, 1, 23, 45];
arr.sort();

console.log(arr);
arr.reverse()
console.log(arr)
