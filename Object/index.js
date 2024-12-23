console.log("Study of Object");

// Basic Object---An object can store properties as key-value pairs.


const obj = {
    name: "Arrad",
    age: 21,
    isMarried: "No",
    adders: {
        country: "Bangladesh",
        city: "Dhaka"
    }
};

// console.log(obj);
// console.log(obj.name);
// console.log(obj.isMarried);
// console.log(obj.adders);


// ***********************************************************************************

// Adding and Updating Properties --- You can add or update properties in an object.


const obj1 = {
    name: "Arrad",
    age: 21,
};

// Adding new Properties

obj1.isMarried = "No";

// Updating new Properties

obj1.age = 22;

// console.log(obj1);

// ***********************************************************************************

// Methods in Objects --- An object can contain functions, which are called methods.

const Name = {
    First_Name: "Arrad",
    Last_Name: "Ahmed",
    Full_Name: function() {
        return `${this.First_Name} ${this.Last_Name}`
    },
};

// console.log(Name.Full_Name());

// ***********************************************************************************

// Nested Objects --- Objects can contain other objects as properties.

const Book = {
    Author_Name: "Arrad",
    Book_Name: {
        Frist_Book: "Improve Myself",
        Second_Book: "Business Run",
        Third_Book: "Love Life",
    },
};

// console.log(Book.Book_Name.Frist_Book);
// console.log(Book.Book_Name.Second_Book);
// console.log(Book.Book_Name.Third_Book);


// ***********************************************************************************

// Object Destructuring --- You can extract values from an object into variables using destructuring.


const laptop = {
    Brend: "HP",
    Model: "PAVILION",
    Price: 72000,
};

const {Brend, Model, Price} = laptop;

// console.log(Brend);
// console.log(Model);
// console.log(Price);



// ***********************************************************************************

// Looping Through an Object --- Use a for...in loop to iterate over an object's properties.

const Books = {
    Name: " Love Life",
    Price: 999,
};

for(let key in Books) {
    // console.log(`${key}: ${Books[key]}`)
};



// ***********************************************************************************

// Object Methods: Keys, Values, and Entries --- Use Object.keys(), Object.values(), or Object.entries() for easier property management.
const MySYM = Symbol("key1");

const Arrad = {
    Age: 21,
    Height: "5.5 Feet",
    Weight: "45 Kg",
    [MySYM]: "arradKey1",
};

// console.log(Object.keys(Arrad));
// console.log(Object.values(Arrad));
// console.log(Object.entries(Arrad));

// console.log(Arrad);

// Object.keys(), Object.values(), or Object.entries()

