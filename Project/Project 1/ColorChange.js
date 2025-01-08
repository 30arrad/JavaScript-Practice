
console.log("Color Change");



let buttons = document.querySelectorAll('.button');
let body = document.querySelector("body");

// console.log(buttons);
// console.log(body);


buttons.forEach(function(button) {
    // console.log(button);
    button.addEventListener('click', function(event) {
    // console.log(event);
    // console.log(event.target);

    if(event.target.id === 'grey') {
        body.style.backgroundColor = event.target.id
    } else if (event.target.id === 'red') {
        body.style.backgroundColor = event.target.id
    }
    else if (event.target.id === 'blue') {
        body.style.backgroundColor = event.target.id
    }
    else if (event.target.id === 'yellow') {
        body.style.backgroundColor = event.target.id
    } else 
    body.style.backgroundColor = 'white'
    })
    
})


