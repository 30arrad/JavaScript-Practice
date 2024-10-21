console.log("Loops and Strings");



// ---------------------------------Loops-----------------------------

// for loop

// for (let count = 1; count <= 5; count++) {
//     console.log("Arrad Ahmed")
// }

//sum

// let sum = 0;
// let n = 100;
// for (let count = 1; count <= n; count++) {
//     sum += count;
// }

// console.log(sum);



//Infinite loop: A loop that never ends // used na kore;



//while loop

// let i = 1;
// while (i <= 5) {
//     console.log("Arrad Ahmed");
//     i++;
// }



//do while loop
//do while loop akbar print hobe e;

// let i = 1;
// do {
//     console.log("Arrad Ahmed");
//     i++;
// }while (i <=0);


// for of loop

// let str = "Arrad Ahmed";

// for (let i of str) {
//     console.log(i);
// }


// for in loop
// for in loop sobsomy key return kore;

// let student = {
//     name: "Arrad Ahmed",
//     age: 21,
// }

// for (let i in student) {
//     console.log(i);
//     console.log(student[i]);

// }


// Q1: Print all event numbers from 0 to 100.

// Ans:

// for (let i = 0; i<=100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

//Q2: Create a game whtere you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

// Ans:

// let gameNum = 25;
// let userNum = prompt("Guessing the number: ");
// console.log(userNum);

// while (userNum != gameNum) {
//     userNum = prompt("Wrong Guessing the number. Again entry Number: ");
//     console.log(userNum);
// }
// console.log("very Good");


// ---------------------------------Strings-----------------------------


// let str = "Arrad Ahmed";

// console.log(str.length);

// console.log(str[0]);


// let obj = {
//     name: "Arrad",
//     age: 21,
// }

// console.log("My name is ",obj.name, ". And My Age is ", obj.age);

// // Template Literals

// let output = `My name is ${obj.name} . And My Age is ${obj.age}`;
// console.log(output);

// let str = "Arrad";

// console.log(str.toLowerCase());

// console.log(str.toUpperCase());

// let str = "     Arrad Ahmed     ";
// console.log(str.trim());

// let str = "Arrad";
// console.log(str.slice(1,3));

// let str = "Arrad";
// let str1 = " Ahmed";
// console.log(str.concat(str1));

// let str = "Arrad";
// console.log(str.replace("A", "H"));

// console.log(str.charAt(0));



// Q1: Prompt the user to enter their full name. Generate a username for them on the input. Start username with @, followed by their full name and ending with the fullname lenght.

// eg: user name = "arrad", username should be "@arrad5"

// Ans:

let username = prompt("Enter You Name : ");

let output = `@${username}${username.length}`
console.log(output);