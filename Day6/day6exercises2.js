// develop a small script which generate any number of characters id
// write a script which generates a random hexadecimal number
// write a script which generates a random rgb color number
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
// create a new array from the countries array
let newArr = []
for (let i = 0; i < countries.length; i++) {
    newArr.push(countries[i].toUpperCase())
}
console.log(newArr)
// get the countries length
let arrLength = []
for (let i = 0; i < countries.length; i++) {
    arrLength.push(countries[i].length)
}
console.log(arrLength)
// create an array of array
let arrArr = []
for (let i = 0; i < countries.length; i++) {
    arrArr.push([countries[i], countries[i].slice(0,3).toUpperCase(), countries[i].length])
}
console.log(arrArr)
// check if there is a country containing 'land'
let landArr = []
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes('land')){
        landArr.push(countries[i])
    } else {
        console.log('All these countries are without land')
    }
}
console.log(landArr)
// check if there is a country that ends with 'ia'
let iaArr = []
for (let i = 0; i < countries.length; i++) {
    if (countries[i].endsWith('ia')) {
        iaArr.push(countries[i])
    }
}
console.log(iaArr)
// check the longest country
let longest = ""
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length > longest.length) {
        longest = countries[i]
    }
}
console.log(longest)
// countries character that is exactly 5
let long = 5
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length === long) {
        console.log(countries[i])
    }
}
// find the longest word in the webTechs array
let webLongest = ""
for (let i = 0; i < webTechs.length; i++) {
    if (webTechs[i].length > webLongest.length){
        webLongest = webTechs[i]
    }
}
console.log(webLongest)
// use the webTechs array to create array of array
let webArr = []
for (let i = 0; i < webTechs.length; i++) {
    webArr.push([webTechs[i], webTechs[i].length])
}
console.log(webArr)
// create the acronym MERN
let mernStack = [
    "MongoDB",
    "Express",
    "React",
    "Node"
]
let mern = ""
for (let i = 0; i < mernStack.length; i++) {
    mern += mernStack[i][0].toUpperCase()
}
console.log(mern)
// iterate through the webTechs array
for (let i = 0; i < webTechs.length; i++) {
    console.log(webTechs[i])
}
// reverse the fruits array
let fruits = [
    'banana',
    'orange',
    'mango',
    'lemon'
]
for (let i = fruits.length; i >= 0; i--) {
    console.log(fruits[i])
}
// print all the elements of fullstack array
let fullstack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
for (let i = 0; i < fullstack[0,1].length; i++) {
    console.log(fullstack[i])
}