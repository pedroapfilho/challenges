// Write a function called power which accepts a base and an exponent.
// The function should return the power of the base to the exponent.
// This function should mimic the functionality of Math.pow()

const power = (base, exponent) => {
  // Escape hatch
  if (exponent === 0) return 1;

  // I multiply the base recursively until I multiply it by 1
  return base * power(base, exponent - 1);
};

console.log(power(2, 4));
