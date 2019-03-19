const mergeArrayOfObjects = (original, newdata, selector = 'key') => {
  newdata.forEach(dat => {
    const foundIndex = original.findIndex(
      ori => ori[selector] === dat[selector]
    )

    if (foundIndex >= 0) original.splice(foundIndex, 1, dat)
    else original.push(dat)
  })

  return original
}

mergeArrayOfObjects(
  [{ key: 'a' }, { key: 'b' }, { key: 'c' }],
  [{ key: 'd' }, { key: 'e' }, { key: 'a' }, { key: 'b' }],
  'key'
)
