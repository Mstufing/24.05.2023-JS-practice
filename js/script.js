
// ? Task #1
// ? Reverse Array

// function reverseArr(num) {
//     return num.toString().split('').reverse();
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let inp = document.querySelector(".inp");
//     let result = document.querySelector(".result");

//     result.innerHTML = reverseArr(inp.value);
// }

// ? Task #2
// ? Ascending Descending None

// function ascDecNone(arr, str) {
//     if (str === 'Asc')
//         return arr.sort((a, b) => a - b);
//     if (str === 'Dec')
//         return arr.sort((a, b) => b - a);
//     if (str === 'None')
//         return arr;
// }

// let btn = document.querySelector('.btn');

// btn.onclick = () => {
//     let inp1 = document.querySelector('.inp1');
//     let inp2 = document.querySelector('.inp2');
//     let res = document.querySelector('.result');

//     res.innerHTML = ascDecNone(inp1.value.trim().split(' '), inp2.value);
// }

// ? Task #3
// ? Index Multiplier

// function indexMultiplier(arr) {
//     if (arr.length === 0)
//         return 0;
//     let myArr = arr.map((elem, index) => elem * index);

//     return myArr.reduce((acc, cur) => Number(acc) + Number(cur));
// }

// let btn = document.querySelector('.btn');

// btn.onclick = () => {
//     let inp1 = document.querySelector('.inp1');
//     let res = document.querySelector('.result');

//     res.innerHTML = indexMultiplier(inp1.value.trim().split(' '));
// }

// ? Task #4
// ? Marathon

// function marathonDistance(arr) {
//     let myArr = arr.map(elem => Math.abs(elem));
//     return myArr.reduce((accumulate, currentValue) => accumulate + currentValue) >= 25;
// }

// let btn = document.querySelector('.btn');

// btn.onclick = () => {
//     let inp1 = document.querySelector('.inp1');
//     let res = document.querySelector('.result');

//     res.innerHTML = marathonDistance(inp1.value.trim().split(' '));
// }

// ? Task #5
// ? Mirror

// function mirror(arr) {
//     let myArr = arr.slice(0, arr[arr.length - 2]).reverse();
//     return arr.concat(myArr);
// }

// let btn = document.querySelector('.btn');

// btn.onclick = () => {
//     let inp1 = document.querySelector('.inp1');
//     let res = document.querySelector('.result');

//     res.innerHTML = mirror(inp1.value.trim().split(' '));
// }
