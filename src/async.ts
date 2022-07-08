function blockTime(timeout) {
  const startTime = Date.now();
  while (true) {
    const diffTime = Date.now() - startTime;
    if (diffTime >= timeout) {
      return;
    }
  }
}

// console.log("1");
// setTimeout(() => {
//   console.log("3");
//   blockTime(1000);
//   console.log("4");
// }, 10);
// console.log("2");

const startTime = Date.now();
setTimeout(() => {
  const endTime = Date.now();
  console.log("8");
}, 10);
console.log("6");
blockTime(1000);
console.log("7");

// try {
//   setTimeout(() => {
//     throw new Error("Async error1");
//   }, 10);
// } catch (error) {
//   console.log(error);
// }
// console.log("11");

setTimeout(() => {
  try {
    throw new Error("Async error2");
  } catch (error) {
    console.log(error);
  }
}, 10);
console.log("22");
