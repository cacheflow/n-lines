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
must have a corresponding boolean of true with it for your lines to be added properly. Lastly, the third argument is the string itself.
##

```js
let nLines = require('n-lines')
let options = {prepend: true}
let str = "Hello World"
let numOfLinesToAdd = 1
nLines(numOfLinesToAdd, options, str)
```

##Options
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
```
The output of the above example will be:
&nbsp;

Hello World
