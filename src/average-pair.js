const a = [1, 2, 3];

const b = [1, 3, 3, 3, 5, 6, 7];

// Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of
// the pair equals the target average.

const averagePair = (arr, average) => {
  let pointerStart = 0;

  let pointerEnd = arr.length - 1;

  for (const _ of arr) {
    const currentAverage = (arr[pointerStart] + arr[pointerEnd]) / 2;

    if (currentAverage > average) {
      pointerEnd -= 1;
    }

    if (currentAverage < average) {
      pointerStart += 1;
    }

    if (pointerStart === pointerEnd) {
      return false;
    }

    if (currentAverage === average) {
      return true;
    }
  }

  return false;
};

console.log(averagePair(a, 2));
