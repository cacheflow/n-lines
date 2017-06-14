'use strict'

module.exports = ((numOfNewLines = 1, opts = {}, args) => {
  let numOfNewLinesAsInt = parseInt(numOfNewLines)
  opts = buildOptions(opts)
  ensureNoErrors(numOfNewLines, args, opts)
  if(args.constructor == String) {
    return addNewLineToStr(numOfNewLines, opts, args)
  }
  if( isObject(args) || args.constructor == Array) {
    return addNewLineToStrsFromObjorArr(numOfNewLines, opts, args)
  }
})

const isObject = (val) => val != null && typeof val === 'object' && Array.isArray(val) === false
//taken from https://github.com/jonschlinkert/isobject/blob/master/index.js

function *addNewLineToStrsFromObjorArr (numOfNewLines, opts, args) {
  let newArgs = Object.assign(args)
  newArgs = isObject(args) ? Object.keys(args) : args
  for(let arg of newArgs) {
    yield addNewLineToStr(numOfNewLines, opts, (isObject(args) ? args[arg] : arg))
  }
}

const buildOptions = (opts) => Object.assign(opts)

const addNewLineToStr = (numOfNewLines, opts, str) => {
  let newArr = []
  str = str.constructor != String ? str.toString() : str
  opts['append'] === true ? newArr = newArr.concat(str) : newArr.push(str)
  newArr = newArr.filter(el => el != '\n')
  for(var i = 0; i < numOfNewLines; i+=1) {
    if(Object.keys(opts).length > 0) {
      for(var key in opts) {
        if ( (key === 'prepend' && opts[key] === true) ) {
          newArr.unshift("\n")
        }
        else if ( key === 'append' && opts[key] === true ) {
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
  return newArr.join('')
}

const ensureNoErrors = (numOfNewLines, args, opts) => {
  if(!args) {
    throw new Error("Looks like you didn't pass a string to add lines to. Try passing a proper string.")
  }
  if ( isNaN(numOfNewLines) ) {
    throw new Error("Looks like you didn't pass a number as your first argument. Try passing a number like 1.")
  }

  if ( Object.create(opts).constructor != Object) {
    throw new Error( 'Looks like options is not an object. Try passing an object of your options like {prepend: true}' )
  }
}
