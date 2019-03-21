const mergeAndRemoveIntersection = (firstArray, secondArray, selector = 'key') => {
  secondArray.forEach(objOfSecond => {
    const foundIndex = firstArray.findIndex(
      objOfFirst => objOfFirst[selector] === objOfSecond[selector]
    )

    if (foundIndex >= 0) firstArray.splice(foundIndex, 1, objOfSecond)
    else firstArray.push(objOfSecond)
  })

  return firstArray
}

mergeAndRemoveIntersection(
  [{ key: 'a' }, { key: 'b' }, { key: 'c' }],
  [{ key: 'd' }, { key: 'e' }, { key: 'a' }, { key: 'b' }],
  'key'
)
