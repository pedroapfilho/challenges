const a = [1, 2, 3, 4, 5, 6, 7, 4, 4, 5, 6];

// Create a function that counts the unique values of the given array

// This one is a one liner, if you spread the new Set(arr) it will create a "Set" with unique values, and then you just have to spread it
// inside an array, then you have an array of unique values. Then, you just have to get the lenght of this array
const countUnique = (arr) => [...new Set(arr)].length;

console.log(countUnique(a));
