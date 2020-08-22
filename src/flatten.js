const arr = [[[[1], [[[2]]], [[[[[[[3]]]]]]]]]];

// Write a recursive function called flatten which accepts an array of arrays and
// returns a new array with all values flattened.

const flatten = (arr) => {
  let flattened = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (Array.isArray(arr[i])) {
      flattened = [...flattened, ...flatten(arr[i])];
    } else {
      flattened = [...flattened, arr[i]];
    }
  }

  return flattened;
};

flatten(arr);
