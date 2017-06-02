'use strict'

const nLines = require('./index.js')
const assert = require('assert');
const chai = require('chai')
const expect = chai.expect
const should = require('chai').should();


let num = 0;

describe('nLines function', function() {
  let testArr = ['hello world', "hello world", "hello world"]

  it('should append n number of lines to a string', function() {
    let newTestArr = testArr.slice()
    for(var i = 0; i < 3; i++) {
      newTestArr.push('\n')
    }
    return expect(nLines("3", {append: true}, ...testArr))
      .to.equal(newTestArr.join('\n'))
  })

  it('should prepend n number of lines to a string', function() {
    let newTestArr = testArr.slice()
    for(var i = 0; i < 3; i++) {
      newTestArr.unshift('\n')
    }
    return expect(nLines("3", {prepend: true}, ...testArr))
      .to.equal(newTestArr.join('\n'))
  })

  it('should throw an error when number of lines value is not a number', function() {
    let newTestArr = testArr.slice()
    let err = 'Numer of lines value is not a number. Try passing a number as your newline.'
    let func = () => nLines({}, {prepend: true}, ...newTestArr)
    return expect(func).to.throw(Error, err)
  })

  it('should prepend 1 line by default when no value is passed to append or prepend.', function() {
    let newTestArr = testArr.slice()
    for(var i = 0; i < 1; i++) {
      newTestArr.unshift('\n')
    }
    return expect( nLines("1", {}, ...testArr) )
      .to.equal(newTestArr.join('\n'))
  })

  it('should prepend 1000 lines to a string', function() {
    let newTestArr = testArr.slice()
    for(var i = 0; i < 1000; i++) {
      newTestArr.unshift('\n')
    }
    let result = nLines("1000", {prepend: true}, ...testArr)
    return expect(result)
      .to.equal(newTestArr.join('\n'))
  })
})
