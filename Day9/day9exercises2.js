// find the total price of products
let productsFilter = products.filter(product => typeof product.price === "number")
console.log(productsFilter)
let priceMap = productsFilter.map(product => product.price)
console.log(priceMap)
let priceSum = priceMap.reduce((total, acc) => total + acc, 0)
console.log(priceSum)
// find the total price using reduce
let totalPrice = products.reduce((sum, product) => sum + Number(product.price), 0)
console.log(totalPrice)
// a function that returns an array of countries that has pattern
function categorizeCountries() {
    const patterns = ["land", "ia", "island", "stan"];
    return patterns.map(pattern => countries.filter(country => country.toLowerCase().includes(pattern)))
}
console.log(categorizeCountries())
// create a function that returns array of abjects
