const isOdd = (num) => num % 2 !== 0;

const isEven = (num) => num % 2 === 0;

// Write a recursive function called someRecursive which accepts an array and a callback.
// The function returns true if a single value in the array returns true when passed to the callback.
// Otherwise it returns false.

//TODO explain

const someRecursive = (arr, cb) => {
  let bol = false;

  const helper = (arr) => {
    if (arr.length === 0) return;

    if (cb(arr[0])) {
      bol = true;

      return;
    }

    return helper(arr.slice(1));
  };

  helper(arr);

  return bol;
};

someRecursive([1, 3, 5], isOdd);

someRecursive([1, 3, 5], isEven);
