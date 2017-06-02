'use strict'

module.exports = ((numOfNewLines = 1, opts = {}, ...args) => {
  let numOfNewLinesAsInt = parseInt(numOfNewLines)
  if ( isNaN(numOfNewLines) ) {
    throw new Error("Looks like you didn't pass a number as your first argument. Try passing a number like 1.")
  }
  if ( !args.length ) {
    throw new Error("Looks like you didn't pass a string to add lines to. Try passing a proper string.")
  }
  if ( Object.create(opts).constructor != Object) {
    throw new Error( 'Looks like options is not an object. Try passing an object of your options like {prepend: true}' )
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
        else if ( key === 'append' && obj[key] === true ) {
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
