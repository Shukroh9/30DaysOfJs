// iterate 0-10 using for loop, while & do while (1)
for (let i = 0; i <= 10; i++){
    console.log(i)
}
let i = 0           // while
while (i <= 10) {
    console.log(i)
    i++
};
// do while
i = 0
do {
    console.log(i)
    i++
} while (i <= 10)
// iterate 10 - 0 also
for (let i = 10; i >= 0; i--) {
    console.log(i)
}
i = 10               // while
while (i >= 0){
    console.log(i)
    i--
}
// do while
i = 10
do {
    console.log(i)
    i--
} while (i >= 0)
// iterate 0-n      (3)
let n = 5;
for (let i = 0; i <= n; i++) {
    console.log(i)
}
// use loop to make a pattern
let pattern = ''
for (let i = 1; i <= 7; i++){
    pattern += '#'
    console.log(pattern)
}
// use loop to print a multiplication pattern
for (let i = 0; i <= 10; i++) {
    console.log(`${i} * ${i} = ${i*i}`)
}
// use loop to print an exponential pattern
for (let i = 0; i <= 10; i++) {
    console.log(`${i}  ${i*i}  ${i*i*i}`)
}
// use for loop to iterate from 0-100 and print only even numbers
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}
// use for loop to iterate from 0-100 and print only odd numbers
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 1) {
        console.log(i)
    }
}
// prime numbers
// use the loop to iterate from 0-100 and print the sum of all numbers
let sum = 0
for (let i = 0; i <= 100; i++) {
    sum += i
}
console.log(sum)
// print the sum of all even numbers from0-100
let sumEven = 0
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0){
        sumEven += i
    }
}
console.log(sumEven)
// print the sum of all odd numbers from 0-100
let sumOdd = 0
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 1) {
        sumOdd += i
    }
}
console.log(sumOdd)
// print the sum of even and odd numbers ass array
console.log([sumEven, sumOdd])
// develop a small script which generate array of 5 random numbers
// develop a small script which generate array of 5 random numbers and the numbers must be unique
// develop a small script which generate a six characters random id