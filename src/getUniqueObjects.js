const arr = [
  { id: 1, name: 'king' },
  { id: 2, name: 'master' },
  { id: 3, name: 'lisa' },
  { id: 4, name: 'ion' },
  { id: 5, name: 'jim' },
  { id: 6, name: 'gowtham' },
  { id: 1, name: 'jam' },
  { id: 1, name: 'lol' }
]

// Get the unique objects of this array based on a key
// Just remove the duplicate ones

const getUnique = (arr, key = 'id') => {
  const unique = arr

    // passing all keys
    .map(e => e[key])

    // store the keys of the unique objects
    .map((e, i, final) => final.indexOf(e) === i && i)

    // eliminate the dead keys
    .filter(e => arr[e])

    // store unique objects
    .map(e => arr[e])

  return unique
}

console.log(getUnique(arr, 'id'))
