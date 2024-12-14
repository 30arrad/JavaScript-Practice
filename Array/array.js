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