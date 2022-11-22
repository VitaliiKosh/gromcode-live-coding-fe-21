// algo
// 1. create obj
// 2. iterate keyList
// 3. add key/value to the obj
// 4. return obj

// DRAFT
/*
function buildObject(keysList, valuesList) {
  // put you code here
  const obj = {};

  for (let index = 0; index < keysList.length; index += 1) {
    //    obj.keysList[index] = valuesList[index]; - BAD. WILL NOT WORK
    obj[keysList[index]] = valuesList[index];
  }

  return obj;
}
*/

// FINAL
function buildObject(keysList, valuesList) {
  // put you code here
  //  keysList.reduce((obj, key, index) => {
  //    obj[key] = valuesList[index];
  //    return obj;
  //  }, {});

  return keysList.reduce(
    (obj, key, index) => ({ ...obj, [key]: valuesList[index] }),
    {}
  );
}

// examples
const keys = ["name", "address", "age"];
const values = ["Bob", "Ukraine", 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
