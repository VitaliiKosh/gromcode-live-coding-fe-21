// method map

const numbersList = [5, 0, 8, 10, -4, 50, 220];

// input: callback, context
// output: array

// callback input: el, index (optional), array (optional)
// callback output: new element
/* const mapRes = numbersList.map((el) => {
  return el * el;
});

console.log(mapRes);
*/
/*
const mapRes = numbersList.map((el) => {
  if (el > 0) {
    return el * el;
  }
  return el;
});

console.log(mapRes);
*/
const mapRes = numbersList.map((el) => (el > 0 ? el ** 2 : el));
console.log(mapRes);

// method find

// input: callback
// output: element

// callback input: el
// callback output: boolean

const findRes = numbersList.find((el) => el > 100);
console.log(findRes);

// method forEach

// input: callback
// output: undefined

// callback input: el, index (optional), array (optional)
// callback output: undefind

numbersList.forEach((el) => {
  if (el > 0) {
    console.log(el);
  }
});
// ternary
// condition ? A : B;
// numbersList.forEach((el) => {
// wrong using
// el >0 ? console.log(el) : console.log("Error");
// correct using
//  console.log(el > 0 ? el: "Error");
// });

// method reduce

// input: callback, accInitValue (optional)
// output: result (any type)

// callback input: acc, el, index (optional), array (optional)
// callback output: result (any type)

const transactions = [5, 0, 8, -50, 8, -100, 10, -4, 50];
const reduceRes = transactions.reduce((acc, el) => {
  //  console.log("acc: " + acc);
  //  console.log("el: " + el);
  if (el < 0) {
    // eslint-disable-next-line no-param-reassign
    acc += el;
  }
  return acc;
}, 0);

console.log(reduceRes);

// const reduceRes = transactions.reduce((acc, el) => (el < 0 ? acc + el : acc));
// console.log(transactions);
// console.log(reduceRes);
