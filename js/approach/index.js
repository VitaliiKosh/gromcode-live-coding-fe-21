// How to work on tech tasks. Step by step guide

// 1. Learn requirement (WHAT?)
// 2. Create step by step algo (& input/output for functions) (HOW?)
// 3. Write draft solution & testing
// 4. Refactoring & final testing -> final solution

// input: number
// output: undefined

// algoritm
// 1. iterate 2 ...num
// 2. check if number is prime
//   2.0 create countert
//   2.1 iterate 1 ...number
//   2.2 if number % index === 0 -> count+=1
//   2.3. if counter >= 2 -> is not prime
// 3. if prime -> console.log

function getPrimes(num) {
  // put your code here
  for (let number = 2; number <= num; number += 1) {
    let counter = 0;
    for (let index = 1; index <= number; index += 1) {
      if (number % index === 0) {
        counter += 1;
      }
    }
    if (counter === 2) {
      console.log(number);
    }
  }
}

// tests
getPrimes(15);
getPrimes(7);
getPrimes(10);
