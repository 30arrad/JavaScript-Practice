console.log("Loops");

let number = [1, 2, 3, 4, 5];
let smalnum = [];

for (const num of number) {
    if (num === 4) {
        break;
    }

    smalnum.push(num);
}

console.log(smalnum);



function c(val) {
    console.log(val)
};

// c("I Love JS")


function bal () {
    let as = 12
    let ac =12
    let ab = 12

    return console.log(as +ac+ab)
}


bal();