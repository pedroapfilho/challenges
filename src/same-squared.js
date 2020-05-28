const a = [1, 2, 3];

const b = [1, 9, 4];

const c = [2, 4, 2];

const d = [1, 2];

const e = [4, 4, 16];

// Write a function which accepts 2 arrays, and return true if the every value in the array has it's corresponding value squared in the second array

const sameSquared = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  // Here I use the frequency strategy, where I create a dictionary for each array
  const dictionary1 = {};

  const dictionary2 = {};

  arr1.forEach(
    (value) =>
      (dictionary1[value] = dictionary1[value] ? (dictionary1[value] += 1) : 1)
  );

  arr2.forEach(
    (value) =>
      (dictionary2[value] = dictionary2[value] ? (dictionary2[value] += 1) : 1)
  );

  // Then I check if the values are them same, based on the question, where 1 is the square of the other
  for (const key in dictionary1) {
    if (dictionary1[key] !== dictionary2[Math.pow(key, 2)]) {
      return false;
    }
  }

  // If it passes, we are good to go
  return true;
};

sameSquared(a, b);

sameSquared(a, c);

sameSquared(d, c);

sameSquared(c, e);
