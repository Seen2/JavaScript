function greet1(name) {
  console.log("hello,", name);
}

//ES6 arrow func
const greet0 = name => {
  console.log("hello,", name);
};
greet0("Amal");
console.log(greet0);

const func = (greet1, name) => greet0 => {
  console.log("hello");
  greet0(name);
  greet1(name);
};
func(greet0, "amal")(greet1);

let arr = [1, "Amalendu", greet0, func, [1, 2], { key: 1 }];
arr[2](arr[1]);

// arr.forEach(e => {
//   if (e == "Amalendu") {
//     console.log(e);
//   }
// });

console.log(newArr);
