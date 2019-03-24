const clouds = [0, 0, 0, 1, 0, 0]

// Each number on this array is a type of cloud
// Can't jump into the cloud 1
// Can jump 1 or 2 clouds
// Should return the minimum number of jumps possible

const jumpingOnClouds = (clouds) => {
  let jumps = 0
  let counter = 0

  // Looping over all clouds (I've used the "while" because I did't want to run the i++ everytime, and its cleaner this way)
  while (counter < clouds.length) {
    // Check if can jump 2
    if (clouds[counter + 2] === 0) counter += 2

    // If not, goes here and jump 1
    else counter += 1

    // Sometimes you jump 2 and the i can go to a number bigger then or equal to c.length, so make this check before you add a jump
    if (counter !== clouds.length) jumps++

    // This one makes you really understand what is happening
    console.log({ jumps, counter })
  }

  return jumps
}

jumpingOnClouds(clouds)
