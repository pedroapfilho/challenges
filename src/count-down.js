// Print down all the numbers, one by one, until you hit 0

const countDown = (num) => {
  // Escape hatch
  if (num === 0) return;

  // Prints the current value
  console.log(num);

  // Use the same function, recursively, to count down the value
  countDown(num - 1);
};

countDown(5);
