
// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = "orange";
//         setTimeout(() => {
//             document.body.style.backgroundColor = "yellow";
//             setTimeout(() => {
//                 document.body.style.backgroundColor = "green";
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = "blue";
//                     setTimeout(() => {
//                         document.body.style.backgroundColor = "indigo";
//                         setTimeout(() => {
//                             document.body.style.backgroundColor = "violet";
//                         },1000)
//                     },1000) 
//                 },1000) 
//             },1000)            
//         },1000)
//     }, 1000)
// }, 1000)

// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//     }, delay)
// }

// delayedColorChange('pink', 1000, () =>
//     delayedColorChange('orange', 1000, () => {
//         delayedColorChange('green', 1000, () =>{
//             delayedColorChange("indigo", 1000, () => {
//                 console.log("done")
//             })
//         })
//     })
// );

// common scenarios

// searchMoviesAPI('Harry Potter', () => {
//     saveToMyDB(movies, () => {
//             //if it works, run this:
//     }, () => {
//     //if it doesnt work, run this:
//     })
//  }, () => {
//         //if API is down, or request failed, run this
//     })

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() =>delayedColorChange('orange', 1000))
    .then(() =>delayedColorChange('yellow', 1000))
    .then(() =>delayedColorChange('green', 1000))
    .then(() =>delayedColorChange('blue', 1000))
    .then(() =>delayedColorChange('indigo', 1000))
    .then(() =>delayedColorChange('violet', 1000))
    .then(() =>delayedColorChange('hotpink', 1000))