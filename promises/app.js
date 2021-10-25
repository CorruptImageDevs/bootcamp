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

// const fakeRequestPromise = (url) => {
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random() * (4500)) + 500;
//         setTimeout(() => {
//             if (delay > 4000) {
//                 reject('Connection Timeout :(')
//             } else {
//                 resolve(`Here is your fake data from ${url}`)
//             }
//         }, delay)
//     })
// }


// fakeRequestCallback('books.com', 
// function (response){
//     console.log('it worked')
//     console.log(response)
//     fakeRequestCallback
// }, function (err) {
//     console.log("ERROR", err)
// })

// const request = fakeRequestPromise('yelp.com/api/coffee');

//  request
//     .then(() => {
//         console.log("it worked!");
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//         .then(() => {
//             console.log("promise 2 resolved")
//             console.log("it worked again")
//         })
//         .catch(() => {
//             console.log("OH NO, ERROR")
//             console.log("promise 2 not resolved")
//        })
//     })
//     .catch(() => {
//          console.log("OH NO, ERROR")
//     })


// promise chain
// fakeRequestPromise('yelp.com/api/coffee/page1')
// .then((data) => {
//     console.log("IT WORKED!!! (PAGE1)")
//     console.log(data)
//     return fakeRequestPromise('yelp.com/api/coffee/page2')
// })
// .then((data) => {
//     console.log("IT WORKED!!! (PAGE2)")
//     console.log(data)
//     return fakeRequestPromise('yelp.com/api/coffee/page3')
// })
// .then ((data) => {
//     console.log("IT WORKED!!! (PAGE3)")
//     console.log(data)
// })
// .catch(() => {
//     console.log("OH NO IT FAILED!!!")
// })


//creating promises
// new Promise((resolve, reject) => {
//     resolve();
// })

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if(rand < 0.7) {
            resolve("YOUR FAKE DATA HERE");
            }
            reject('REQUEST ERROR')
        }, 1000)
    })
}

fakeRequest('/dogs/1')
    .then((data) => {
        console.log("DONE WITH REQUEST!")
        console.log('data is', data)
    })
    .catch((err) => {
        console.log("OH NO!" , err)
    })