const times = 100

// This one is classic, I'll put the problem below:

// "Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”. For numbers which
// are multiples of both three and five print “FizzBuzz”."

// I've customized this one to be more dynamic, so this function
// will return an array, and will not console.log the value.
// If you really really want to console.log this one, just use a forEach
// and console.log the value inside the array. Izipizi

const fizzBuzz = num => {
  let fizzBuzzArray = []

  for (let i = 1; i <= num; i++) {
    (i % 3 === 0 && i % 5 === 0
      ? fizzBuzzArray = [...fizzBuzzArray, 'FizzBuzz']
      : i % 3 === 0
        ? fizzBuzzArray = [...fizzBuzzArray, 'Fizz']
        : i % 5 === 0
          ? fizzBuzzArray = [...fizzBuzzArray, 'Buzz']
          : fizzBuzzArray = [...fizzBuzzArray, i])
  }

  return fizzBuzzArray
}

fizzBuzz(times)
