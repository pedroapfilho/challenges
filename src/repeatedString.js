const stringToRepeat = 'aabcde'

const numberOfTimes = 100

const charToCount = 'a'

// Take the stringToRepeat and repeat it until you reach the numberOfTimes
// Find how many times the charToCount appears on this string

const repeatedString = (stringToRepeat, numberOfTimes, charToCount) => {
  // Here I find the how many stringToRepeats fits entirely inside the numberOfTimes
  let fracNumber = Math.trunc(numberOfTimes / stringToRepeat.length)

  // Here I calculate how many will remain
  let reminder = numberOfTimes % stringToRepeat.length

  let counter = 0

  // Here I find the number of repeated strings at the stringToRepeat
  for (let i = 0; i < stringToRepeat.length; i++) if (stringToRepeat[i] === charToCount) counter += 1

  // Taking the number of repetitions that I found above and multiplying by the
  // number of times that the string fits inside the numberOfTimes entirely
  counter = counter * fracNumber

  // Calculating the rest
  for (let i = 0; i < reminder; i++) if (stringToRepeat[i] === charToCount) counter += 1

  // On this one I can't add a console.log to help you understand the loop, but I think
  // I added everything you should know to understand this code on the comments

  return counter
}

repeatedString(stringToRepeat, numberOfTimes, charToCount)
