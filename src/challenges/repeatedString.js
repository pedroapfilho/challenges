// TODO I have to take some time to really explain this one

const repeatedString = (chars, numberOfChars, charToCheck) => {
  let restOfLetters = 0

  let remainingLetters = 0

  let doesNotFitOnNumberOfChars = numberOfChars % chars.length

  for (let counter = chars.length; counter >= 0; counter--) {
    if (chars.charAt(counter) === charToCheck) {
      restOfLetters++

      if (counter < doesNotFitOnNumberOfChars) remainingLetters += 1
    }
  }

  const numberOfRepetitions = ((numberOfChars - doesNotFitOnNumberOfChars) / chars.length * restOfLetters) + remainingLetters

  return numberOfRepetitions
}

repeatedString('aabcdea', 10, 'a')
