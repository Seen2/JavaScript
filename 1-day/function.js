//classical

const greet = function(name) {
  console.log("hello,", name);
};

greet("Amalendu");

function greet1(name) {
  console.log("hello,", name);
}

greet1("Rohit");

//ES6 arrow func

const greet0 = name => {
  console.log("hello,", name);
};
greet0("Amal");
console.log(greet0);

const func = (greet0, name) => greet1 => {
  console.log("hello");
  greet0(name);
  greet1(name);
};
func(greet0, "amal")(greet1);
