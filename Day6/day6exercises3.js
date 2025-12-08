// copy countries array
let Countries = [
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
const WebTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
let MernStack = [
    "MongoDB",
    "Express",
    "React",
    "Node"
]
// create a copy of the countries array
let sortedCountries = [...Countries].sort()
console.log(sortedCountries)
// sort the webTechs array
let sortedWebTechs = [...WebTechs].sort()
console.log(sortedWebTechs)
// sort the mernStack array
let sortedMernStack = [...MernStack].sort()
console.log(sortedMernStack)
// extract all couuntry that contain the word land
let containLand = []
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes('land')) {
        containLand.push(countries[i])
    }
}
console.log(containLand)
// find the longest country
let Longest = ""
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length > Longest.length) {
        Longest = countries[i]
    }
}
console.log(Longest)
// find the country that has only 4 characters
let char4 = []
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length === 4) {
        char4.push(countries[i])
    }
}
console.log(char4)
//  find the country that has two or more words
let twoWords = []
for (let country of countries) {
    const words = country.split(" ")
    if (words.length >= 2) {
        twoWords.push(words)
    }
}
console.log(twoWords)
// capitalize and reverse the countries array in a new array
let capitalizeArr = []
for (let country of countries) {
    capitalizeArr.push(country.toUpperCase())
}
console.log(capitalizeArr.reverse())