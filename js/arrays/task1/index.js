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
