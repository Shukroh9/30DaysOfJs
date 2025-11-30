// function that find the factorial of the parameter
function factorialFun(a) {
    let factorial = 1
    for(let i = 2; i <= a; i++) {
        factorial *= i
    }
    console.log(factorial)
}
factorialFun(5)
// function that checks if the parameter is empty
// function that sum all the number of arguments
function sumArg(...arg) {
    let total = 0
    for (let i = 0; i <= arg.length; i++) {
        total += i
    }
    console.log(total)
}
sumArg(1,2,3,4)
// function that sum array parameter
function sumOfArrayItems(arr) {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number'){
            total += arr[i]
        } else if (typeof arr[i] !== 'number') {
            console.log(`${arr[i]} is not a number`)
        }
    }
    console.log(total)
}
sumOfArrayItems([1,2,3,4,5,'a'])
// function that calclates the average of the parameter
function averageFunction(...arg) {
    let average = 0
    let sum = 0
    for (let i = 0; i < arg.length; i++) {
        if (typeof arg[i] !== 'number') {
            console.log(`The average can not be calculate because ${arg[i]} is not a number`)
        } else {
            sum += arg[i]
            average = sum/arg.length
        }
    }
    console.log(average)
}
averageFunction(1,2,3,4,5)
// function that modifies the fifth array
function modifyArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.length < 5) {
            console.log('The array length must not be less than 5')
        } else {
            arr[4]  = arr[4].toUpperCase()
        }
    }
    console.log(arr)
}
modifyArray(['mango', 'apple', 'orange', 'banana', 'cherry', 'dates'])
// 