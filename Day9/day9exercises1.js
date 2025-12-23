const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];
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
// use filter to filter out countries containing land
let countriesLand = countries.filter((country) => country.includes('land'))
console.log(countriesLand)
// use filter to filter out countries containing six characters
let countriesSixChar = countries.filter((country) => country.length === 6)
console.log(countriesSixChar)
// use filter to filter out countries containig six or more characters
let countriesMoreChar = countries.filter((country) => country.length >= 6)
console.log(countriesMoreChar)
// use filter to filter out countries that start with "E"
let countriesStartE = countries.filter((country) => country.startsWith("E"))
console.log(countriesStartE)
// use filter to filter out prices with value
let productsPrice = products.filter((product) => product.price > 0)
console.log(productsPrice)
// function that returns an array only with string items
function getStringLists (arr) {
    return arr.filter(item => typeof item === "string")
}
console.log(getStringLists(names))
// use reduce to sum all the numbers in the numbers array
let sum = numbers.reduce((total, acc) => {return total + acc}, 0)
console.log(sum)
// use reduce to concatenate all the countries and produce a statement
// explain the different between some and every
/* some: it returns true if at least one element in the array satisfies the condition otherwise false
   every: it returns true if all the element in the array satisfies the condition otherwise even if one element fails the condition
*/
// use some to check if some names length is greater than seven in the names array
let nameSeven = names.some(name => name.length >= 7)
console.log(nameSeven)
// use every to check if all the countries contain land
let countryLand = countries.every(country => country.includes('land'))
console.log(countryLand)
// explain the difference between find and findIndex
/* find: Return the first element that satisfies the condition
   findIndex: Return the position of the first element that satisfies the conditon
*/
// use find to find the first country that has 6 characters
let char6 = countries.find(country => country.length === 6)
console.log(char6)
// use findIndex to find the position of the first country that has 6 characters
let charIndex = countries.findIndex(country => country.length === 6)
console.log(charIndex)
// use findIndex to find the position of Norway
let index = countries.findIndex(country => country.toLowerCase() === "norway")
console.log(index)
// use findIndex to find the position of Russia
let index2 = countries.findIndex(country => country === "Russia")
console.log(index2)