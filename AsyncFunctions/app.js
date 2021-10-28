// async function hello(){
// }

const sing = async() => {
    throw "OH NO, PROBLEM"
    return 'LA LA LA LA';
}

sing()
.then((data) => {
    console.log("PROMSISE RESOLVED WITH", data)
})
.catch(err => {
    console.log("OH NO, PROMISE REJECTED!")
    console.log(err)
})

