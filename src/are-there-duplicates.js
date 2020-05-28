// Implement a function that accepts a variable number of arguments,andchecks whether there are any duplicates among the arguments passed in.

const areThereDuplicates = (...params) => {
  const uniqueParams = [...new Set(params)];

  if (params.length > uniqueParams.length) {
    return true;
  }

  return false;
};

areThereDuplicates(1, 2, 3);

areThereDuplicates(1, 2, 2);
