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
    'Kenya',
];
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
]
// Remove all punctuations, change the string to array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Phyton.'
let textArr = text.split(' ')
console.log(textArr)
console.log(textArr.length)
// Add, remove and edit itemms in the shopping cart
const shoppingCart = [
    'Milk',
    'Coffee',
    'Tea',
    'Honey',
]
let shopUnshift = shoppingCart.unshift('Meat')
console.log(shoppingCart)
let shopPush = shoppingCart.push('Sugar')
console.log(shoppingCart)
let shopPop = shoppingCart.pop()
console.log(shoppingCart)
shoppingCart[2] = 'Green Tea'
console.log(shoppingCart)
// check  if ethiopia  exist in the country array
let Eth = ''