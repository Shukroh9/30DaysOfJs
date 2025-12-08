const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
    { product: 'banana', price: 3},
    { product: 'mango', price: 6},
    { product: 'potato', price: ' '},
    { product: 'avocado', price: 8},
    { product: 'coffee', price: 10},
    { product: 'tea', price: ''}
]
// explain the difference between forEach, map, filter and reduce           (1)
// forEach: executes a provided function once for each elements of the array
// map: creates a new array by applying a function to each element
// filter: creates a new array containing only the elements that pass the condition
// reduce: add all items together and give one value

// define a callback function       (2)
const callback = (n) => {}
// console.log each country in the countries array using forEach
countries.forEach(n => {
    console.log(n)
})
// console.log each name in the names array using forEach
names.forEach(n => console.log(n))
// console.log each number in the numbers array
numbers.forEach(n => console.log(n))
// use map to create a new array by changing the couuntry to uppercase
let upperCountry = countries.map(n => n.toUpperCase())
console.log(upperCountry)
// use map to create countries length from countries array
let countryLength = countries.map(n => n.length)
console.log(countryLength)
// use map to create an array of the square of the numbers array
let squareNum = numbers.map(n => n*n)
console.log(squareNum)
// use map to change each name in the names array to uppercase
names.map((name, index, arr) => arr[index] = name.toUpperCase())
console.log(names)
// use map to map the products array to its corresponding prices
let mapped = products.map((pro) => {
    console.log(`${pro.product}: ${pro.price}`)
})