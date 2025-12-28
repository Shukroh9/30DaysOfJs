// iterate through the users array and get all the keys of the object using destructuring
let destructuredUser = users.forEach(({name, scores, skills, age}) => console.log(name, scores, skills, age))
// find the person who have less than 2 skills
let lesserSkills = users.filter(({skills}) => {
    if (skills.length < 2){
        console.log(lesserSkills)
    }
})