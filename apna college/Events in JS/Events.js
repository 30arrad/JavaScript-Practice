console.log("Events is Js");

// Mouse Events (click, double click, ect);
// Keyboard Events
// Form Events
// print Events & many more 


// Event Handling
// let but3 = document.querySelector(".but");
// but3.onclick = () => {
//     console.log("Button was Click in 3");
// };

// Event Object
// let but3 = document.querySelector(".but");
// but3.onclick = (e) => {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
// };

// Event Listeners
// Node.addEvntListener(event, callback)
// Node.removeEvntListener(event, callback)

// but3.addEventListener("click", (e) => {
//     console.log("Arrad Ahmed");
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
// })



// --------------------------------Qustion Slove ----------------

// Q1: Create a toggle button that changes the screen to dark-mode when click & light-mode when clicked again.

let modeBtn = document.querySelector("#Mode");
let body = document.querySelector("body");
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if(currMode === "light") {
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
});