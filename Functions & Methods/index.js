console.log("Functions & Methods");

//-----------------------Functions-----------------------
//--------
// function myFunction () {
//     console.log("Functions");
//     console.log("Methods");
// }

// myFunction ();


// //------------
// let msg = "abc";
// function myMsg (msg) {
//     console.log(msg);
// }

// myMsg ("I Love Js");

// //--------------
// function sum(a, b) {
//     s = a + b;
//     return s;
// }

// let val = sum( 4, 5);
// console.log(val);

// //-----------------------Arrow Functions


// const arrowSum = (a, b) => {
//     return (a + b);
// }

// console.log(arrowSum(1, 2));


//--------------------------Qustion Solve Functions----------------------------

// Q1: Create a function using the "funtion" keyword that takes as an argument & returns the number of vowels in the string.


// let argument = prompt();
// console.log(argument);
// vowels (argument);

// function vowels (argument){
//     let count =0;
//     for (const char of argument) {
//         if (
//             char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u" 
//                 ) {
//                     count++;
//                 }
//     }

//     console.log(count);
// }


// ---------------------------------Methods------------------------


// ----forEach loop in Arrays // higher Order Funtion

//  let arr = [1, 2, 3, 4, 5];

//  arr.forEach(function printVal(val) {
//     console.log(val);
//  }
// );

// arr.forEach((val) => {
//     console.log(val);
// });

// arr.forEach((val, idx, arr) => {
//     console.log(val, idx, arr);
// });

// -----------------------Qustion Slove ---------------

// Q1: For a given array of numbers, Print the square of each value using the forEach loop.

// let nums = [6, 2, 3, 4, 5];

// solve 01
// nums.forEach((num) => {
//     console.log(num*num); // or num**2;
// });

// solve 02
// let squares =(num) => {
//     console.log(num*num); // or num**2;
// };
// nums.forEach (squares);


// ---- Arrays Method 

// map Method-------------------


// let nums = [6, 2, 3, 4, 5];

// nums.map ((val) => {
//         console.log(val);
// });

// let newNum = nums.map ((val) => {
//     return val * val;
// }); // map used hoy new array banate

// console.log(newNum);



// Filter Method -------------------

// let nums = [1, 2, 3, 4, 5, 6 ,7, 8, 9];

// let evenNum = nums.filter((num) => {
//     return num % 2 === 0;
// });

// console.log(evenNum);


// reduce Method -------------------


// let nums = [1, 2, 3, 4];

// const output = nums.reduce((rew, num) => {
//     return rew + num; // 0+1=1, 1+2=3, 3+3=6, 5+4=10;
//     return rew > num ? rew : num; // Large number method
// });

// console.log(output); //10


// -----------------------Qustion Slove ---------------

// Q1: We are given array of marks of students. Filter our the makrs of students that seored 90.


let marks = [ 70, 80 ,90, 95,40];

let scored = marks.filter((num) => {
        return num >= 90 && num <= 100;
    });
console.log(scored); 









// Q2: Take a number n as input from user. Create an arry from 1 to n.
// use the reduce method to calculate sum of all numbers in the array.
// use the reduce method to calculate product of all numbers in the array.

let n = prompt ("Enter a Number")

let arr = [];

for ( let i = 1; i <= n; i++) {
    arr [i - 1] = i;
}
console.log (arr);

const sum = arr.reduce((rew, num) => {
    return rew + num;
});
console.log(sum);


const product = arr.reduce((rew, num) => {
    return rew * num; 
});
console.log(product);