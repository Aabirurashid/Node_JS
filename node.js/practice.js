// let camper = "James";
// let camper = "David";
// console.log(camper);


// const doSomethingAsync = () => {
//     return new Promise(resolve => {
//       setTimeout(() => resolve('I did something'), 3000)
//     })
//   }
// const doSomething = async () => {
// console.log(await doSomethingAsync())
// }


// const aFunction = async () => {
//     return 'test'
//   }
  
//   aFunction().then() // This will alert 'test'
  
const getFirstUserData = () => {
    return axios.get('/users.json') // get users list
      .then(response => response.json()) // parse JSON
      .then(users => users[0]) // pick first user
      .then(user => fetch(`/users/${user.name}`)) // get user data
      .then(userResponse => userResponse.json()) // parse JSON
  }
  
  getFirstUserData()
  