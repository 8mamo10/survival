function blockTime(timeout) {
  const startTime = Date.now();
  while (true) {
    const diffTime = Date.now() - startTime;
    if (diffTime >= timeout) {
      return;
    }
  }
}

console.log("1");
setTimeout(() => {
  console.log("3");
  blockTime(1000);
  console.log("4");
}, 10);
console.log("2");
