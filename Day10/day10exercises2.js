// find a union b
let a = [1, 2, 3, 4]
let b = [3, 4, 5, 6]
let union = [...a, ...b]
let setA = new Set(a)
let setB = new Set(b)
let setC = new Set(union)
console.log(setC)
// find a intersection b
let intersection = a.filter(num => setB.has(num))
console.log(intersection)
// find a without b
let unique = a.filter(num => !setB.has(num))
console.log(unique)