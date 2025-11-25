// Declare an empty array
let emptyArray = []
// Declare an array with more than 5 number of elements
let NumArray = ['1', '2', '3', '4', '5', '6', '7']
console.log(NumArray)
// find the length of my array
console.log(NumArray.length)
// get the first item, the middle item and the last item of the array
console.log(NumArray[0])
console.log(NumArray[3])
console.log(NumArray[6])
// Declare an array called mixedDataTypes
let mixedDataTypes = ["school", "4", "age", "3.14", "Shukroh", "90", "true"]
console.log(mixedDataTypes.length)
// Declare an array variable name itCompanies
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
// Print tha array
console.log(itCompanies)
// print the number of companies in the array
console.log(itCompanies.length)
// print the first, middle and last company
console.log(itCompanies[0])
console.log(itCompanies[4])
console.log(itCompanies[6])
// print out each company
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])
// change each company name to uppercase one by one
itCompanies[0] = itCompanies[0].toUpperCase()
itCompanies[1] = itCompanies[1].toUpperCase()
itCompanies[2] = itCompanies[2].toUpperCase()
itCompanies[3] = itCompanies[3].toUpperCase()
itCompanies[4] = itCompanies[5].toUpperCase()
itCompanies[5] = itCompanies[6].toUpperCase()
itCompanies[6] = itCompanies[6].toUpperCase()
console.log(itCompanies)
// print the array like as a sentence
console.log(`${itCompanies} are big IT companies`)
// check if a certain company exist in the itCompanies
let index = itCompanies.indexOf('GOOGLE')
if (index === -1){
    console.log('The company is not found')
} else{
    console.log(index)
}
// filter out companies that have more than one 'o'
// Sort the array
itCompanies.sort()
console.log(itCompanies)
// reverse the array
let reverse = itCompanies.reverse()
console.log(reverse)
// slice out the first three companies from the array
let slicefront = itCompanies.splice(0,3)
console.log(slicefront)
// slice out the last three companies from the array
let sliceback = itCompanies.splice(4,2)
console.log(itCompanies) // incomplete
// remove the first IT company
let remove1 = itCompanies.shift()
console.log(itCompanies)
// remove the middle IT company
let removeMid = itCompanies.splice(3,1)
console.log(removeMid)
// remove the last IT company
let remove2 = itCompanies.pop()
console.log(itCompanies)
// remove all IT companies
itCompanies.splice(0,)
console.log(itCompanies)