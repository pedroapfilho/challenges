const a = [-4, -3, -2, -1, 0, 1, 2, 5];

const b = [-4, -3, 0, 1, 2, 5];

const c = [-4, -3, -2, -1, 0, 1, 2, 3, 5];

// Create a function which accepts a sorted array of integers. The function should find the first pair
// where the sum is zero, and return an array that includes both values

const sumIsZero = (arr) => {
  // Here I'll use the pointer strategy, where I create 2 pointers for this array, and try to find the pair that matches the criteria
  let initialPointer = 0;

  let finalPointer = arr.length - 1;

  let sum;

  while (initialPointer < finalPointer) {
    sum = arr[initialPointer] + arr[finalPointer];

    if (sum === 0) return [arr[initialPointer], arr[finalPointer]];

    if (sum > 0) finalPointer -= 1;

    if (sum < 0) initialPointer += 1;
  }
};

sumIsZero(a);

sumIsZero(b);

sumIsZero(c);
