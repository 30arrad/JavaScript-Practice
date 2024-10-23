console.log("Functions & Methods");

//-----------------------Functions-----------------------
//--------
function myFunction () {
    console.log("Functions");
    console.log("Methods");
}

myFunction ();


//------------
let msg = "abc";
function myMsg (msg) {
    console.log(msg);
}

myMsg ("I Love Js");

//--------------
function sum(a, b) {
    s = a + b;
    return s;
}

let val = sum( 4, 5);
console.log(val);

//-----------------------Arrow Functions


const arrowSum = (a, b) => {
    return (a + b);
}

console.log(arrowSum(1, 2));


//--------------------------Qustion Solve Functions----------------------------

// Q1: Create a function using the "funtion" keyword that takes as an argument & returns the number of vowels in the string.


let argument = prompt();
console.log(argument);
vowels (argument);

function vowels (argument){
    let count =0;
    for (const char of argument) {
        if (
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u" 
                ) {
                    count++;
                }
    }

    console.log(count);
}

// -----------------------------forEach loop in Arrays---------

// ---------------------------------Methods------------------------

