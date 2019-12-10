const array = [1, 2, 12];

// Calculate the average of the array

// This one is one line with ES6, I just have to sum everything with reduce and
// divide it by the array length, just like a common average calculation

const average = arr => arr.reduce((acc, val) => acc + val) / arr.length;

average(array);
