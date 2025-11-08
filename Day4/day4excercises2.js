// grade syudents
 let studentGrade = prompt('Enter score:')
 if (studentGrade > 79 < 101){
    console.log('Grade A')
 } else if(studentGrade > 69 < 80){
    console.log('Grade B')
 } else if(studentGrade > 59 < 70){
    console.log('Grade C')
 } else if(studentGrade > 49 < 60){
    console.log('Grade D')
 } else{
    console.log('Grade F')
 }
 // check the season
 let seasonInput = prompt('Enter month')
 let season = seasonInput.toLowerCase
 switch (season) {
    case 'september, october, november':
        console.log('The season is Autumn')
        break
    case 'december, january, february':
        console.log('The season is Winter')
        break
    case 'march, april, may':
        console.log('The season is Spring')
        break
    case 'june, july, august':
        console.log('The season is Summer')
        break
        default:
        console.log('It is not any season')
 }