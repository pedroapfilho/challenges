const num = 10;

// This one is classic, just say the sum of all the numbers
// untill the position you pass to the function

const fibonacci = (n) => {
  // Escape hatch
  if (n === 0) return 0;

  // Escape hatch
  if (n === 1) return 1;

  // It illustrate the concept of recursivity, runs untill it gets to 1 or 0
  return fibonacci(n - 1) + fibonacci(n - 2);
};

fibonacci(num);
