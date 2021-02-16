const a = [1, 3, 5, 6, 7, 10];

// Create a function that receives an array of integers sorted and a value to look for
// and return the index of this value

const binarySearch = (arr, val) => {
  // We define here the min and max for the range
  let min = 0;
  let max = arr.length - 1;

  // We run it while we don't find the "end" middle value. If it passes this one without returning,
  // the array doesn't contain the value
  while (min <= max) {
    // Gets the middle value summing min and max and dividing by 2 (using Math.floor to not have decimals)
    const middle = Math.floor((min + max) / 2);

    // Get the current value of the middle
    const currentElement = arr[middle];

    // If the value of the middle is smaller than our value, we use the middle + 1 to define the min
    if (currentElement < val) {
      min = middle + 1;

      // If the value of the middle is bigger than our value, we use the middle - 1 to define the max
    } else if (currentElement > val) {
      max = middle - 1;

      // If it is the value, than we return it, that is basically the index of the value on the array
    } else return middle;
  }

  return -1;
};

binarySearch(a, 5);
