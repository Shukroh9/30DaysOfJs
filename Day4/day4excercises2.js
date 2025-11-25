// grade syudents
 let score = prompt('Enter score:')
 if (score >= 80 && score <= 100){
    console.log('Grade A')
 } else if(score >= 70 && score <= 79){
    console.log('Grade B')
 } else if(score >= 60 && score <= 69){
    console.log('Grade C')
 } else if(score >= 50 && score <= 59){
    console.log('Grade D')
 } else if(score <= 0 && score <= 49){
    console.log('Grade F')
 } else{
   console.log('Invalid score')
 }
 // check the season
 let seasonInput = prompt('Enter month')
 let season = seasonInput.toLowerCase()
 switch (season) {
    case 'september':
    case 'october':
    case 'november':
        console.log('The season is Autumn')
        break;
    case 'december':
    case 'january':
    case 'february':
        console.log('The season is Winter')
        break;
    case 'march':
    case 'april':
    case 'may':
        console.log('The season is Spring')
        break;
    case 'june':
    case 'july':
    case 'august':
        console.log('The season is Summer')
        break;
        default:
        console.log('It is not any season')
 }
 // check the day
 let day = prompt('Enter day:').toLowerCase()
 if (day === 'saturday' || day === 'sunday'){
   console.log(`${day[0].toUpperCase() + day.slice(1)} is a weekend`)
 } else if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday"){
   console.log(`${day[0].toUpperCase() + day.slice(1)} is a weekday`)
 } else{
   console.log('Invalid day')
 }