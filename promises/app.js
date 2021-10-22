// const fakeRequestCallback = (url, success, failures) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//         if (delay > 4000) {
//             failure('Connection Timeout ;(')
//         } else {
//             success(`Heres is your fake data from ${url}`)
//         }
//     }, delay)
// }

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}


// fakeRequestCallback('books.com', 
// function (response){
//     console.log('it worked')
//     console.log(response)
//     fakeRequestCallback
// }, function (err) {
//     console.log("ERROR", err)
// })

const request = fakeRequestPromise('yelp.com/api/coffee');

 request
    .then(() => {
        console.log("it worked!");
        fakeRequestPromise('yelp.com/api/coffee/page2')
        .then(() => {
            console.log("promise 2 resolved")
            console.log("it worked again")
        })
        .catch(() => {
            console.log("OH NO, ERROR")
            console.log("promise 2 not resolved")
       })
    })
    .catch(() => {
         console.log("OH NO, ERROR")
    })