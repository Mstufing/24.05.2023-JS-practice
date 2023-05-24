
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

// ? Task #6
// ? Array of Multiples

// function arrayOfMultiples(num1, num2) {
//     let arr = [];
//     for (let i = 1; i <= num2; i++) {
//         arr.push(i * num1);
//     }
//     return arr;
// }

// let myButton = document.querySelector(".btn");

// myButton.onclick = () => {
//     let firstInp = document.querySelector(".inp1");
//     let secondInp = document.querySelector(".inp2");
//     let myResult = document.querySelector(".result");

//     myResult.innerHTML = arrayOfMultiples(firstInp.value, secondInp.value);
// }

// ? Task #7
// ? Double Letters

// function doubleLetters(str) {
//     let arr = str.split('');
//     let cnt = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === arr[i + 1])
//             cnt++;
//     }
//     if (cnt == 1)
//         return true;
//     return false
// }

// let btn = document.querySelector('.btn');

// btn.onclick = () => {
//     let inp = document.querySelector('.inp');
//     let res = document.querySelector('.result');

//     res.innerHTML = doubleLetters(inp.value);
// }

// ? Task #8
// ? Has KEY

// function hasKey(obj, str) {
//     return Object.keys(obj).includes(str)
// }

// console.log(hasKey({ pot: 1, tot: 2, not: 3 }, "not"))
// console.log(hasKey({ craves: true, midnight: true, snack: true }, "morning"))


// ? Task #9
// ? Find NaN

// function findNaN(arr) {
//     let myArr = arr.findIndex(Number.isNaN);
//     return myArr
// }

// let btn = document.querySelector('.btn');

// btn.onclick = () => {
//     let inp = document.querySelector('.inp');
//     let res = document.querySelector('.result');

//     res.innerHTML = findNaN(inp.value.trim().split(" "));
// }

// ? Task #10
// ? Maximum Score
// ! Devam...

// function maximumScore(arr) {
//     let myArr = arr.filter(elem => Object.values(elem) === typeof 'number');
//     if (myArr.length === 0)
//         return 0;
//     return myArr.reduce((acc, cur) => Number(acc) + Number(cur));
// }

// ? Task #11
// ? To Array

// function toArray(obj) {
//     return Object.entries(obj);
// }

// console.log(toArray({ shrimp: 15, tots: 12 }))

// ? Task #12
// ? Keys And Values

// function keysAndValues(obj) {
//     return [Object.keys(obj), Object.values(obj)]
// }

// console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));


