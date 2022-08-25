"use strict"
// let arr = [];
// let arr2 = [];
// let obj = {
//     isname: 'John',
//     age: 23,
//     isMarrid: false,
//     hobby: ['sleep', 'dancing']
// }
// for (let key in obj) {
//   arr.push(obj[key])
// }
// for (let i in obj) {
//     // console.log(i);
//     // console.log(obj[i]);
// console.log(`${i} ${obj[i]}`);
// }
// // console.log(arr2 );
// // console.log(arr)
// const array = ['name', 'johon', 'age', 22, 'isMared', false, 'hobbiy', ['slip', 'dancen']];
// let obj = {
// }
// for (let i = 0; i < array.length; i += 2){
//     obj[`${array[i]}`] = array[i + 1];
// }
// console.log(obj);

















let inputs = document.querySelector('#input')
let play = document.querySelector('#play');
let stop = document.querySelector('#stop');
let clear = document.querySelector('#clear');
let a = 0;
play.addEventListener("click", () => {
    let time = setInterval(() => {
        a++;
        inputs.value = a;
    }, 1)
    stop.addEventListener("click", () => {
        clearInterval(time);
    });
    clear.addEventListener("click", () => {
        inputs.value = 0;
        clearInterval(time);
        console.log(inputs.value);
    });
});