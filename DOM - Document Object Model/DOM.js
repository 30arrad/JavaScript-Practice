console.log("DOM - Document Object Model");

// window Object - it is a global object with lots of properties & methods.

console.dir(window.document);

console.dir(document.body);
console.log(document.body);

// DOM Manipulation

//id
document.getElementById("pag");
//class
document.getElementsByClassName("div")
// tag - <p>, <h1>
document.getElementsByTagName("p");
//Query Selector- #id, .class, tag
document.querySelector("p");


// Properties;

// tagName : return tag for element nodes.
// innerText : return the text content of the element and all its children
// innerHTML : return the plain text or HTML contents in the element 
// textContent : return textual content even for hidden element.
// div.tagName;
// div.innerText;
// div.innerHTML;
// div.textContent;


// -------------------------------Qustion Slove-------------



// Q1: Create a H2 heading element with text - "Hello JavaScript". Append "from Apna College students" to this text using JS.

let h2 = document.querySelector("h2");
console.log(h2.innerText);

h2.innerText = h2.innerText + " from Apna College students";




// Q2: Create 3 divs with common class name - "box". Access them & add some unique text to each of them.

let divs = document.querySelectorAll (".div");
console.log(divs);

let i = 1;
for (div of divs) {
    div.innerText = `new unique value ${i}`;
    i++;
}

// or
// divs[0].innerText = "new unique value 1"
// divs[1].innerText = "new unique value 2"
// divs[2].innerText = "new unique value 3"