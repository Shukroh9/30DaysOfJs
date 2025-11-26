// declare a function full name
function fullName() {
    let firstName = 'Shukroh'
    let space = ' '
    let lastName = 'Olajumoke'
    const fullName = firstName + space + lastName
    console.log(fullName)
}
fullName()
// fullName function that takes first and last name as parameters
function fullNname(a, b) {
    console.log(a + ' ' + b)
}
fullNname('Shukroh', 'Olajumoke')
// declare function addNumbers
function addNumbers(num1, num2) {
    sum = num1 + num2
    console.log(sum)
}
addNumbers(2, 3)
// function that calculates area of rectangle
function areaOfRectangle(length, width) {
    area = length * width
    console.log(area)
}
areaOfRectangle(5, 10)
// function that calculates perimeter of rectangle
function perimeterOfRectangle(length, width) {
    perimeter = 2 * (length + width)
    console.log(perimeter)
}
perimeterOfRectangle(3, 4)
// function that calculates volume of a rectangular prism
function volumeOfRectPrism(length, width, height) {
    volume = length * width * height
    console.log(volume)
}
volumeOfRectPrism(2, 3, 4)
// function that calculates area of circle
function areaOfCircle(r) {
    area = Math.PI * r * r
    console.log(area)
}
areaOfCircle(1)
// function that calculates circumference of a circle
function circumOfCircle(r) {
    circumference = 2 * Math.PI * r
    console.log(circumference)
}
circumOfCircle(1)
// function that calculates density
function density(mass, volume){
    density = mass / volume
    console.log(density)
}
density(6, 2)
// function that calculates the speed of a moving car
function speed(tdc, tatt) {
    // tdc - total distance covered
    // tatt - total amount of time taken
    speed = tdc / tatt
    console.log(speed)
}
speed(10, 2)
// function that calculates weight
function weight(mass, gravity) {
    gravity = 10
    weight = mass * gravity
    console.log(weight)
}
weight(5)
// function that convert celsius to fahrenheit
function fahrenheit(celsius) {
    fahrenheit = celsius * (9/5) + 32
    console.log(fahrenheit)
}
fahrenheit(2)
// function that calculates body mass index
function BMI(weight, height) {
    bmi = weight / (height * height)
    if (bmi < 18.5) {
        console.log('Underweight')
    } else if (bmi >= 18.5 <= 24.9) {
        console.log('Normal weight')
    } else if (bmi >= 25 || bmi <= 29.9){
        console.log('Overweight')
    } else if (bmi >= 30) {
        console.log('Obese')
    }
}
BMI(200, 2)
// function that checks season
function checkSeason(month) {
    month = month.toLowerCase()
    if (month === 'september' || month === 'october' || month === 'november'){
        console.log('Autumn')
    } else if (month === 'december' || month === 'january' || month === 'february'){
        console.log('Winter')
    } else if (month === 'march' || month === 'april' || month === 'may'){
        console.log('Spring')
    } else if (month === 'june' || month === 'july' || month === 'august'){
        console.log(summer)
    }
}
checkSeason('may')