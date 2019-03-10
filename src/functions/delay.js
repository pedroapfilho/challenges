const delay = (fn, wait, ...args) => setTimeout(fn, wait, ...args)

const exampleFunction = text => console.log(text)

delay(exampleFunction, 1000, '1 second delayed')
