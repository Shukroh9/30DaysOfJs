// write a prompt script to find the area of a triangle
let base = prompt('Enter base:')        //20
let height = prompt('Enter height:')    //10
let area = 1/2 * base * height
console.log(area)
// write a prompt script to enter sides of a triangle
let sidea = prompt('Enter side a:') //5
let sideb = prompt('Enter side b:') //4
let sidec = prompt('Enter side c:') //3
let perimeter = sidea + sideb + sidec
console.log(perimeter)
// write a prompt script to enter length and width of a rectangle
let length = prompt('Enter length:')
let width = prompt('Enter width:')
let rectangleArea = length * width
let rectanglePerimeter = 2*(length + width)
console.log(rectangleArea, rectanglePerimeter)
// write a prompt script to get radius
let radius = prompt('Enter radius:')
let pi = 3.14
let circleArea = pi * radius * radius
let circumference = 2 * pi * radius
console.log(circleArea, circumference)
// write a script that prompt user to enter hours and rate per hour
let hours = prompt('Enter hours')
let ratePerHour = prompt('Enter rate per hour')
let weeklyEarning = hours * ratePerHour
console.log('Your weekly earning is' + weeklyEarning)
// check the length of your name
let fiirstName = 'Shukroh'
fiirstName > 7
? console.log('Your name is long')
: console.log('Your name is short')
// compare fiirstName and familyName length
let familyName = 'Oke-Apomu'
fiirstName.length > familyName.length
? console.log('Your first name, ' +fiirstName +' is longer than your family name, ' + familyName)
: console.log('Your family name, ' +familyName +' is longer than your first name, ' + fiirstName)
// compare myAge and yourAge
let myAge = 250
let yourAge = 25
myAge > yourAge
? console.log('I am 225 years older than you')
: console.log('You are older than me')
// use prompt to get the user age
const userBirth = prompt('Enter birth year:')
userBirth > 18
? console.log('You are above 18, you are old enough to drive')
: console.log('You will be allowed to drive after clocking 18')
// number of years you live
let yearsUsed = prompt('Enter the number of years you used')
let lived = Date.now(yearsUsed)
console.log('You lived ' + lived + ' seconds')
// create a human readable format
let yyear = date.getFullYear()
let month = date.getMonth()
let ddate = date.getDate()
let hhours = date.getHours()
let mminutes = date.getMinutes()
// console.log(/${yyear}/${month}/${ddate}' ' ${hhours})