const numberList1 = [1, 2, 3, 4, 5];

// input: none
// output: number
console.log("BEFORE POP", numberList1);
const popRes = numberList1.pop();
console.log(popRes);

console.log("AFTER POP", numberList1);

// input: number (any type)
// output: number (new length)
const numberList2 = [1, 2, 3, 4, 5];
console.log("BEFORE PUSH", numberList2);

const pushRes = numberList2.push(100);
console.log(pushRes);

console.log("AFTER PUSH", numberList2);

// input:
// output:
const numberList3 = [1, 2, 3, 4, 5];
console.log("BEFORE UNSHIFT", numberList3);

const unshiftRes = numberList3.unshift(777);
console.log(unshiftRes);

console.log("AFTER UNSHIFT", numberList3);

// refactored

// input: number
// output: boolean
function isPrime(number) {
  for (let index = 2; index < number; index += 1) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;
}

function getPrimes(num) {
  for (let number = 2; number <= num; number += 1) {
    if (isPrime(number)) {
      console.log(number);
    }
  }
}

getPrimes(10);
getPrimes(11);
getPrimes(15);

// ..........................................
const anotgerNumberList = [5, 0, 8, 10, -4, 50, 220];

// input: callback
// output: array

// callback
// input: callback
// output: array

/*
const filterRes = anotgerNumberList.filter(function filterCallBack(el)) {
    return el > 100;
});
console.log(filterRes);
*/
const filterRes = anotgerNumberList.filter((el) => el > 100);
console.log(filterRes);
