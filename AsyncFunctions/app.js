// async function hello(){
// }

// const sing = async() => {
//     throw "OH NO, PROBLEM"
//     return 'LA LA LA LA';
// }

// sing()
// .then((data) => {
//     console.log("PROMSISE RESOLVED WITH", data)
// })
// .catch(err => {
//     console.log("OH NO, PROMISE REJECTED!")
//     console.log(err)
// })

const login = async (username, password) => {
    if(!username || !password) throw "PASSWORD OR USERNAME IS WRONG"
    if(password === 'password') return 'WELCOME'
    throw 'Invalid Password'
}

login('adony', 'password')
.then(msg => {
    console.log("LOGGED IN ")
    console.log(msg)
})
.catch(err => {
    console.log("ERROR")
    console.log(err)
})

