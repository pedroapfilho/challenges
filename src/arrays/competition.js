const competition = (a, b) => {
  let aPoints = 0
  let bPoints = 0

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) aPoints++
    if (a[i] < b[i]) bPoints++
  }

  return [aPoints, bPoints]
}

competition([1, 2, 3], [2, 1, 5])
