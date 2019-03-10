const average = arr => {
  return arr.reduce((acc, val) => acc + val) / arr.length
}

average([1, 2, 12])
