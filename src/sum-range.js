// Sum all the values from the number until 0

const sumRange = (num) => {
  // Escape hatch
  if (num === 1) return 1;

  // Sums the current value and adds the (value - 1) to the call stack, until it hits 1
  return num + sumRange(num - 1);
};

sumRange(4);
