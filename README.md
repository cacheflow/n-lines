# n-lines

Add any number of newlines to a string



## Installation

## Usage:

Install the package with:

```
npm install --save n-lines
```
## How to use
n-lines takes three arguments. The first is the number of lines you want to add to a string.
The second is an object of options which can be prepend OR append or prepend AND append. Whatever option you select
must have a corresponding boolean of true with it for your lines to be added properly. The third argument can either be a string, an array of strings, or object with strings you want lines added to. Note, passing an object or array returns a [generator](https://davidwalsh.name/es6-generators) function which will return your strings one by one until the function is completed. They can be accessed using .next().value. Once, it's finished the done value will have a false value. Lastly, If you don't pass any options then one line is prepended to your string automatically.
##

```js
let nLines = require('n-lines')
let options = {prepend: true}
let str = "Hello World"
let numOfLinesToAdd = 1
nLines(numOfLinesToAdd, options, str)
```

## Options
Options is an object which takes either prepend, append, or both as arguments. All of the below examples are valid:
 ```
 let optionsWithOnlyPrepend = {
   prepend: true
 }
 let optionsWithOnlyAppend = {
   append: true
 }

 let optionsWithBothAppendAndPrepend = {
  append: true,
  prepend: true
}
 ```
# Example

### Usage

```js
let nLines = require('n-lines')
let options = {prepend: true}
let str = "Hello World"
let numOfLinesToAdd = 1
nLines(numOfLinesToAdd, options, str)


let arr = ["I", "love", "avocado toast"]
let numOfLinesToAdd = 2
nLines(numOfLinesToAdd, options, arr)

let obj = {name: "Samuel Jackson", occupation: "actor", born: "1948"}
let numOfLinesToAdd = 3
nLines(numOfLinesToAdd, options, obj)
```
## Output

### First example
```js
\n
Hello
\n
World
```

### Second example
```js
\n
\n
Avocado
\n
\n
Toast
```

### Third Example
```
\n
\n
\n
Samuel Jackson
\n
\n
\n
actor
\n
\n
\n
1948
```

## Tests
Tests are written with [Mocha](http://visionmedia.github.com/mocha/) and can be
run with `npm test`.

## License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
