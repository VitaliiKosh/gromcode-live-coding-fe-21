// input: arr, callback
// output: arr

// callback
// input: el, index, arr
// output: bool

// algo
// 0. create result arr
// 1. iterate arr - loop
// 2. call callback for each el
// 3. if callback - true => push el
// 4. after iteration return res arr
/*
const filterArrayElements = (arr, callback) => {
  const resultArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    const callbackRes = callback(arr[index], index, arr);

    if (callbackRes === true) {
      resultArr.push(arr[[index]]);
    }
  }
  return resultArr;
};
*/
// test data
// const arr = [1, 222, 5, 10, 77, 4, -1, 7];
/*
const func = (el, index, arr) => {
  if (index > 2 && el > 5) {
    return true;
  }
  return false;
};
*/
/*
const func = (el, index, arr) => index > 2 && el > 5;

console.log(filterArrayElements(arr, func));
*/

const mapArrayElements = (arr, callback) => {
  const resultArr = arr.map(callback(elem, index, arr) {
    if (callback(elem, index, arr)) 
    {
     resultArr.push(elem);
    }

    return resultArr;
  });
};
// test data
const arr = [1, 222, 5, 10, 77, 4, -1, 7];

const func = (el, index, arr) => index > 2 && el > 5;

console.log(mapArrayElements(arr, func));
