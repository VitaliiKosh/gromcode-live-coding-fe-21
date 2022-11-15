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
  // option 1 - BAD
  // return Object.assign({ [key]: value }, obj);

  // option 2 - GOOD
  return Object.assign({}, obj, { [key]: value });
}

// test data
const obj1 = {};
console.log("before", obj1);
console.log(addPropertyV3({}, "name", "vasya"));
console.log("after", obj1);

const obj2 = { name: "vasya" };
console.log("before", obj2);
console.log(addPropertyV3({ name: "vasya" }, "age", 17));
console.log("after", obj2);

const obj3 = { name: "vasya" };
console.log("before", obj3);
console.log(addPropertyV3({ name: "vasya" }, "name", "ivan"));
console.log("after", obj3);

// V4
function addPropertyV3(obj, key, value) {
  return { ...obj, [key]: value };
}

// test data
const obj1 = {};
console.log("before", obj1);
console.log(addPropertyV3({}, "name", "vasya"));
console.log("after", obj1);

const obj2 = { name: "vasya" };
console.log("before", obj2);
console.log(addPropertyV3({ name: "vasya" }, "age", 17));
console.log("after", obj2);

const obj3 = { name: "vasya" };
console.log("before", obj3);
console.log(addPropertyV3({ name: "vasya" }, "name", "ivan"));
console.log("after", obj3);
