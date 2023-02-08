// ===
// 1. what is context?
// 2. when context is lost
// 3. how to fix context

console.log(this);

function sayHi() {
  // console.log(this);
  console.log(`Hello ${this.userName}`);
}

const user = {
  userName: "Vitalii",
};

// task 1
const sayHiBinded = sayHi.bind(user);
sayHiBinded();

// task - timer
const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  startTimer() {
    // console.log(this);
    // console.log(this.secondsPassed);
    // input: callback, ms
    // output: number (ID)
    // setInterval(function () {
    // this.secondsPassed += 1;
    // console.log(this.secondsPassed);
    // }.bind(this), 1000);

    // lose context - case 1
    setInterval(() => {
      //  console.log(this);
      this.secondsPassed += 1;
      if (this.secondsPassed === 60) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
      console.log(this);
    }, 1000);
  },
  getTime() {
    //
  },
  stopTimer() {
    //
  },
  resetTimer() {
    //
  },
};

timer.startTimer();

// lose context - case 2
// const func = timer.startTimer;
// func();
