'use strict'

module.exports = ((numOfNewLines = 1, opts = {}, ...args) => {
  let numOfNewLinesAsInt = parseInt(numOfNewLines)
  if ( isNaN(numOfNewLines) ) {
    throw new Error('Numer of lines values is not a number. Try passing a number as your newline.')
  }
  let optsKeys = Object.keys(opts)
  let obj = Object.assign(opts)
  let newArr = []
  for(var i = 0; i < numOfNewLinesAsInt; i++) {
    if(optsKeys.length > 0) {
      for(var key in obj) {
        if(key === 'prepend' && obj[key] === true) {
          newArr.unshift("\n")
        }
        if(key === 'append' && obj[key] === true) {
          newArr.push('\n')
        }
      }
    }

    else {
      newArr.push("\n")
    }
  }
  obj['append'] === true ? newArr.unshift(...args) : newArr.push(...args)
  return newArr.join('\n')
})
