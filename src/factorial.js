// Create a function that receives a number, and returns the factorial of this number

const factorial = (num) => {
  // I could do this one with a loop, but I'll do it with a recursive function

  // Escape hatch
  if (num === 0) return 1;

  // Returns the number * (number - 1) until it hits the escape hatch, that is 1
  return num * factorial(num - 1);
};

factorial(10);
