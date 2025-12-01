const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node.js'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'React', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node.js'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}
// find the person that has many skills     (1)
let manySkills = ""
let person = ''
for (let user in users) {
    if (users[user].skills.length > manySkills){
        manySkills = users[user].skills.length
        person = [user]
    }
}
console.log(manySkills)
console.log(person)
// count logged in users and users having greater than 50points     (2)
let numLoggedIn = 0
for (let a in users){
    if (users[a].isLoggedIn === true){
        numLoggedIn++
    }
}
console.log(numLoggedIn)
let numAbove50 = 0
for (let a in users) {
    if (users[a].points >= 50){
        numAbove50++
    }
}
console.log(numAbove50)
// mern stack developers        (3)
let developers = ''
let mern = ['MongoDB', 'Express', 'React', 'Node.js']
for (let a in users) {
    if (mern.every(skill => users[a].skills.includes(skill))){
        console.log(users[a])
    }
}
// add your name to the users object without modifying the users object     (4)
let newUsers = {
    ...users,
    myName: {
        firstName: 'Shukroh',
        lastName: 'Olajumoke'
    }
}
// get all keys or properties of users object       (5)
const usersKeys = Object.keys(users)
console.log(usersKeys)
// get all values of the users object       (6)
const usersValue = Object.values(users)
console.log(usersValue)
// use countries object to print a country's name, population, capital and languages
const country = {
    Name: 'Nigeria',
    capital: 'Abuja',
    population: '237.5Million',
    languages: ['Yoruba', 'Hausa', 'Igbo']
}
console.log(Object.values(country))