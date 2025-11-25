// write a program which tells the number of days in a month
let month = prompt('Enter month').toLowerCase()
switch (month) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        console.log(`${month[0].toUpperCase() + month.slice(1)} has 31days`)
        break;
    case "april":
    case "june":
    case "september":
    case "november":
        console.log(`${month[0].toUpperCase() + month.slice(1)} has 30days`)
        break;
    case "february":
        console.log(`${month[0].toUpperCase() + month.slice(1)} has 28days`)
        break;
        default:
        console.log('invalid month')
}