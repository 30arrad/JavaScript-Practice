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

// console.log([1, 2, 3].map(num => num * 2)); // Output: [2, 4, 6]




/* 
1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`. 
   Access the first element of the array and store it in a variable named `firstTea`.
*/

let teaFlavors = ["green tea", "black tea", "oolong tea"];

const firstTea = teaFlavors[0];

/* 
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. 
   Access the third element in the array and store it in a variable named `favoriteCity`.
*/

let cities = ["London", "Tokyo", "Paris", "New York"];
const favoriteCity = cities[2];

/* 
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. 
   Change the second element of the array to `"jasmine tea"`.
*/
let teaTypes = ["herbel tea", "white tea", "masala chai"];

/* 
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
   Add `"Berlin"` to the array using the `push` method.
*/

let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin");
// console.log(citiesVisited);

/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
   Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
const lastOrder = teaOrders.pop();

/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
*/

let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;
popularTeas.pop();
// console.log(softCopyTeas);
// console.log(popularTeas);

/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/

let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities];
// let hardCopyCities = topCities.slice();
topCities.pop();
// console.log(hardCopyCities);

/* 
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = europeanCities.concat(asianCities);

console.log(worldCities);

/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/

let teaMenu = ["Masala chai", "oolong tea", "green tea", "earl grey"];

let menuLength = teaMenu.length;

/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];

let isLondonInList = cityBucketList.includes("London");




let arr5 = [1, 2, 3, 4];
console.log(arr5.indexOf(3));




