console.log("Arrays");

// let marks = [1, 2, 3, 4, 5];

// console.log(marks);

// console.log(marks.length);

// console.log(typeof marks);

//Array Indices

// marks [4] = 10;

// console.log(marks [4]);

// String -- immutable; index change kora jay na; array -- mutable; index change kora jay;

// looping for array

// let words = ['a', 'b', 'c', 'd', 'e'];

// for (let i = 0; i < words.length; i++) {
//     console.log(words[i]);
// }

// for of 

// for (let word of words) {
//     console.log(word);
//     console.log(word.toUpperCase());
// }


// ---------------------------------------Qustion Solve

// Q1: For a given array with marks of students --> [85, 97, 44, 37, 76, 60] . Find the averege maeks of the entire class.

let marks = [85, 97, 44, 37, 76, 60];
let sum =0;
let avg =0;

for (let mark of marks) {
        // console.log(mark);
        sum = sum + mark;
        avg = sum/marks.length;
};
console.log(avg);


// Q2: For a given array with prices of 5 items --> [250, 645, 300, 900, 50]. All items have an offer of 10% OFF on them . Change the array to final price after applying offer.


let prices =[250, 645, 300, 900, 50];
let finalPrice =0;
let i =0;

for (let price of prices) {   
    finalPrice = price / 10;
    prices[i] = prices[i] - finalPrice;
    console.log(`Final Price : ${prices[i]}`);
    i++;
}


// ------------------------------------------------Array Methods

// Push(); //add to end;
// Pop(); //delet from end & return;
// toString(); n// convert array to string;

// ---Push 

// let items = ["boll", "bat"];
// console.log(items);
// items.push("stamp");
// console.log(items);



// ---pop

// let items = ["boll", "bat"];
// console.log(items);
// items.pop("bat");
// console.log(items);


// ---toString

// let items = ["boll", "bat"];
// console.log(items);
// console.log(items.toString());


// --concat() : join multiple array & returns result;
// --unshift(): add stast;
// --shift() : delet from start & return; 


// --slice() : returns a piece of the array ;
          // slice( startindex, endindex);
// -- splice() : change original array(add, remove, replace);
          // plice(startindex, deletindex, newindex);




// -------------------------------------------Qustion Slove 


// Q: Create an array to store companies --> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"

// a: Remove the first company from the Array. 
// b: Remobe Uber & Add Ola in its place.
// C: Add Amazon at the end


let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM","Netflix"];

console.log(companies);

// a: 

companies.shift();
console.log(companies);

// b: 

companies.splice(1,1, "Ola");
console.log(companies);

// c: 

companies.push("Amazon");
console.log(companies);
