console.log('Operators and Conditional Statements');

//-----------------------Operators

// let a = 5;
// let b = 2;

// console.log("a =", a, "& b =", b);
// console.log("a + b=", a + b);
// console.log("a - b =", a - b);
// console.log("a * b =", a * b);
// console.log("a / b =", a / b);
// console.log("a % b =", a % b);
// console.log("a ** b =", a ** b); //Exponentiation
// console.log("a % b =", a % b);



// a++; b++; //Increment
// console.log("a =", a, "& b =", b);

// a--; b--; //Decrement
// console.log("a =", a, "& b =", b);

// console.log("a == b", a == b);
// console.log("a != b", a != b);
// console.log("a === b", a === b);
// console.log("a !== b", a !== b);

// console.log("a > b", a > b);
// console.log("a < b", a < b);
// console.log("a >= b", a >= b);
// console.log("a <= b", a <= b);

//logical Operators

// let a = 10;
// let b = 5;

// let con1 = a > b;
// let con2 = a === 6;

// console.log("con1 && con2", con1 && con2);
// console.log("con1 || con2", con1 || con2);
// console.log("!con1 ", !con1);

//----------------------------Conditional Statements

// let age = 17;

// if (age>= 18) {
//     console.log("you can vote")
// } else {
//     console.log("you can not vote")
// }

// let mode = "dark";
// let color;

// if (mode === "dark") {
//     color = "black";
// }

// if (mode === "light") {
//     color = "white";
// }

// console.log (color);

//Ternary Operators
//a? b : c;

// let age = 21;

// let result = age >= 18 ? "adult" : "not adult";
// console.log(result);

//switch

// copy MDN Docs
// const expr = 'Papayas';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // Expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }


// alert("hello!"); //one time popup

// let name = prompt("hello!");
// console.log(name);

//------------------------Problem Slove-------


// Q1: Get user to input a number using prompt ("Enter a number:"). Chect if the number is a multiple of 5 or Not.

//Ans:

// let num = prompt("Enter a number:");
// console.log(num);

// if ((num % 5) === 0) {
//     console.log(num," is multiple of 5");
// } else {
//     console.log(num," is Not multiple of 5");
// }

//Q2: Write a code which can give grades to student according to their scores:
// 80-100,A
// 70-89, B
// 60-59, C 
// 50-59, D
// 0-49, F 


//Ans:

let Score =prompt("Enter a number:");;
let Grade;

if (Score >= 80 && Score <=100) {
    Grade = "A"
}
else if (Score >= 70 && Score <=89) {
    Grade = "B"
}
else if (Score >= 60 && Score <=59) {
    Grade = "C"
}
else if (Score >= 50 && Score <=59) {
    Grade = "D"
} else {
    Grade = "F"
}

console.log(Grade);