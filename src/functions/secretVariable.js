const secretVariable = () => {
  const theSecretVariable = "I'm private"

  return () => theSecretVariable
}

// Not accessible normally
console.log(secretVariable())

// Kinda secret
const accessSecret = secretVariable()
console.log(accessSecret())

// Kinda hackable
console.log(secretVariable()())
