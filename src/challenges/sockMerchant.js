const socks = [1, 2, 1, 2, 1, 3, 2]

// Each number at the array is a type of sock
// Has to find all pairs
// Should return number of pairs

const sockMerchant = (socks) => {
  // Immutable data, right?
  const socksCopy = [...socks]

  // Sorting to make sense and jump 2 when find it finds a pair
  socksCopy.sort((a, b) => a - b)

  let pairs = 0

  // Looping over the socks and trying to find a pair
  for (let counter = 0; counter < socksCopy.length; counter++) {
    // If I find a pair, I'll jump both socks at the array, add 1 to the pairs variable and continue searching
    if (socksCopy[counter] === socksCopy[counter + 1]) {
      pairs++
      counter++
    }

    // This one makes you really understand what is happening
    console.log({ pairs, counter })
  }

  return pairs
}

sockMerchant(socks)
