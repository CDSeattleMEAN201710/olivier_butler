var badMath = require('./badMathLib')()

let onePlusOne = badMath.add(1,1)
let times2by3 = badMath.multiply(2,3)
let square10 = badMath.square(10)
let randomBetween5and50 = badMath.random(5,50)

console.log("Bad math results coming in!")
console.log("-----------")
console.log(onePlusOne, times2by3, square10, randomBetween5and50)
