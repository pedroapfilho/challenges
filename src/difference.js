const arrayA = [1, 2, 3]

const arrayB = [2, 3]

// Find the difference between these two arrays and return it all as an array

const difference = (a, b) => {
  // Set create an array with unique values (ignore the ones already passed)
  const s = new Set(b)

  // Set has an API that exposes this "has" function, that returns boolean if the Set has or not some value
  // So I just use the filter to check and I return the difference (the ones that aren't on the Set)
  return a.filter(x => !s.has(x))
}

difference(arrayA, arrayB)
