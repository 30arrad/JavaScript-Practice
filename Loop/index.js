console.log("Loops");

let number = [1, 2, 3, 4, 5];
let smalnum = [];

for (const num of number) {
    if (num === 4) {
        break;
    }

    smalnum.push(num);
}

// console.log(smalnum);



function c(val) {
    console.log(val)
};

// c("I Love JS")


function bal () {
    let as = 12
    let ac =12
    let ab = 12

    // return console.log(as +ac+ab)
}


// bal();



const Mynums = [1, 2, 3, 4, 5];

const val =Mynums.filter( (num) => num > 2 ) ;

console.log(val);


const Myitems = [
    {
        name: "Arrad",
        price: 100

    },

    {
        name: "Arrad2",
        price: 200

    },
    {
        name: "Arrad3",
        price: 300

    },
    {
        name: "Arrad4",
        price: 400

    },
    {
        name: "Arrad5",
        price: 500

    },
    
]


const totalPrice = Myitems.reduce( (acc, num) => (acc + num.price), 0 )

console.log(totalPrice);
