'use strict'

const nLines = require('./index.js')
const assert = require('assert');
const chai = require('chai')
const expect = chai.expect
const should = require('chai').should();
const coMocha = require('co-mocha')
const mocha = require('mocha')
coMocha(mocha)


describe('nLines function', function() {
  let testArr = ['hello world']

  it('should append n number of lines to a string', function*() {
    let newTestArr = testArr.slice()
    newTestArr = newTestArr[0]
    let testStr = newTestArr
    for(var i = 0; i < 3; i+=1) {
      testStr = testStr.slice(0, testStr.length) + "\n"
    }
    let res = nLines("3", {append: true}, "hello world")
    return expect( nLines("3", {append: true}, "hello world") )
      .to.equal(res)
  })

  it('should append n number of lines to a string when args is an object', function* () {
      let newTestArr = ["world", "hello"]
      let testObj = {hello: "world", world: "hello"}
      let tempArr = []
      let keys = Object.keys(testObj)
      let numOfNewLines = 3
      for(var i = 0; i < numOfNewLines; i++) {
        keys.forEach(key => tempArr.push(testObj[key] + "\n"))
        newTestArr = newTestArr.map(val => val + "\n")
      }
      let nLinesRes = nLines(numOfNewLines, {prepend: true}, testObj)
      let testNLinesRes = nLines(numOfNewLines, {prepend: true}, testObj)
      let count = 0
      let nLinesResVal;
      let nLinesTestVal;
      while(count < 3) {
        nLinesResVal = nLinesRes.next()
        nLinesTestVal = testNLinesRes.next()
        expect(nLinesTestVal.value).to.equal(nLinesResVal.value)
        count++
      }
      return expect(nLinesTestVal.done).to.equal(nLinesResVal.done)
  })
  it('should prepend n number of lines to a string when args is an object', function() {
    let newTestArr = ["world", "hello"]
    let testObj = {first: "world", second: "hello"}
    let tempArr = []
    let keys = Object.keys(testObj)
    let numOfNewLines = 3
    for(var i = 0; i < numOfNewLines; i++) {
      keys.forEach(key => tempArr.push(testObj[key] + "\n"))
      newTestArr = newTestArr.map(val => "\n" + val)
    }
    let nLinesRes = nLines(numOfNewLines, {prepend: true}, testObj)
    let testNLinesRes = nLines(numOfNewLines, {prepend: true}, testObj)
    let count = 0
    let nLinesResVal;
    let nLinesTestVal;
    expect(nLinesRes.next().value).to.equal(newTestArr[0])
    expect(nLinesRes.next().value).to.equal(newTestArr[1])
    return expect(nLinesRes.next()).to.include({done: true})
  })

  it('should append n number of lines to a string when args is an array', function() {
    let newTestArr = ["world", "hello"]
    let numOfNewLines = 3
    for(var i = 0; i < 3; i++) {
      newTestArr = newTestArr.map(val => "\n" + val)
    }
    let nLinesRes = nLines(numOfNewLines, {prepend: true}, ["world", "hello"])
    expect(nLinesRes.next().value).to.equal(newTestArr[0])
    expect(nLinesRes.next().value).to.equal(newTestArr[1])
    return expect(nLinesRes.next()).to.include({done: true})
  })

  it('should throw an error when number of lines value is not a number', function() {
    let newTestArr = testArr.slice()
    let err = "Looks like you didn't pass a number as your first argument. Try passing a number like 1."
    let func = () => nLines({}, {prepend: true}, ...newTestArr)
    return expect(func).to.throw(Error, err)
  })

  it('should throw an error when users forgets to pass a string to add lines to', function() {
    let err = "Looks like you didn't pass a string to add lines to. Try passing a proper string."
    let func = () => nLines(1, {prepend: true})
    return expect(func).to.throw(Error, err)
  })


  it('should prepend 1 line by default when prepend or append is not passed in options.', function() {
    let newTestArr = testArr.slice()
    newTestArr = newTestArr.slice(0, 1)
    for(var i = 0; i < 1; i++) {
      newTestArr.unshift('\n')
    }
    return expect( nLines("1", {}, "hello world") )
      .to.equal(newTestArr.join(''))
  })

  it('should prepend 1000 lines to a string', function() {
    let newTestArr = testArr.slice()
    for(var i = 0; i < 1000; i++) {
      newTestArr.unshift('\n')
    }
    let result = nLines("1000", {prepend: true}, ...testArr)
    return expect(result)
      .to.equal(newTestArr.join(''))
  })

  it('should append 1000 lines to a string', function() {
    let newTestArr = testArr.slice()
    for(var i = 0; i < 1000; i++) {
      newTestArr.push('\n')
    }
    let result = nLines("1000", {append: true}, ...testArr)
    return expect(result)
      .to.equal(newTestArr.join(''))
  })

  it('should prepend and append when a user passes true to both options.', function() {
    let newTestArr = testArr.slice()
    newTestArr = newTestArr.slice(0, 1)
    for(var i = 0; i < 3; i++) {
      newTestArr.unshift('\n')
      newTestArr.push('\n')
    }
    return expect( nLines("3", {prepend: true, append: true}, ...testArr) )
      .to.equal(newTestArr.join(''))
  })
})
