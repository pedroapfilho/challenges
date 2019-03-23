const fizzBuzz = num => {
  for (let i = 1; i <= num; i++) {
    console.log(
      i % 3 === 0 && i % 5 === 0
        ? 'FizzBuzz'
        : i % 3 === 0
          ? 'Fizz'
          : i % 5 === 0
            ? 'Buzz'
            : i
    )
  }

  console.log("That's all, folks")
}

fizzBuzz(100)
