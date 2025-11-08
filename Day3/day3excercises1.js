// check the data types of these variables (1)
let firstName = 'Shukroh'
let lastName = 'Olajumoke'
let country = 'Nigeria'
let city = 'Ilorin'
let  age = 19
let isMarried = null
let year = 2025
console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)
// check if type of '10' is equal to 10
let num = '10'
console.log(typeof num)
// check if parseInt '9.8' is equals to 10
let dnum = '9.8'
let dnumInt = parseInt(dnum)
console.log(dnumInt)
// figure out the result of these comparison expressions first without using console.log
let check1 = 4 > 3      // true
let check2 = 4 >= 3     // true
let check3 = 4 < 3      // false
let check4 = 4 <= 3     // false
let check5 = 4 == 4     // true
let check6 = 4 === 4    // true
let check7 = 4 != 4     // false
let check8 = 4 !== 4    // false
let check9 = 4 != '4'   // false
let check10 = 4 == '4'  // true
let check11 = 4 === '4' // false
let lp = 'python'
let lj = 'jargon'
console.log(lp.length > lj.length)
console.log(check1, check2, check3, check4, check5, check6, check7, check8, check9, check10, check11)
// figure out the result of these comparison expressions first without using console.log
let expression1 = 4 > 3 && 10 < 12   //true
let expression2 = 4 > 3 && 10 > 12  //false
let expression3 = 4 > 3 || 10 < 12  //true
let expression4 = 4 > 3 || 10 > 12  //true
let expression5 = !(4 > 3)          //false
let expression6 = !(4 < 3)          //true
let expression7 = !(false)          //true
let expression8 = !(4 > 3 && 10 < 12)//false
let expression9 = !(4 > 3 && 10 > 12)//true
let expression10 = !(4 === '4')      // true
let ip = 'python'
let ij = 'jargon'
let includes = !(ip.includes('on') && ij.includes('on'))
console.log(includes)
console.log(expression1, expression2, expression3, expression4, expression5, expression6, expression7, expression8, expression9, expression10)
// use the date object to do the following
const date = new Date()
console.log(date)
console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDate())
console.log(date.getDay())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getTime())