// create a person's account        (1)
const personAccount = {
    firstName: 'Shukroh',
    lastName: 'Olajumoke',
    incomes: {
        salary: 50000,
        freelancing: 20000,
        gift: 5000
    },
    expenses: {
        food: 15000,
        transport: 5000,
        rent: 20000
    }
}
// total income
let totalIncome = 0
for (let a in personAccount.incomes) {
    totalIncome += personAccount.incomes[a]
}
console.log(totalIncome)
// total expenses
let totalExpenses = 0
for (let a in personAccount.expenses) {
    totalExpenses += personAccount.expenses[a]
}
console.log(totalExpenses)
// Account Balance
let totalBalance = totalIncome - totalExpenses
console.log(totalBalance)
// AccountInfo
function accountInfo() {
    console.log(`
    Name: ${personAccount.firstName} ${personAccount.lastName}
    Total Income: ${totalIncome}
    Total Expenses: ${totalExpenses}
    Account Balance: ${totalBalance}`)
}
accountInfo()
// Question 2, 3 and 4 are based on this array
const userS = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]
// function that allows user to signUp      (2a)
function signUp(name, email, password) {
    const userExists = userS.some(user => user.email === email)
    if (userExists) {
        console.log("User already exist")
    } else{
    const newUser = {
        _id: '',
        username: name,
        email: email,
        password: password,
        createdAt: new Date(),
        isLoggedIn: false
    }
    userS.push(newUser)
    console.log('User registered successfully')
    }
}
signUp('Shukroh', 'shukroh@gmail.com', '123456')
console.log(userS)
// function that allows user to signin
function signIn(email, password) {
    const userEmail = userS.find(user => user.email === email)
    if (!userEmail) {
        console.log('User does not exist');
        return
    }
    const passwordd = userS.find(user => user.password === password)
    if (!passwordd) {
        console.log('Incorrect password')
    } else { console.log('You have successfully logged In')}
}
signIn('shukroh@gmail.com', '123456')
// Product function that rates product
function rateProduct(productId, userId, rate) {
    const product = products.find(p => p._id === productId)
    if (!product) {
        return ('Product does not exist')
    }
    product.ratings.push({userId, rate})
    return product.ratings
}
rateProduct('hedfdt', 'gf24pj', 5)
console.log(products[2])
// calculate the average rate of a product
function averageRate(productId) {
    const product = products.find(p => p._id === productId)
    const rates = products.find(p => p.ratings.rate)
    for (let a in products) {
        let 
    }
}