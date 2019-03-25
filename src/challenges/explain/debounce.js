const debounce = (fn, ms = 0) => {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, args), ms)
  }
}

debounce(() => {
  console.log('debounced')
}, 1000)
