const path = 'DDUUDDUDUUUD'

// Each letter of this word is a part of the path
// U means Up, D means Down
// It's like: UDU means the the guy went up, down and up again
// a valley is when he goes down and return at the sea level

// Complete the countingValleys function below.
const countingValleys = (path) => {
  let currentLevel = 0
  let valleys = 0

  // A string is just like an Array in Javascript, so you can take each word with word[place]
  for (let i = 0; i < path.length; i++) {
    // Going up and checking if is coming from a level that was above the sea one
    if (path[i] === 'U') {
      currentLevel += 1

      // If comes from below the sea level, then it was a valley
      if (currentLevel === 0) valleys += 1
    }
    // this one just has to run, I don't need to check anything
    if (path[i] === 'D') currentLevel -= 1

    // This one makes you really understand what is happening
    console.log({ currentLevel, path: path[i], valleys })
  }
  return valleys
}

countingValleys(path)
