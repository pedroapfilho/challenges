// Write a function called productOfArray which takes in an array
// of numbers and returns the product of them all.

//TODO explain

const productOfArray = (arr) => {
  let product = 1;

  const helper = (arr) => {
    if (arr.length === 0) return product;

    product *= arr[0];

    return helper(arr.splice(1));
  };

  helper(arr);

  return product;
};

productOfArray([1, 2, 3, 10]);
