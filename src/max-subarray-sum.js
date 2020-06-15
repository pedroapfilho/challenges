const a = [1, 2, 5, 2, 8, 1, 5];

const b = [1, 2, 5, 2, 8, 1, 5];

// Write a function which accepts an array of integers and a number called n. The function should calculate the maximum
// sum of n consecutive elements in the array

const maxSubarraySum = (arr, n) => {
  if (arr.length < n) return null;

  // Here we will use the window strategy, where we calculate the first interval, and then
  // we go adding and subtracting the first and the last value, going forward, until the end of the array
  let maxSum = 0;

  // Here we define the first sum
  for (let i = 0; i < n; i += 1) {
    maxSum += arr[i];
  }

  // Here we pass the initial max to a temp variable
  let tempSum = maxSum;

  for (let i = n; i < arr.length; i += 1) {
    // Here we go subtracting the last and adding the next value, until the end of the array
    tempSum += arr[i] - arr[i - n];

    // If the temp value is bigger than the max, then we use it as the max
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }

  return maxSum;
};

maxSubarraySum(a, 2);

maxSubarraySum(b, 4);
