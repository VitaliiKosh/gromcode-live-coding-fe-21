// GOOD
function compareObjects(firstObj, secondObj) {
  return Object.keys({ ...firstObj, ...secondObj }).every(
    (key) => firstObj[key] === secondObj[key]
  );
}

// NORM
/*
function compareObjects(firstObj, secondObj) {
  return !Object.keys({ ...firstObj, ...secondObj }).some(
    (key) => firstObj[key] !== secondObj[key]
  );
}
*/

// BAD
/*
function compareObjects(firstObj, secondObj) {
  const biggerObj =
    JSON.stringify(firstObj).length > JSON.stringify(secondObj).length ? firstObj : secondObj;
  return !Object.keys(biggerObj).some(key => firstObj[key] !== secondObj[key]);
}
*/

// Option 4 - NORM
// algo #1
// 1. get keys arrs from objects
// 2. '===' length of arrs
// 3. convert to JSON string
// 4. check if key from firstObj !== key from secondObj (use.some()) + return true/false
/*
const compareObjects = (firstObj, secondObj) => {
  const firstArr = Object.keys(firstObj);
  const secondArr = Object.keys(secondObj);
  if (firstArr.length !== secondArr.length) {
    return false;
  }
  return !firstArr.some((key) => firstObj[key] !== secondObj[key]);
};
*/

// Option 4 - REFACTORED
/*
const compareObjects = (firstObj, secondObj) => {
  const firstObjKeys = Object.keys(firstObj);
  if (firstObjKeys.length !== Object.keys(secondObj).length) {
    return false;
  }
  return firstObjKeys.every(key => firstObj[key] === secondObj[key]);
};
*/

// Option 5 - BAD
// algo #2
// 1. get arrays from objects
// 2. sort arrs
// 3. convert to JSON string
// 4. '===' two JSON string

/*
const compareObjects2 = (firstObj, secondObj) =>
  JSON.stringify(Object.entries(firstObj).sort()) ===
  JSON.stringify(Object.entries(secondObj).sort());
*/

// Option 6 - THE BEST FOR NOW
// algo
// 1. get keys obj 1
// 2. get keys obj 2
// 3. compare keys length and return false if length is not equal
// 4. iterate keys obj1 and check if the value of obj1.key === value of obj2.key
/*
function compareObjects(firstObj, secondObj) {
    const firstObjKeys = Object.keys(firstObj);
    const secondObjKeys = Object.keys(secondObj);

    if (firstObjKeys.length !== secondObjKeys.length) {
        return false;
    }
    return firstObjKeys.every(key => firstObj[key] === secondObj[key]);
}
*/

// Option 7 - BAD
/*
function compareObjects(firstObj, secondObj) {
  const firstArray = Object.keys(firstObj);
  if (firstArray.length !== Object.keys(secondObj).length) {
    return false;
  }
  return firstArray.reduce((acc, element) => {
    if (firstObj[element] !== secondObj[element]) {
      acc = false;
    };
    return acc;
  }, true);
};
*/

// Option 8 - VERY BAD CODE QUALITY
/*
const compareObjects = (firstObj, secondObj) =>
  Object.keys(firstObj).reduce(
    (acc, key, index) =>
      firstObj[key] === secondObj[key] && index === acc ? acc + 1 : -1,
    0
  ) === Object.keys(secondObj).length;
*/

// Option 9 - BAD
/*
function compareObjects(firstObj, secondObj) {
  const ordered = (obj) =>
    Object.keys(obj)
      .sort()
      .reduce((acc, el) => {
        acc[el] = obj[el];
        console.log(acc);
        return acc;
      }, {});
  const sortFirstObj = ordered(firstObj);
  const sortSecondObj = ordered(secondObj);
  return JSON.stringify(sortFirstObj) === JSON.stringify(sortSecondObj);
}
*/
