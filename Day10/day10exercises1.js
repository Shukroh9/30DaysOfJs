// create an empty set
const empty = new Set()
// create a set containing 0-10 using loop
let sets = new Set()
for (let i = 0; i <= 10; i++) {
    sets.add(i)
}
console.log(sets)
// remove an element from a set
sets.delete(5)
console.log(sets)
// clear a set
sets.clear()
console.log(sets)
// create a set of 5 string elements from array
let arr = ['a', 'b', 'c', 'd', 'e']
let stringSet = new Set(arr)
console.log(stringSet)
// create map of countries and number of characters in each country
let Countries = [
    "Nigeria",
    "Finland",
    "Sweden",
    "Norway"
]
let countryMap = new Map(Countries.map(country => [country, country.length]))
console.log(countryMap)