// get user input and tell whether the user can drive or not
let userAge = prompt('Enter your age:')
    let ageGap = 18 - userAge
if (userAge >= 18){
    console.log('You are old enough to drive')
} else{
    console.log(`You have ${ageGap} years to drive`)
}
// compare the values of my age and your age and tell who is older
let myAge = 19
let yourAge = prompt('Enter your age:')
if (myAge > yourAge) {
    console.log('I am older than you')
} else{
    console.log('You are older than me')
}
// compare a and b in two ways
let a = 3
let b = 4
if (a > b) {
    console.log(`${a} is greater than ${b}`)
} else {
    console.log(`${a} is less than ${b}`)
}
// the second way
a > b
? console.log('a is greater than b')
: console.log('a is less than b')
// check if number is even or odd
let number = prompt('Enter number:')
if (number % 2 === 0) {
    console.log(`${number} is an even number`)
} else {
    console.log(`${number} is an odd number`)
}