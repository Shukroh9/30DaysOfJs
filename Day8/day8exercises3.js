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
const users = [
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