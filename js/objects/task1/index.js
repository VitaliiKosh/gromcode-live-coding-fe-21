// creatte obj
// read
// modify obj = add/update/mapping

// V1
// input: obj, key(string), value(any type)
// output: obj
function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

// test data
console.log(addPropertyV1({}, "name", "vasya"));
console.log(addPropertyV1({ name: "vasya" }, "age", 17));
console.log(addPropertyV1({ name: "vasya" }, "name", "ivan"));

// V2
// input: target, sourceObj ... sourceObjN
// output: new obj
// algo: add key/value to the obj with assign
function addPropertyV2(obj, key, value) {
  // option 1 - BAD
  //  Object.assign(obj, { [key]: value });
  //  return obj;

  // option 2 - GOOD
  return Object.assign(obj, { [key]: value });
}

// test data
const obj1 = {};
console.log(addPropertyV2({}, "name", "vasya"));
console.log("after", obj1);

const obj2 = { name: "vasya" };
console.log(addPropertyV2({ name: "vasya" }, "age", 17));
console.log("after", obj2);

const obj3 = { name: "vasya" };
console.log(addPropertyV2({ name: "vasya" }, "name", "ivan"));
console.log("after", obj3);

// V3
function addPropertyV3(obj, key, value) {
  //option 1 - BAD
  //  return Object.assign({ [key]: value }, obj);

  // option 2 - GOOD
  return Object.assign({}, obj, { [key]: value });
}

// test data
const obj4 = {};
console.log("before", obj4);
console.log(addPropertyV3({}, "name", "vasya"));
console.log("after", obj4);

const obj5 = { name: "vasya" };
console.log("before", obj5);
console.log(addPropertyV3({ name: "vasya" }, "age", 17));
console.log("after", obj5);

const obj6 = { name: "vasya" };
console.log("before", obj6);
console.log(addPropertyV3({ name: "vasya" }, "name", "ivan"));
console.log("after", obj6);
