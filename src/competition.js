const arr1 = [1, 2, 3]

const arr2 = [2, 1, 5]

// Each number of the array is the number of points of some match (the position defines which match)
// Return an array with the score of both (2 values)

const competition = (a, b) => {
  let aPoints = 0
  let bPoints = 0

  // Just looping here over the length of a (it can be on b too, both will always have the same length)
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) aPoints++
    if (a[i] < b[i]) bPoints++
  }

  return [aPoints, bPoints]
}

competition(arr1, arr2)
