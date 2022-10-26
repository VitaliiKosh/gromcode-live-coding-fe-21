function getSenseOfLife() {
  return 42;
}
// option 1
const res = getSenseOfLife();
console.log(res);

// option 2
console.log(getSenseOfLife());

function getSquared(num) {
  // return num * num;
  return num ** 2;
}
// test data
console.log(getSquared(5)); // ==> 25
console.log(getSquared(0));
console.log(getSquared(-7));
console.log(getSquared("t"));
console.log(getSquared(undefined));

function sum(a, b) {
  return a + b;
}
// test data
console.log(sum(5, 7)); // ==> 12
console.log(sum(-7, 5));
console.log(sum("He", "llo"));

/*
function getMessage(age) {
  //  return "I am " + age + " years old";
  console.log(`I am ${age} years old`);
}

getMessage(37);
getMessage(25);
getMessage(18);
*/

// eslint-disable-next-line consistent-return
function getMessage(age) {
  if (age < 0 || typeof age !== "number") {
    return null;
  }
  console.log(`I am ${age} years old`);
}
// test data
getMessage(37);
getMessage(25);
getMessage(18);
getMessage(undefined);
getMessage(null);

const mult = (a, b) => a * b;
// test data
console.log(mult(2, 4)); // ==> 8
console.log(mult(-7, -7)); // ==> 49
console.log(mult(5, null)); // ==> 0
console.log(mult("aaa", "bbb")); // ==> NaN

const getMagicNumber = () => {
  return 17;
};
// test data
console.log(getMagicNumber()); // ==> 17
console.log(getMagicNumber(20)); // ==> 17
