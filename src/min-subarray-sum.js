const a = [2, 3, 1, 2, 4, 3];

// Given an array, find the minimum needed length of a continuous array that sums up to the a given value

const minSubArrayLen = (arr, value) => {
  let total = 0;
  let start = 0;
  let end = 0;
  let len = Infinity;

  // Lets use the window strategy here, moving the window and trying to find the minimum length

  while (start < arr.length) {
    // If the total is lesser than the value, and the end is not at the end, we add one to the right
    if (total < value && end < arr.length) {
      total += arr[end];
      end += 1;

      // If the window sum is bigger than the value, we remove one from the left
    } else if (total >= value) {
      len = Math.min(len, end - start);
      total -= arr[start];
      start += 1;

      // If none of that occurs, break
    } else {
      break;
    }
  }

  return len === Infinity ? 0 : len;
};

console.log(minSubarrayLen(a, 7));
