'use strict'

module.exports = ((numOfNewLines = 1, opts = {}, ...args) => {
  let numOfNewLinesAsInt = parseInt(numOfNewLines)
  if ( isNaN(numOfNewLines) ) {
    throw new Error('Numer of lines value is not a number. Try passing a number as your newline.')
  }
  let optsKeys = Object.keys(opts)
  let obj = Object.assign(opts)
  let newArr = []
  obj['append'] === true ? newArr = newArr.concat(...args) : newArr.push(...args)
  newArr = newArr.filter(el => el != '\n')
  for(var i = 0; i < numOfNewLinesAsInt; i+=1) {
    if(optsKeys.length > 0) {
      for(var key in obj) {
        if ( (key === 'prepend' && obj[key] === true) ) {
          newArr.unshift("\n")
        }
        else if (key === 'append' && obj[key] === true) {
          newArr.push('\n')
        }
        else {
          newArr.unshift("\n")
        }
      }
    }
    else {
      newArr.unshift("\n")
    }
  }
  return newArr.join('\n')
})
