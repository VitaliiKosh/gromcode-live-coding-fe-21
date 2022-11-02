// callback

// input: number, number, function
// output: undefined
function sum(from, to, resolver) {
  let result = 0;
  for (let index = from; index <= to; index += 1) {
    result += index;
  }
  resolver(result);
}

// input: number
// output: undefined

// 1
function printResult(res) {
  console.log(res);
}

// test data
sum(10, 15, printResult);

// 2
function alertResult(res) {
  alert(res);
}
sum(10, 15, alertResult);
