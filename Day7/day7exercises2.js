// function that calculates value of a linear equation
function solveLinEqu(a, b, c) {
    //let linEqu = a*x + b*y + c
   // console.log(linEqu)
}
solveLinEqu(2, 3, 4)
// function that calculates value of a quadratic equation
// declare a function printArray, it takes array as parameter
let arr = [1, 2, 3, 4, 5]
function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
printArray(arr)
// function that shows date
function showDateTime() {
    const now = new Date()
    let date = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear()
    let hour = now.getHours();
    let minute = now.getMinutes();
    console.log(`${date} / ${month} / ${year} ${hour} : ${minute}`)
}
showDateTime()
// function that swap values
function swapvalues(x, y) {
    let temp = x
    x = y
    y = temp
    console.log([x, y])
}
swapvalues(3, 6)
// function that reverse array
let aRr = [5, 4, 3, 2, 1]
function reverseArray(aRr) {
    for (let i = aRr.length; i > 0; i--) {
        console.log(aRr[i])
    }
}
reverseArray(aRr)
// function that cqpitalized array
let lowerArray = ['c', 'x', 'i', 'o']
function capitalizedArray(lowerArray) {
    let capitalized = []
    for (let i = 0; i < lowerArray.length; i++) {
        capitalized[i] = lowerArray[i].toUpperCase()
    }
    console.log(capitalized)
}
capitalizedArray(lowerArray)
// function that add item to an array
let items = []
function addItem(item) {
    items.push(item)
    console.log(items)
addItem('rice')
// function that removes item from an array
let rItem = ['apple', 'orange', 'pawpaw', 'banana']
function removeItem(index) {
    rItem.splice(index, 1)
    console.log(rItem)
}
removeItem('orange')
// function that add up numbers in the range
function sumOfNumbers(a, b) {
    let sum = 0
    for (let i = a; i <= b; i++) {
        sum += i
    }
    console.log(sum)
}
sumOfNumbers(3,5);
// function that add up all the odd numbers in the range
function sumOfOdd(a, b) {
    let oddSum = 0
    for (let i = a; i <= b; i++) {
        if (i % 2 === 1) {
            oddSum += i
        }
    }
    console.log(oddSum)
}
sumOfOdd(5, 8)