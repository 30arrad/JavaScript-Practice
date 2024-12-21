console.log("Array Study");

// Basic Array Declaration --- An array can hold multiple values.


const Name = ["Arrad", "Ahmed", "Areeba", "Mom", "Dad"];

// console.log(Name[2]);
// console.log(Name.length);


// Adding and Removing Elements  --- You can use methods like push(), pop(), unshift(), and shift().


let Number = [1, 2, 3];

// console.log(Number.push(4));

// console.log(Number);

// console.log(Number.unshift(0));

// console.log(Number);

// console.log(Number.pop(0));

// console.log(Number);

// console.log(Number.shift(4));

// console.log(Number);


// Looping Through an Array  --- Use for, forEach(), or for...of to iterate through an array.

let Language = ["Java", "Python", "C+", "C"];

for(let Lag =0; Lag < Language.length; Lag++) {
    // console.log(Language[Lag]);
};

// Language.forEach( (lag) => {console.log(lag)});


// Transforming Arrays --- Use methods like map() or filter().

let num = [1, 2, 3, 4, 5];

const Squar = num.map((num) => num ** 2);

// console.log(Squar);


const odd = num.filter((num) => num % 2 === 1);

// console.log(odd);

let sum = [1, 2, 3].reduce((a, b) =>a + b, 0);
// console.log(sum); // Output: 6

let arr = [1, 2, 3];
arr.pop();
// console.log(arr); // Output: [1, 2]
arr.pop();
// console.log(arr); // Output: [1]
arr.pop();
// console.log(arr); // Output: []

// console.log([1, 29, 3, 4, 50, 6].lastIndexOf(50)); // Output: 2

// [1, 2, 3, 4, 5 , 6].forEach(num => console.log(num));

let ar = [1, 2, 3];
ar.shift();
// console.log(ar); // Output: [2, 3]

// console.log([1, 2, 3].includes(3)); // Output: true

// console.log([1, 2, 4].some(num => num > 3)); // Output: true

let nums = [1, 2, 4];
// console.log(nums.some(num => num > 3));

let arr1 = [2, 3];
arr1.unshift(1);
// console.log(arr1); // Output: [1, 2, 3]

// console.log([1, 2, 3].find(num => num > 2)); // Output: 3

// console.log([1, 2, 3].every(num => num > 1));

// console.log([1, 2].concat([3, 4])); // Output: [1, 2, 3, 4]

// console.log([1, 1, 3].findIndex(num => num > 1)); // Output: 2

// console.log([3, 1, 2, 4,7,6,7,9].sort()); // Output: [1, 2, 3, 4, 6, 7, 7, 9]

// console.log([1, 2, 3, 5].slice(1)); // Output: [2, 3]

// console.log([1, 2, 3, 0, 10, 4].filter(num => num > 1)); // Output: [2, 3, 10, 4]

// console.log([1, 2, 3].join("*")); // Output: "1*2*3"

let arr2 = [1, 2, 3];
arr2.splice(1, 1, 4);
console.log(arr2); // Output: [1, 4, 3]

console.log([1, 2, 3].map(num => num * 2)); // Output: [2, 4, 6]
