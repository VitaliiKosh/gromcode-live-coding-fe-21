const createLogger = () => {
  const records = [];

  return {
    warn(message) {
      records.push({
        message,
        dateTime: new Date(),
        type: "warn",
      });
    },
    error(message) {
      records.push({
        message,
        dateTime: new Date(),
        type: "error",
      });
    },
    log(message) {
      records.push({
        message,
        dateTime: new Date(),
        type: "log",
      });
    },
    getRecords(type) {
      return (type ? records.filter((el) => el.type === type) : records).sort(
        (a, b) => b.dateTime - a.dateTime
      );
    },
  };
};

// examples
const logger1 = createLogger();
logger1.log("User logged in");
logger1.warn("User is tring to ented restricted page");
logger1.log("User logged out");
logger1.error("Unexpected error on the site");

console.log(logger1.getRecords()); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]

const logger2 = createLogger();
logger2.log("sdsdsdsd");

console.log(logger2.getRecords());

// function
// input
// includes array = memory,
// includes 4 methods
// output object with 4 methods

// algo
// 1. create let memory in form array
// 2. create function warn
//  2.1 input someMessage
//  2.2 write it in memory with type warn
// 3. create function error
//  3.1 input someMessage
//  3.2 write it in memory with type error
// 4. create function log
//  4.1 input someMessage
//  4.2 write it in memory with type log
// 5. create function getRecords
//  5.1 input type
//  5.2 return array filtered by type or empty array or array;

/*

export const createLogger = () => {
  // put your code here
  const arrayMemory = [];

  const warn = (someMessage) => {
    arrayMemory.push({
      message: someMessage,
      type: 'warn',
      dateTime: new Date(),
    });
  };

  const error = (someMessage) => {
    arrayMemory.push({
      message: someMessage,
      type: 'error',
      dateTime: new Date(),
    });
  };

  const log = (someMessage) => {
    arrayMemory.push({
      message: someMessage,
      type: 'log',
      dateTime: new Date(),
    });
  };

  const getRecords = (someType) => {
    if (arrayMemory.length === 0) {
      return arrayMemory;
    } else if (someType === undefined) {
      return arrayMemory.sort((a, b) => b.dateTime - a.dateTime);
    } else {
      return arrayMemory
        .filter((el) => el.type === someType)
        .sort((a, b) => b.dateTime - a.dateTime);
    }
  };

  return {
    warn,
    error,
    log,
    getRecords,
  };
};

// examples

const logger1 = createLogger();
logger1.log('User logged in');
logger1.warn('User is tring to ented restricted page');
logger1.error('Unexpected error on the site');
logger1.log('User logged out');

console.log(logger1.getRecords()); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
console.log(logger1.getRecords('log')); // ===> [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
console.log(logger1.getRecords('error')); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
console.log(logger1.getRecords('warn')); // ===> [{ message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }]

const logger2 = createLogger();
logger2.warn('Opps, something is happenning');
console.log(logger2.getRecords('error')); // ===> []
console.log(logger2.getRecords('warn')); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]
console.log(logger2.getRecords()); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]

const logger3 = createLogger();
console.log(logger3.getRecords('error')); // ===> []
console.log(logger3.getRecords()); // ===> []
*/
